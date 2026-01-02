// --- Core Data Structures & Helpers ---

class Hexagon {
    constructor(id, label, rarity, sides, element) {
        this.id = id;
        this.label = label;
        this.rarity = rarity;
        this.sides = sides;
        this.element = element;
    }
}

const rarityValue = { 'mythic': 5, 'legendary': 4, 'epic': 3, 'rare': 2, 'common': 1, 'none': 0 };

function calculateRarityScore(arrangement) {
    return Object.values(arrangement).reduce((sum, hex) => sum + (rarityValue[hex.rarity] || 0), 0);
}

function calculateMatchScorePair(hex1, hex2, sideIndex1, sideIndex2) {
    if (!hex1 || !hex2) return { score: 0, color: null };
    const color1 = hex1.sides[sideIndex1];
    const color2 = hex2.sides[sideIndex2];
    if (color1 !== 'none' && color1 === color2) {
        return { score: 1, color: color1 };
    }
    return { score: 0, color: null };
}

function getActiveBuffs(toyZ, level) {
    const buffs = [];
    // Correct buff availability: 1st buff at level 0+, 2nd buff at level 2+, 3rd buff at level 4+, 4th buff at level 6+
    const numBuffs = level >= 6 ? 4 :
        level >= 4 ? 3 :
            level >= 2 ? 2 :
                level >= 0 ? 1 : 0;

    if (toyZ && toyZ.buffs && toyZ.buffs.length > 0) {
        for (let i = 0; i < Math.min(numBuffs, toyZ.buffs.length); i++) {
            const buff = toyZ.buffs[i];
            buffs.push({
                name: buff.type,
                value: buff.value,
                isPercentage: buff.type === 'Crit %' || buff.type === 'Atk Spd'
            });
        }
    }

    return buffs;
}

// Worker-specific version of calculateLayoutBuffs that works with arrangement objects
function calculateLayoutBuffs(arrangement, colorCounts = null) {
    const buffTotals = {};
    const toyzInLayout = [];

    // Add ToyZ buffs (including level 0)
    Object.values(arrangement).forEach(hex => {
        if (hex && hex.toyzData && hex.toyzLevel !== undefined) {
            const level = hex.toyzLevel;
            toyzInLayout.push({ toyZ: hex.toyzData, level: level, name: hex.label });
            const activeBuffs = getActiveBuffs(hex.toyzData, level);

            activeBuffs.forEach(buff => {
                if (!buffTotals[buff.name]) {
                    buffTotals[buff.name] = {
                        value: 0,
                        isPercentage: buff.isPercentage,
                        count: 0
                    };
                }
                buffTotals[buff.name].value += buff.value;
                buffTotals[buff.name].count += 1;
            });
        }
    });

    // Add layout buffs from color matches with bonus for 4+ matches
    if (colorCounts) {
        const colorToBuffMapping = {
            'gray': { name: 'Basic Damage', baseValue: 3, bonusValue: 2 },
            'red': { name: 'Boss Damage', baseValue: 2, bonusValue: 1 },
            'yellow': { name: 'Skill Damage', baseValue: 2, bonusValue: 1 },
            'blue': { name: 'All Damage', baseValue: 2, bonusValue: 1 },
            'purple': { name: 'Crit Damage', baseValue: 2, bonusValue: 1 }
        };

        Object.entries(colorCounts).forEach(([color, count]) => {
            if (count > 0 && colorToBuffMapping[color]) {
                const buffInfo = colorToBuffMapping[color];
                const buffName = `${buffInfo.name} (Layout)`;

                // Base buff value
                let buffValue = buffInfo.baseValue * count;

                // Add bonus if 4 or more matches
                if (count >= 4) {
                    buffValue += buffInfo.bonusValue;
                }

                if (!buffTotals[buffName]) {
                    buffTotals[buffName] = {
                        value: 0,
                        isPercentage: true,
                        count: 0
                    };
                }
                buffTotals[buffName].value += buffValue;
                buffTotals[buffName].count += count;
            }
        });
    }

    // Add element damage buffs (3+ ToyZ of same element, excluding 'normal')
    const elementCounts = {};
    Object.values(arrangement).forEach(hex => {
        if (hex && hex.element && hex.element !== 'normal' && hex.label !== 'empty') {
            if (!elementCounts[hex.element]) {
                elementCounts[hex.element] = 0;
            }
            elementCounts[hex.element]++;
        }
    });

    Object.entries(elementCounts).forEach(([element, count]) => {
        if (count >= 3) {
            const elementName = element.charAt(0).toUpperCase() + element.slice(1);
            let buffValue = 0;

            if (count >= 7) {
                buffValue = 50;
            } else if (count >= 5) {
                buffValue = 25;
            } else if (count >= 3) {
                buffValue = 10;
            }

            const buffName = `${elementName} Damage (Element)`;
            buffTotals[buffName] = {
                value: buffValue,
                isPercentage: true,
                count: count
            };
        }
    });

    return { buffTotals, toyzInLayout };
}

const GRID_CONNECTIONS = [
    // Horizontal connections (right to left)
    { p1: 'T1', s1: 2, p2: 'T2', s2: 5 },  // T1 right to T2 left
    { p1: 'M1', s1: 2, p2: 'M2', s2: 5 },  // M1 right to M2 left
    { p1: 'M2', s1: 2, p2: 'M3', s2: 5 },  // M2 right to M3 left
    { p1: 'B1', s1: 2, p2: 'B2', s2: 5 },  // B1 right to B2 left

    // Diagonal connections
    { p1: 'M1', s1: 1, p2: 'T1', s2: 4 },  // M1 top-right to T1 bottom-left
    { p1: 'T1', s1: 3, p2: 'M2', s2: 0 },  // T1 bottom-right to M2 top-left
    { p1: 'T2', s1: 4, p2: 'M2', s2: 1 },  // T2 bottom-left to M2 top-right
    { p1: 'T2', s1: 3, p2: 'M3', s2: 0 },  // T2 bottom-right to M3 top-left
    { p1: 'M1', s1: 3, p2: 'B1', s2: 0 },  // M1 bottom-right to B1 top-left
    { p1: 'M2', s1: 4, p2: 'B1', s2: 1 },  // M2 bottom-left to B1 top-right
    { p1: 'M2', s1: 3, p2: 'B2', s2: 0 },  // M2 bottom-right to B2 top-left
    { p1: 'M3', s1: 4, p2: 'B2', s2: 1 }   // M3 bottom-left to B2 top-right
];

function getNeighbors(slot, arrangement) {
    const neighbors = [];
    GRID_CONNECTIONS.forEach(({ p1, s1, p2, s2 }) => {
        if (p1 === slot && arrangement[p2]) {
            neighbors.push({ hex: arrangement[p2], mySide: s1, theirSide: s2 });
        } else if (p2 === slot && arrangement[p1]) {
            neighbors.push({ hex: arrangement[p1], mySide: s2, theirSide: s1 });
        }
    });
    return neighbors;
}

function calculateArrangementScore(p) {
    let score = 0;
    const colorCounts = { red: 0, blue: 0, purple: 0, gray: 0, yellow: 0 };
    // Elements list needed for counts
    const elements = ['normal', 'fire', 'water', 'wind', 'plant', 'ground', 'dark', 'light', 'ice', 'electric', 'poison'];
    const elementCounts = Object.fromEntries(elements.map(e => [e, 0]));

    Object.values(p).forEach(hex => {
        if (hex && hex.element && elementCounts[hex.element] !== undefined) {
            elementCounts[hex.element]++;
        }
    });

    GRID_CONNECTIONS.forEach(({ p1, s1, p2, s2 }) => {
        const match = calculateMatchScorePair(p[p1], p[p2], s1, s2);
        if (match.score > 0) {
            score++;
            if (colorCounts[match.color] !== undefined) {
                colorCounts[match.color]++;
            }
        }
    });

    // Calculate buff summary with both ToyZ buffs and layout buffs
    const buffSummary = calculateLayoutBuffs(p, colorCounts);

    return { score, colorCounts, elementCounts, buffSummary };
}

function preprocessHexagons(hexagons) {
    const sidePatternGroups = new Map();
    hexagons.forEach(hex => {
        const key = hex.sides.join(',');
        if (!sidePatternGroups.has(key)) {
            sidePatternGroups.set(key, []);
        }
        sidePatternGroups.get(key).push(hex);
    });
    const uniqueHexagons = Array.from(sidePatternGroups.values()).map(group => group[0]);
    return { uniqueHexagons, sidePatternGroups };
}

function expandArrangements(baseArrangements, sidePatternGroups, optimizationGoal = 'matches') {
    if (!baseArrangements || baseArrangements.length === 0) return [];

    const allExpandedArrangements = [];
    const uniqueLayouts = new Set(); // Use a Set to track unique layouts

    baseArrangements.forEach(baseResult => {
        const arrangement = baseResult.arrangement;
        const slots = Object.keys(arrangement);
        const piecesInArrangement = slots.map(slot => arrangement[slot]);

        const pieceGroups = piecesInArrangement.map(piece => {
            if (piece.label === 'empty') {
                return [piece]; // This is a placeholder, treat as a group of one
            }
            const key = piece.sides.join(',');
            return sidePatternGroups.get(key);
        });

        let combinations = [{}];
        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const group = pieceGroups[i];
            const newCombinations = [];
            for (const hex of group) {
                for (const combo of combinations) {
                    if (hex.label !== 'empty' && Object.values(combo).some(existingHex => existingHex.id === hex.id)) {
                        continue;
                    }
                    const newCombo = { ...combo };
                    newCombo[slot] = hex;
                    newCombinations.push(newCombo);
                }
            }
            combinations = newCombinations;
        }

        combinations.forEach(combo => {
            // Create a unique key for the layout based on piece IDs
            const layoutKey = Object.keys(combo).sort().map(k => `${k}:${combo[k].id}`).join('|');
            if (!uniqueLayouts.has(layoutKey)) {
                uniqueLayouts.add(layoutKey);
                const { score, colorCounts, elementCounts, buffSummary } = calculateArrangementScore(combo);
                const optimizationValue = calculateOptimizationValue(buffSummary, optimizationGoal, score);
                allExpandedArrangements.push({
                    arrangement: combo,
                    score,
                    matchCount: score,  // Match count is the raw score
                    optimizationValue,
                    colorCounts,
                    elementCounts,
                    buffSummary
                });
            }
        });
    });

    return allExpandedArrangements;
}

function applyTieBreaking(bestLayouts, tiebreakMode, colorPriority, elementPriority) {
    if (!bestLayouts || bestLayouts.length === 0) return [];

    const sorted = [...bestLayouts].sort((a, b) => {
        if (tiebreakMode === 'rarity') {
            const rarityA = calculateRarityScore(a.arrangement);
            const rarityB = calculateRarityScore(b.arrangement);
            if (rarityB !== rarityA) return rarityB - rarityA;
        } else if (tiebreakMode === 'color') {
            for (const color of colorPriority) {
                const diff = b.colorCounts[color] - a.colorCounts[color];
                if (diff !== 0) return diff;
            }
        } else if (tiebreakMode === 'element') {
            for (const element of elementPriority) {
                const diff = b.elementCounts[element] - a.elementCounts[element];
                if (diff !== 0) return diff;
            }
        }
        return 0; // Keep original order if all tie-breakers are equal
    });

    return sorted;
}

function calculateOptimizationValue(buffSummary, optimizationGoal, score) {
    if (optimizationGoal === 'matches') {
        return score;
    }

    let optimizationValue = 0;

    // 1. Direct ToyZ buff match
    if (buffSummary.buffTotals[optimizationGoal]) {
        optimizationValue += buffSummary.buffTotals[optimizationGoal].value;
    }

    // 2. Layout/Element variants
    let variantName = optimizationGoal;

    // Handle special mappings
    if (optimizationGoal === 'Crit D.') variantName = 'Crit Damage';
    else if (['Boss', 'Basic', 'Skill', 'All'].includes(optimizationGoal)) variantName = `${optimizationGoal} Damage`;
    // Elements
    else if (['Fire', 'Water', 'Earth', 'Ground', 'Wind', 'Ice', 'Electric', 'Plant', 'Poison', 'Light', 'Dark'].includes(optimizationGoal)) variantName = `${optimizationGoal} Damage`;

    const layoutKey = `${variantName} (Layout)`;
    const elementKey = `${variantName} (Element)`;

    if (buffSummary.buffTotals[layoutKey]) {
        optimizationValue += buffSummary.buffTotals[layoutKey].value;
    }
    if (buffSummary.buffTotals[elementKey]) {
        optimizationValue += buffSummary.buffTotals[elementKey].value;
    }

    return optimizationValue;
}

// --- Main Solver Logic ---

async function findAllBestArrangements(hexagons, centerId, searchMode, optimizationGoal, fastMode, forcedHexagonIds = new Set(), tiebreakMode = 'rarity', colorPriority = [], elementPriority = []) {
    let bestScore = -1;
    let bestArrangements = [];
    let processedCount = 0;
    const CHUNK_SIZE = 50000;

    const centerHex = centerId ? hexagons.find(h => h.id === centerId) : null;

    const slots = centerId
        ? ['T1', 'T2', 'M1', 'M3', 'B1', 'B2']
        : ['T1', 'T2', 'M1', 'M2', 'M3', 'B1', 'B2'];

    let candidatePieces = hexagons.slice();
    const totalSlots = slots.length;

    // Special case: single ToyZ in center with all other slots empty
    if (centerHex && hexagons.length === 1 && hexagons[0].id === centerId) {
        const arrangement = { M2: centerHex };
        const dummyHex = new Hexagon(0, 'empty', 'none', Array(6).fill('none'), 'none');
        slots.forEach((slot, index) => {
            arrangement[slot] = { ...dummyHex, id: `dummy-${slot}` };
        });
        const { score, colorCounts, elementCounts, buffSummary } = calculateArrangementScore(arrangement);

        // Determine optimization value
        const optimizationValue = calculateOptimizationValue(buffSummary, optimizationGoal, score);

        // Create composite score: primary = optimization goal, secondary = match count
        const compositeScore = optimizationValue * 1000 + score;

        postMessage({ type: 'progress', progress: 1, processed: 1, bestScore: optimizationValue });
        return {
            score: compositeScore,
            arrangements: [{ arrangement, score: compositeScore, matchCount: score, optimizationValue, colorCounts, elementCounts, buffSummary }]
        };
    }

    if (candidatePieces.length < totalSlots) {
        const dummyHex = new Hexagon(0, 'empty', 'none', Array(6).fill('none'), 'none');
        const dummiesNeeded = totalSlots - candidatePieces.length;
        for (let i = 0; i < dummiesNeeded; i++) {
            candidatePieces.push({ ...dummyHex, id: `dummy-${i}` });
        }
    }

    const totalForProgress = candidatePieces.length;

    return new Promise(resolve => {
        const stack = [];
        const arrangement = {};
        const usedHexIds = new Set();
        const usedLabels = new Set();
        const placedForcedHexIds = new Set();

        if (centerHex) {
            arrangement['M2'] = centerHex;
            usedHexIds.add(centerHex.id);
            usedLabels.add(centerHex.label);
            if (forcedHexagonIds.has(centerHex.id)) {
                placedForcedHexIds.add(centerHex.id);
            }
        }

        stack.push({ slotIndex: 0, pieceIndex: 0, zeroMatchCount: 0 });

        async function processStack() {
            try {
                let operationsSinceYield = 0;

                while (stack.length > 0) {
                    if (++operationsSinceYield > CHUNK_SIZE) {
                        const progress = stack.length > 0 ? stack[0].pieceIndex / totalForProgress : 1;
                        postMessage({ type: 'progress', progress, processed: processedCount, bestScore });
                        setTimeout(processStack, 0);
                        return;
                    }

                    const currentState = stack[stack.length - 1];
                    const slotIndex = currentState.slotIndex;
                    const pieceIndex = currentState.pieceIndex;

                    if (pieceIndex >= candidatePieces.length) {
                        stack.pop();
                        if (stack.length > 0) {
                            const previousState = stack[stack.length - 1];
                            const previousSlot = slots[previousState.slotIndex];
                            const pieceToRemove = arrangement[previousSlot];

                            if (pieceToRemove) {
                                usedHexIds.delete(pieceToRemove.id);
                                usedLabels.delete(pieceToRemove.label);
                                if (forcedHexagonIds.has(pieceToRemove.id)) {
                                    placedForcedHexIds.delete(pieceToRemove.id);
                                }
                                delete arrangement[previousSlot];
                            }
                        }
                        continue;
                    }

                    const piece = candidatePieces[pieceIndex];
                    currentState.pieceIndex++;

                    if (usedHexIds.has(piece.id) || (piece.label !== 'empty' && usedLabels.has(piece.label))) {
                        continue;
                    }

                    if (!forcedHexagonIds.has(piece.id)) {
                        const remainingSlotsAfterThis = slots.length - (slotIndex + 1);
                        const unplacedForcedCount = forcedHexagonIds.size - placedForcedHexIds.size;
                        if (remainingSlotsAfterThis < unplacedForcedCount) {
                            continue;
                        }
                    }

                    const slot = slots[slotIndex];

                    // Fast Mode Heuristic
                    if (fastMode) {
                        const neighbors = getNeighbors(slot, arrangement);
                        let matches = 0;
                        if (neighbors.length > 0) {
                            for (const neighbor of neighbors) {
                                if (piece.sides[neighbor.mySide] === neighbor.hex.sides[neighbor.theirSide] && piece.sides[neighbor.mySide] !== 'none') {
                                    matches++;
                                }
                            }

                            if (matches === 0) {
                                // Only allow a limited number of non-matching pieces per slot
                                // We allow 2 non-matching attempts per slot to avoid getting stuck
                                if (currentState.zeroMatchCount >= 2) continue;
                                currentState.zeroMatchCount++;
                            }
                        }
                    }

                    arrangement[slot] = piece;
                    usedHexIds.add(piece.id);
                    usedLabels.add(piece.label);
                    if (forcedHexagonIds.has(piece.id)) {
                        placedForcedHexIds.add(piece.id);
                    }

                    if (slotIndex === slots.length - 1) {
                        if (placedForcedHexIds.size === forcedHexagonIds.size) {
                            processedCount++;
                            const { score, colorCounts, elementCounts, buffSummary } = calculateArrangementScore(arrangement);

                            // Determine optimization value based on goal
                            const optimizationValue = calculateOptimizationValue(buffSummary, optimizationGoal, score);

                            // Create composite score: primary = optimization goal, secondary = match count
                            // Use factor of 1000 to ensure optimization value dominates
                            const compositeScore = optimizationValue * 1000 + score;

                            if (compositeScore > bestScore) {
                                bestScore = compositeScore;
                                bestArrangements = [{ arrangement: { ...arrangement }, score: compositeScore, matchCount: score, optimizationValue, colorCounts, elementCounts, buffSummary }];
                                postMessage({ type: 'progress', progress: stack[0].pieceIndex / totalForProgress, processed: processedCount, bestScore: optimizationValue });
                            } else if (compositeScore === bestScore) {
                                bestArrangements.push({ arrangement: { ...arrangement }, score: compositeScore, matchCount: score, optimizationValue, colorCounts, elementCounts, buffSummary });
                                // Keep only top 100 to avoid memory issues
                                if (bestArrangements.length > 100) {
                                    bestArrangements = applyTieBreaking(bestArrangements, tiebreakMode, colorPriority, elementPriority).slice(0, 100);
                                }
                            }
                        }

                        // Backtrack
                        usedHexIds.delete(piece.id);
                        usedLabels.delete(piece.label);
                        if (forcedHexagonIds.has(piece.id)) {
                            placedForcedHexIds.delete(piece.id);
                        }
                        delete arrangement[slot];

                        // Stop condition for Normal mode
                        // If optimizing matches, stop at 12
                        // If optimizing stat, we don't know the max, so we can't easily stop early unless we have a heuristic max
                        if (searchMode === 'normal' && optimizationGoal === 'matches' && bestScore === 12) {
                            postMessage({ type: 'progress', progress: 1, processed: processedCount, bestScore });
                            resolve({ score: bestScore, arrangements: bestArrangements });
                            return;
                        }
                    } else {
                        stack.push({ slotIndex: slotIndex + 1, pieceIndex: 0 });
                    }
                }

                postMessage({ type: 'progress', progress: 1, processed: processedCount, bestScore });
                resolve({ score: bestScore, arrangements: bestArrangements });
            } catch (error) {
                console.error("Worker Error in processStack:", error);
                throw error;
            }
        }

        processStack();
    });
}

// --- Message Handler ---

onmessage = async function (e) {
    try {
        const { type, data } = e.data;

        if (type === 'start') {
            const { hexagons, centerId, searchMode, optimizationGoal, fastMode, forcedHexagonIds, tiebreakMode, colorPriority, elementPriority } = data;

            // Validate input
            if (!hexagons || !Array.isArray(hexagons)) {
                throw new Error('Invalid hexagons data: expected an array');
            }

            // Preprocess
            const { uniqueHexagons, sidePatternGroups } = preprocessHexagons(hexagons);

            // Run Solver
            const result = await findAllBestArrangements(
                uniqueHexagons,
                centerId,
                searchMode,
                optimizationGoal,
                fastMode,
                new Set(forcedHexagonIds || []),
                tiebreakMode,
                colorPriority || [],
                elementPriority || []
            );

            // Expand Arrangements
            const expandedArrangements = expandArrangements(result.arrangements, sidePatternGroups, optimizationGoal);

            // Apply Tie Breaking
            const finalSorted = applyTieBreaking(expandedArrangements, tiebreakMode, colorPriority || [], elementPriority || []);

            // Send Results
            postMessage({
                type: 'done',
                bestScore: result.score,
                arrangements: finalSorted
            });
        }
    } catch (error) {
        // Report error back to main thread
        console.error('Worker error:', error);
        postMessage({
            type: 'error',
            message: error.message || 'An unknown error occurred in the solver worker',
            stack: error.stack
        });
    }
};
