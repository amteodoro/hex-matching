// ToyZ Database for Pixel Heroes Adventure
// Complete data extracted from https://pixelheroes.tips/toyz (294 ToyZ total)
// Generated on 2025-09-03

const TOYZ_DATABASE = {
    // Element types and their colors with official icon URLs
    elements: {
        'Normal': { 
            color: '#888888', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Normal.webp' 
        },
        'Fire': { 
            color: '#ff4444', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Fire.webp' 
        },
        'Water': { 
            color: '#4488ff', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Water.webp' 
        },
        'Ground': { 
            color: '#8b4513', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Ground.webp' 
        },
        'Wind': { 
            color: '#88ff88', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Wind.webp' 
        },
        'Ice': { 
            color: '#88ffff', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Ice.webp' 
        },
        'Electric': { 
            color: '#ffff44', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Electric.webp' 
        },
        'Plant': { 
            color: '#44ff44', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Plant.webp' 
        },
        'Poison': { 
            color: '#aa44ff', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Poison.webp' 
        },
        'Light': { 
            color: '#ffffaa', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Light.webp' 
        },
        'Dark': { 
            color: '#440044', 
            icon: 'https://assets.pixelheroes.tips/images/Attributes/Dark.webp' 
        }
    },

    // Rarity tiers and their multipliers
    rarities: {
        'Common': { multiplier: 1.0, color: '#888888' },
        'Rare': { multiplier: 1.1, color: '#4488ff' },
        'Epic': { multiplier: 1.25, color: '#aa44ff' },
        'Legendary': { multiplier: 1.5, color: '#ffaa44' },
        'Mythic': { multiplier: 2.0, color: '#ff44ff' }
    },

    // Complete ToyZ database - 294 ToyZ total
    toyz: [
        // Complete ToyZ database - 294 ToyZ total
        { id: '10000', name: 'Chick', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10000.webp', buffs: [{ type: 'Atk Spd', value: 20 }] },
        { id: '10001', name: 'Brown Bear', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10001.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10002', name: 'White Bear', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10002.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10003', name: 'Black Bear', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10003.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10004', name: 'Orange Fox', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10004.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10005', name: 'White Fox', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10005.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10006', name: 'Yellow Fox', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10006.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10007', name: 'Brown Cat', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10007.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10008', name: 'White Cat', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10008.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10009', name: 'Black Cat', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10009.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10010', name: 'Pink Rabbit', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10010.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10011', name: 'White Rabbit', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10011.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10012', name: 'Black Rabbit', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10012.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10013', name: 'Orange Tiger', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10013.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10014', name: 'White Tiger', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10014.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10015', name: 'Black Tiger', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10015.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10016', name: 'Brown Rat', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10016.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10017', name: 'White Rat', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10017.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10018', name: 'Black Rat', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10018.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10019', name: 'Brown Squirrel', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10019.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10020', name: 'White Squirrel', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10020.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10021', name: 'Hedgehog', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10021.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10022', name: 'Mallard', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10022.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10023', name: 'Yellow Duck', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10023.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10024', name: 'White Duck', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10024.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10025', name: 'Green Crocodile', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10025.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10026', name: 'Orange Crocodile', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10026.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10027', name: 'Turquoise Crocodile', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10027.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '10028', name: 'Red Dragon', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10028.webp', buffs: [{ type: 'Melee', value: 4 }] },
        { id: '10029', name: 'Orange Dragon', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10029.webp', buffs: [{ type: 'Ranged', value: 3 }] },
        { id: '10030', name: 'Blue Dragon', element: 'Normal', rarity: 'Common', icon: 'https://assets.pixelheroes.tips/images/ToyZ/10030.webp', buffs: [{ type: 'Basic', value: 5 }] },
        { id: '20031', name: 'Rice Ball Ddongle', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20031.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'All', value: 2.6 }] },
        { id: '20032', name: 'Dancing Cat', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20032.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Skill', value: 3.8 }] },
        { id: '20033', name: 'Bug-eaten Apple', element: 'Plant', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20033.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Plant', value: 3.8 }] },
        { id: '20034', name: 'Black Drop Grass', element: 'Dark', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20034.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Dark', value: 3.8 }] },
        { id: '20035', name: 'Tangle Pudding', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20035.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'All', value: 2.6 }] },
        { id: '20036', name: 'Half-cooked Soldier', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20036.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Skill', value: 3.8 }] },
        { id: '20040', name: 'Melted Cone', element: 'Ice', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20040.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Ice', value: 3.8 }] },
        { id: '20041', name: 'Little Spark', element: 'Electric', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20041.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Electric', value: 3.8 }] },
        { id: '20045', name: 'Spicy Octopus', element: 'Fire', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20045.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Fire', value: 3.8 }] },
        { id: '20049', name: 'Star Cheerleader', element: 'Light', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20049.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Light', value: 3.8 }] },
        { id: '20052', name: 'Swamp Witch', element: 'Poison', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20052.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Poison', value: 3.8 }] },
        { id: '20055', name: 'Zombie Clerk', element: 'Poison', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20055.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Poison', value: 3.8 }] },
        { id: '20056', name: 'Hot Choco Mug', element: 'Fire', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20056.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Fire', value: 3.8 }] },
        { id: '20057', name: 'Two-faced Black Sheep', element: 'Dark', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20057.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Dark', value: 3.8 }] },
        { id: '20060', name: 'Lion Flower', element: 'Plant', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20060.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Plant', value: 3.8 }] },
        { id: '20063', name: 'Mohican Bull', element: 'Ground', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20063.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Earth', value: 3.8 }] },
        { id: '20064', name: 'Moss Golem', element: 'Ground', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20064.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Earth', value: 3.8 }] },
        { id: '20065', name: 'Slum Porgo', element: 'Poison', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20065.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Poison', value: 3.8 }] },
        { id: '20068', name: 'Frozen Mohican', element: 'Ice', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20068.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Ice', value: 3.8 }] },
        { id: '20073', name: 'Rice Cake Princess', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20073.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'All', value: 2.6 }] },
        { id: '20074', name: 'Gentleman Crocodile', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20074.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Skill', value: 3.8 }] },
        { id: '20075', name: 'Mira Fran', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20075.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'All', value: 2.6 }] },
        { id: '20076', name: 'Vampire Wizard', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20076.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Skill', value: 3.8 }] },
        { id: '20077', name: 'Cute Cake', element: 'Ice', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20077.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Ice', value: 3.8 }] },
        { id: '20078', name: 'Bouncing Snowball', element: 'Ice', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20078.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Ice', value: 3.8 }] },
        { id: '20079', name: 'Tinker Bomb', element: 'Plant', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20079.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Plant', value: 3.8 }] },
        { id: '20080', name: 'Venom Cloud Argus', element: 'Poison', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20080.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Poison', value: 3.8 }] },
        { id: '20081', name: 'Glacial Guard', element: 'Ice', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20081.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Ice', value: 3.8 }] },
        { id: '20082', name: 'Zephyr Guard', element: 'Wind', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20082.webp', buffs: [{ type: 'Basic', value: 5.5 }, { type: 'Wind', value: 3.8 }] },
        { id: '20083', name: 'Charlie', element: 'Normal', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20083.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Skill', value: 3.8 }] },
        { id: '20084', name: 'Rosaline', element: 'Ground', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20084.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'All', value: 2.6 }] },
        { id: '20085', name: 'Foshimi', element: 'Water', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20085.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Water', value: 3.8 }] },
        { id: '20086', name: 'Katoro', element: 'Ground', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20086.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Earth', value: 3.8 }] },
        { id: '20087', name: 'Tobi', element: 'Poison', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20087.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Poison', value: 3.8 }] },
        { id: '20088', name: 'Nureongi', element: 'Light', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20088.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Light', value: 3.8 }] },
        { id: '20089', name: 'Torong', element: 'Fire', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20089.webp', buffs: [{ type: 'Ranged', value: 3.3 }, { type: 'Fire', value: 3.8 }] },
        { id: '20090', name: 'Lavio', element: 'Electric', rarity: 'Rare', icon: 'https://assets.pixelheroes.tips/images/ToyZ/20090.webp', buffs: [{ type: 'Melee', value: 4.4 }, { type: 'Electric', value: 3.8 }] },
        { id: '30021', name: 'Anubis', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30021.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Earth', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30022', name: 'Insensitive Frang', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30022.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Poison', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30023', name: 'Furious Berserker', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30023.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'All', value: 3.8 }, { type: 'Boss', value: 6.4 }] },
        { id: '30024', name: 'Tenacious Demolitionist', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30024.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Fire', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30025', name: 'Sleepy Tear Fairy', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30025.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Water', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30026', name: 'Crow Priest', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30026.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Dark', value: 4.5 }, { type: 'Boss', value: 5.1 }] },
        { id: '30027', name: 'Clumsy Apprentice Ninja', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30027.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Wind', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30028', name: 'Dark Mage Violet', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30028.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Dark', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30029', name: 'Positive Pumpkin Soldier', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30029.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Plant', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30030', name: 'Diver Duck', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30030.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Water', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30031', name: 'Ice Prince', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30031.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Ice', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30032', name: 'Prototype - Alpha', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30032.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Electric', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30033', name: 'Gentle Chairman', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30033.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Skill', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30034', name: 'Viking Intern', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30034.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Electric', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30035', name: 'Grumpy Teres', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30035.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'All', value: 3 }, { type: 'Boss', value: 5.1 }] },
        { id: '30036', name: 'Hacker Cat', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30036.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Electric', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30037', name: 'Wandering Painter', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30037.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Water', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30038', name: 'Dizzying Medusa', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30038.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Earth', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30039', name: 'Chilly Snowman', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30039.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Ice', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30040', name: 'Carrot Rider', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30040.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Plant', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30041', name: 'Gentle Breeze Cat', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30041.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Wind', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30042', name: 'Angel Muscle', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30042.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Light', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30043', name: 'Avian Warrior', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30043.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Wind', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30044', name: 'Venomous Chubby', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30044.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Poison', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30045', name: 'Mohican Bulldog', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30045.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Fire', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30046', name: 'Timid Ghost', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30046.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Light', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30047', name: 'Suspicious Blacksmith', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30047.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Fire', value: 4.5 }, { type: 'Boss', value: 5.1 }] },
        { id: '30048', name: 'Winter Witch', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30048.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Ice', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30049', name: 'Poisonous Moth', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30049.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Poison', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30050', name: 'Bizarre Shaman', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30050.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Plant', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30051', name: 'Child Water Thief', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30051.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Water', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30052', name: 'Cowardly Snake', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30052.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Poison', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30053', name: 'Cuckoo', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30053.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Light', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30054', name: 'Gloomy Cloud', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30054.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Dark', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30055', name: 'DJ. Duck', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30055.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Wind', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30056', name: 'Stubborn Moai', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30056.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Earth', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30057', name: 'Devil Cat', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30057.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Dark', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30058', name: 'Shining Star', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30058.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Light', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30059', name: 'Glacier\'s Messenger', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30059.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Ice', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30060', name: 'Fire Ant', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30060.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Fire', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30061', name: 'Zombie Miner', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30061.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Earth', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30062', name: 'Pouch Goblin', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30062.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Skill', value: 4.5 }, { type: 'Boss', value: 5.1 }] },
        { id: '30063', name: 'Festival Mask', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30063.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'All', value: 3 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30064', name: 'Pale Ghost', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30064.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Skill', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30065', name: 'Scientist Victor', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30065.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'All', value: 3 }, { type: 'Boss', value: 5.1 }] },
        { id: '30066', name: 'Mini Blumens', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30066.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Water', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30067', name: 'Mini Betalanse', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30067.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Plant', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30068', name: 'Mini Cryo', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30068.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Ice', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30069', name: 'Mini Sporelex', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30069.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Plant', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30070', name: 'Mini Toxspore', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30070.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Poison', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30071', name: 'Mini Bristol', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30071.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Earth', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30072', name: 'Mini Pierrot', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30072.webp', buffs: [{ type: 'Boss', value: 3.9 }, { type: 'Crit D.', value: 4.5 }, { type: 'Boss', value: 5.1 }] },
        { id: '30073', name: 'Polybear', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30073.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Ice', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30074', name: 'Kwonter', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30074.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Ice', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30075', name: 'Mini Veilian', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30075.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Dark', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30076', name: 'Mini Arque', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30076.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Electric', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30077', name: 'Mini Rootrus', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30077.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Fire', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30078', name: 'Blue Carbuncle', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30078.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Ice', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30079', name: 'Quiet Gray', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30079.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Dark', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30080', name: 'Monkey Guard', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30080.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Skill', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30081', name: 'Wanderer Artist', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30081.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'All', value: 3 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30082', name: 'Lo\'oong Cat', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30082.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Skill', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30083', name: 'Beat Peng', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30083.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'All', value: 3 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30084', name: 'Cogni', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30084.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Skill', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30085', name: 'Carrotin Rampager', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30085.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Plant', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30086', name: 'Warrior Redrick', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30086.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Fire', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30087', name: 'Piranha', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30087.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Water', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30088', name: 'Bomb Bird', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30088.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Fire', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30089', name: 'Observer Gearbit', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30089.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Electric', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30090', name: 'Mini Sapphire blade', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30090.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Light', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30091', name: 'Mini Coralisk', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30091.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Water', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30092', name: 'Mini Breeze', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30092.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Wind', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30093', name: 'Ellie', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30093.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Water', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30094', name: 'Uni', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30094.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Light', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30095', name: 'Vincenzo', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30095.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Plant', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30096', name: 'PopCoco', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30096.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Skill', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30097', name: 'Everlyn', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30097.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Plant', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30098', name: 'Clockwork Robot', element: 'Normal', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30098.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'All', value: 3.8 }, { type: 'Boss', value: 6.4 }] },
        { id: '30099', name: 'Stitch Bunny', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30099.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Dark', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30100', name: 'SanDiego', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30100.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Earth', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30101', name: 'Watermelon Trio', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30101.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Plant', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30102', name: 'Detonix', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30102.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Fire', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30103', name: 'Stratus', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30103.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Wind', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30104', name: 'Candellus', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30104.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Dark', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30105', name: 'Bolteos', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30105.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Electric', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30106', name: 'Pico the Chicken', element: 'Fire', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30106.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Fire', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30107', name: 'Winter Specter', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30107.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Ice', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30108', name: 'Belmot', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30108.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Dark', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30109', name: 'Ringo', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30109.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Earth', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30110', name: 'Hydrix', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30110.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Water', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30111', name: 'Gastron', element: 'Wind', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30111.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Wind', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30112', name: 'Resonix', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30112.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Electric', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30113', name: 'Freezton', element: 'Ice', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30113.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Ice', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30114', name: 'Sludgic', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30114.webp', buffs: [{ type: 'Basic', value: 8.2 }, { type: 'Poison', value: 5.7 }, { type: 'Crit D.', value: 6.4 }] },
        { id: '30115', name: 'Bazrad', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30115.webp', buffs: [{ type: 'Melee', value: 6.5 }, { type: 'Poison', value: 5.7 }, { type: 'Crit %', value: 2.2 }] },
        { id: '30116', name: 'Cosmorin', element: 'Light', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30116.webp', buffs: [{ type: 'Ranged', value: 4.9 }, { type: 'Light', value: 5.7 }, { type: 'Boss', value: 6.4 }] },
        { id: '30117', name: 'Kaki', element: 'Plant', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30117.webp', buffs: [{ type: 'Basic', value: 6.5 }, { type: 'Plant', value: 4.5 }, { type: 'Boss', value: 5.1 }] },
        { id: '30118', name: 'Ogama', element: 'Poison', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30118.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Poison', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30119', name: 'Jeoseungdori', element: 'Dark', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30119.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Dark', value: 4.5 }, { type: 'Crit %', value: 1.7 }] },
        { id: '30120', name: 'Kkami', element: 'Water', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30120.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Water', value: 4.5 }, { type: 'Boss', value: 5.1 }] },
        { id: '30121', name: 'Delvo', element: 'Ground', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30121.webp', buffs: [{ type: 'Melee', value: 5.2 }, { type: 'Earth', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '30122', name: 'Optigon', element: 'Electric', rarity: 'Epic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/30122.webp', buffs: [{ type: 'Ranged', value: 3.9 }, { type: 'Electric', value: 4.5 }, { type: 'Crit D.', value: 5.1 }] },
        { id: '40013', name: 'Timid Gluttony', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40013.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Dark', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Dark', value: 9 }] },
        { id: '40014', name: 'Elegant Lucy', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40014.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Light', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Light', value: 9 }] },
        { id: '40015', name: 'Otakun', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40015.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'All', value: 4.6 }, { type: 'Boss', value: 7.8 }, { type: 'Boss', value: 9 }] },
        { id: '40016', name: 'Victorious Blackcat', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40016.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Skill', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Boss', value: 9 }] },
        { id: '40017', name: 'Pirate Octa', element: 'Water', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40017.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Water', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Water', value: 9 }] },
        { id: '40018', name: 'Mad Alchemist', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40018.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Poison', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Poison', value: 9 }] },
        { id: '40019', name: 'Racer Chili', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40019.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Fire', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Fire', value: 9 }] },
        { id: '40020', name: 'Golden Gobking', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40020.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Earth', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Earth', value: 9 }] },
        { id: '40021', name: 'Lightning-struck Gobking', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40021.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Electric', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Electric', value: 9 }] },
        { id: '40022', name: 'Snooty Camilla', element: 'Plant', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40022.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Plant', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Plant', value: 9 }] },
        { id: '40023', name: 'Relaxed Senior Ninja', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40023.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Wind', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Wind', value: 9 }] },
        { id: '40024', name: 'Ferocious Ice Queen', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40024.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Ice', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Ice', value: 9 }] },
        { id: '40025', name: 'Lava Turtle', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40025.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Fire', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Fire', value: 9 }] },
        { id: '40026', name: 'Gaming Cat', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40026.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Electric', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Electric', value: 9 }] },
        { id: '40027', name: 'Military Band Teres', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40027.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Wind', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Wind', value: 9 }] },
        { id: '40028', name: 'General Drago', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40028.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'All', value: 4.6 }, { type: 'Crit D.', value: 7.8 }, { type: 'Boss', value: 9 }] },
        { id: '40029', name: 'Contemplative Statue', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40029.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Earth', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Earth', value: 9 }] },
        { id: '40030', name: 'Witch of Selfie', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40030.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Light', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Light', value: 9 }] },
        { id: '40031', name: 'Wave Riding Surfer', element: 'Water', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40031.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Water', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Water', value: 9 }] },
        { id: '40032', name: 'Merciless Balrog', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40032.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Ice', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Ice', value: 9 }] },
        { id: '40033', name: 'Chimera Doctor', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40033.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Poison', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Poison', value: 9 }] },
        { id: '40034', name: 'Masked Rabbit Ghost', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40034.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Dark', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Dark', value: 9 }] },
        { id: '40035', name: 'Delicate Lotus Fairy', element: 'Plant', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40035.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Plant', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Plant', value: 9 }] },
        { id: '40036', name: 'Dollmaker Mari', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40036.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Skill', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Boss', value: 9 }] },
        { id: '40037', name: 'Lonely Hero', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40037.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Fire', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Fire', value: 9 }] },
        { id: '40038', name: 'Moon Rabbit', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40038.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'All', value: 3.7 }, { type: 'Crit %', value: 2.1 }, { type: 'Skill', value: 7.2 }] },
        { id: '40039', name: 'Rice Cake Tiger', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40039.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Skill', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'All', value: 4.8 }] },
        { id: '40040', name: 'Cursed Durant', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40040.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'All', value: 3.7 }, { type: 'Crit D.', value: 6.3 }, { type: 'Skill', value: 7.2 }] },
        { id: '40041', name: 'Pumpkin Jack', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40041.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Skill', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'All', value: 4.8 }] },
        { id: '40042', name: 'Petite Blumens', element: 'Water', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40042.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Water', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Water', value: 7.2 }] },
        { id: '40043', name: 'Petite Betalanse', element: 'Plant', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40043.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Plant', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Plant', value: 7.2 }] },
        { id: '40044', name: 'Petite Cryo', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40044.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Ice', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Ice', value: 7.2 }] },
        { id: '40045', name: 'Petite Sporelex', element: 'Plant', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40045.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Plant', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Plant', value: 7.2 }] },
        { id: '40046', name: 'Petite Toxspore', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40046.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Poison', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Poison', value: 7.2 }] },
        { id: '40047', name: 'Petite Bristol', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40047.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Earth', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Earth', value: 7.2 }] },
        { id: '40048', name: 'Petite Pierrot', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40048.webp', buffs: [{ type: 'Boss', value: 4.8 }, { type: 'Basic', value: 9.2 }, { type: 'Boss', value: 6.3 }, { type: 'Skill', value: 7.2 }] },
        { id: '40049', name: 'Wolfgang Crusher', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40049.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Ice', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Ice', value: 7.2 }] },
        { id: '40050', name: 'Matchstick Wolf', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40050.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Ice', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Ice', value: 7.2 }] },
        { id: '40051', name: 'Petite Veilian', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40051.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Dark', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Dark', value: 7.2 }] },
        { id: '40052', name: 'Petite Arque', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40052.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Electric', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Electric', value: 7.2 }] },
        { id: '40053', name: 'Petite Rootrus', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40053.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Fire', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Fire', value: 7.2 }] },
        { id: '40054', name: 'Enyx', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40054.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Fire', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Fire', value: 7.2 }] },
        { id: '40055', name: 'Magros', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40055.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Earth', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Earth', value: 7.2 }] },
        { id: '40056', name: 'Despier', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40056.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Poison', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Poison', value: 7.2 }] },
        { id: '40057', name: 'Lillian White', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40057.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Dark', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Dark', value: 7.2 }] },
        { id: '40058', name: 'Chick Admiral', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40058.webp', buffs: [{ type: 'Atk Spd', value: 30 }, { type: 'All', value: 3.7 }, { type: 'Crit D.', value: 6.3 }, { type: 'Skill', value: 7.2 }] },
        { id: '40059', name: 'Vannes', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40059.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Dark', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Dark', value: 7.2 }] },
        { id: '40060', name: 'Cobit', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40060.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Poison', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Poison', value: 7.2 }] },
        { id: '40061', name: 'Shroud', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40061.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Wind', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Wind', value: 7.2 }] },
        { id: '40062', name: 'Vulcan', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40062.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Fire', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Fire', value: 7.2 }] },
        { id: '40063', name: 'Golly', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40063.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Earth', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Earth', value: 7.2 }] },
        { id: '40064', name: 'Manok', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40064.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Skill', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'All', value: 4.8 }] },
        { id: '40065', name: 'Petite Sapphire blade', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40065.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Light', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Light', value: 7.2 }] },
        { id: '40066', name: 'Petite Coralisk', element: 'Water', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40066.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Water', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Water', value: 7.2 }] },
        { id: '40067', name: 'Petite Breeze', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40067.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Wind', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Wind', value: 7.2 }] },
        { id: '40068', name: 'Hawkie', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40068.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Wind', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Wind', value: 7.2 }] },
        { id: '40069', name: 'Crepe Cat', element: 'Normal', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40069.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Basic', value: 9.2 }, { type: 'Boss', value: 6.3 }, { type: 'All', value: 4.8 }] },
        { id: '40070', name: 'Deeric', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40070.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Ice', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Ice', value: 7.2 }] },
        { id: '40071', name: 'Volcardon', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40071.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Fire', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Fire', value: 9 }] },
        { id: '40072', name: 'Tidehorn', element: 'Water', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40072.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Water', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Water', value: 9 }] },
        { id: '40073', name: 'Iron Hound', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40073.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Earth', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Earth', value: 9 }] },
        { id: '40074', name: 'Rylie', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40074.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Electric', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Electric', value: 9 }] },
        { id: '40075', name: 'Dazmir', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40075.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Light', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Light', value: 9 }] },
        { id: '40076', name: 'Belmordic', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40076.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Dark', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Dark', value: 9 }] },
        { id: '40077', name: 'Arrose', element: 'Plant', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40077.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Plant', value: 6.9 }, { type: 'Ranged', value: 7.8 }, { type: 'Plant', value: 9 }] },
        { id: '40078', name: 'Eryndra', element: 'Water', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40078.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Water', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Water', value: 9 }] },
        { id: '40079', name: 'Corvalis', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40079.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Poison', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Poison', value: 9 }] },
        { id: '40080', name: 'Galeon', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40080.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Wind', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Wind', value: 9 }] },
        { id: '40081', name: 'Avenhart', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40081.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Ice', value: 6.9 }, { type: 'All', value: 5.2 }, { type: 'Ice', value: 9 }] },
        { id: '40082', name: 'Furyhog', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40082.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Electric', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Electric', value: 9 }] },
        { id: '40083', name: 'Spirit Moki', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40083.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Light', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Light', value: 7.2 }] },
        { id: '40084', name: 'Shadow Moki', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40084.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Dark', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Dark', value: 7.2 }] },
        { id: '40085', name: 'Nyx', element: 'Dark', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40085.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Dark', value: 5.6 }, { type: 'Ranged', value: 6.3 }, { type: 'Dark', value: 7.2 }] },
        { id: '40086', name: 'Gentleman An', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40086.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Electric', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Electric', value: 7.2 }] },
        { id: '40087', name: 'Lady Yeo', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40087.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Fire', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Fire', value: 7.2 }] },
        { id: '40088', name: 'Radiant Bunny', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40088.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Light', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Light', value: 7.2 }] },
        { id: '40089', name: 'Centigor', element: 'Poison', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40089.webp', buffs: [{ type: 'Skill', value: 4.8 }, { type: 'Poison', value: 5.6 }, { type: 'All', value: 4.2 }, { type: 'Poison', value: 7.2 }] },
        { id: '40090', name: 'Reno', element: 'Electric', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40090.webp', buffs: [{ type: 'Skill', value: 4.8 }, { type: 'Electric', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Electric', value: 7.2 }] },
        { id: '40091', name: 'Maron', element: 'Wind', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40091.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Wind', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Wind', value: 7.2 }] },
        { id: '40092', name: 'Lurumi', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40092.webp', buffs: [{ type: 'Skill', value: 4.8 }, { type: 'Light', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Light', value: 7.2 }] },
        { id: '40093', name: 'Glakion', element: 'Ice', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40093.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Ice', value: 5.6 }, { type: 'All', value: 4.2 }, { type: 'Ice', value: 7.2 }] },
        { id: '40094', name: 'Ifreon', element: 'Fire', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40094.webp', buffs: [{ type: 'Melee', value: 6.4 }, { type: 'Fire', value: 5.6 }, { type: 'Crit D.', value: 6.3 }, { type: 'Fire', value: 7.2 }] },
        { id: '40095', name: 'Bloomnia', element: 'Plant', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40095.webp', buffs: [{ type: 'Ranged', value: 4.8 }, { type: 'Plant', value: 5.6 }, { type: 'All', value: 4.2 }, { type: 'Plant', value: 7.2 }] },
        { id: '40096', name: 'Petra', element: 'Ground', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40096.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Earth', value: 5.6 }, { type: 'Crit %', value: 2.1 }, { type: 'Earth', value: 7.2 }] },
        { id: '40097', name: 'Radion', element: 'Light', rarity: 'Legendary', icon: 'https://assets.pixelheroes.tips/images/ToyZ/40097.webp', buffs: [{ type: 'Basic', value: 8 }, { type: 'Light', value: 5.6 }, { type: 'Boss', value: 6.3 }, { type: 'Light', value: 7.2 }] },
        { id: '50011', name: 'Protocol - Mechaville', element: 'Electric', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50011.webp', buffs: [{ type: 'Melee', value: 10 }, { type: 'Electric', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'Electric', value: 11.3 }] },
        { id: '50012', name: 'Sentinel Leon', element: 'Fire', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50012.webp', buffs: [{ type: 'Melee', value: 10 }, { type: 'Fire', value: 8.7 }, { type: 'Crit %', value: 3.3 }, { type: 'Fire', value: 11.3 }] },
        { id: '50013', name: 'Necromancer', element: 'Ground', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50013.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'Earth', value: 8.7 }, { type: 'Boss', value: 9.8 }, { type: 'Earth', value: 11.3 }] },
        { id: '50014', name: 'Master of the Abyss', element: 'Dark', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50014.webp', buffs: [{ type: 'Skill', value: 7.5 }, { type: 'Dark', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'Dark', value: 11.3 }] },
        { id: '50015', name: 'Angel King', element: 'Light', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50015.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'Light', value: 8.7 }, { type: 'Crit %', value: 3.3 }, { type: 'Light', value: 11.3 }] },
        { id: '50016', name: 'Tyrant Sharksa', element: 'Water', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50016.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'Water', value: 8.7 }, { type: 'Boss', value: 9.8 }, { type: 'Water', value: 11.3 }] },
        { id: '50017', name: 'Flora Fairy', element: 'Plant', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50017.webp', buffs: [{ type: 'Skill', value: 7.5 }, { type: 'Plant', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'Plant', value: 11.3 }] },
        { id: '50018', name: 'Rebel King Glaesia', element: 'Ice', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50018.webp', buffs: [{ type: 'Melee', value: 10 }, { type: 'Ice', value: 8.7 }, { type: 'Crit %', value: 3.3 }, { type: 'Ice', value: 11.3 }] },
        { id: '50020', name: 'Dragon Slayer', element: 'Normal', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50020.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'All', value: 5.8 }, { type: 'Boss', value: 9.8 }, { type: 'Boss', value: 11.3 }] },
        { id: '50022', name: 'Snow Rabbit', element: 'Normal', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50022.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Skill', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'All', value: 6 }] },
        { id: '50023', name: 'Halloween Witch', element: 'Dark', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50023.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Dark', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Dark', value: 9 }] },
        { id: '50024', name: 'Wicked Punkhead', element: 'Poison', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50024.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Poison', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Poison', value: 9 }] },
        { id: '50025', name: 'Whisper', element: 'Ice', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50025.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Ice', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Ice', value: 9 }] },
        { id: '50026', name: 'Ignis', element: 'Fire', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50026.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Fire', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Fire', value: 9 }] },
        { id: '50027', name: 'Shadow Ninja', element: 'Wind', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50027.webp', buffs: [{ type: 'Basic', value: 12.5 }, { type: 'Wind', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'Wind', value: 11.3 }] },
        { id: '50028', name: 'Celestial Dragon Argon', element: 'Electric', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50028.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Electric', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Electric', value: 9 }] },
        { id: '50029', name: 'Silver Heart', element: 'Wind', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50029.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Wind', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Wind', value: 9 }] },
        { id: '50030', name: 'Elide', element: 'Light', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50030.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Light', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Light', value: 9 }] },
        { id: '50031', name: 'Vern', element: 'Plant', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50031.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Plant', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Plant', value: 9 }] },
        { id: '50032', name: 'Seira', element: 'Water', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50032.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Water', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Water', value: 9 }] },
        { id: '50033', name: 'Windia', element: 'Wind', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50033.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Wind', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Wind', value: 9 }] },
        { id: '50034', name: 'Bellaris', element: 'Normal', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50034.webp', buffs: [{ type: 'Melee', value: 10 }, { type: 'Skill', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'All', value: 7.5 }] },
        { id: '50035', name: 'Arkelion', element: 'Ice', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50035.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'Ice', value: 8.7 }, { type: 'Skill', value: 9.8 }, { type: 'Ice', value: 11.3 }] },
        { id: '50036', name: 'Verdia', element: 'Plant', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50036.webp', buffs: [{ type: 'Melee', value: 10 }, { type: 'Plant', value: 8.7 }, { type: 'Boss', value: 9.8 }, { type: 'Plant', value: 11.3 }] },
        { id: '50037', name: 'Morvis', element: 'Poison', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50037.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'Poison', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'Poison', value: 11.3 }] },
        { id: '50038', name: 'Eris', element: 'Fire', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50038.webp', buffs: [{ type: 'Ranged', value: 7.5 }, { type: 'Fire', value: 8.7 }, { type: 'Boss', value: 9.8 }, { type: 'Fire', value: 11.3 }] },
        { id: '50039', name: 'Aurobos', element: 'Ground', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50039.webp', buffs: [{ type: 'Melee', value: 10 }, { type: 'Earth', value: 8.7 }, { type: 'All', value: 6.5 }, { type: 'Earth', value: 11.3 }] },
        { id: '50040', name: 'Etheria', element: 'Wind', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50040.webp', buffs: [{ type: 'All', value: 5 }, { type: 'Wind', value: 8.7 }, { type: 'Crit D.', value: 9.8 }, { type: 'Wind', value: 11.3 }] },
        { id: '50041', name: 'Koyori', element: 'Light', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50041.webp', buffs: [{ type: 'Skill', value: 7.5 }, { type: 'Light', value: 8.7 }, { type: 'Ranged', value: 9.8 }, { type: 'Light', value: 11.3 }] },
        { id: '50042', name: 'Oniki', element: 'Wind', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50042.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Wind', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Wind', value: 9 }] },
        { id: '50043', name: 'Borealis', element: 'Ice', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50043.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Ice', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Ice', value: 9 }] },
        { id: '50044', name: 'Azure Serpent Dagon', element: 'Electric', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50044.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Electric', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Electric', value: 9 }] },
        { id: '50045', name: 'Lady Gam of the Mouse Family', element: 'Ground', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50045.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Earth', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Earth', value: 9 }] },
        { id: '50046', name: 'Nereia', element: 'Water', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50046.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Water', value: 6.9 }, { type: 'Skill', value: 7.8 }, { type: 'Water', value: 9 }] },
        { id: '50047', name: 'Florian', element: 'Plant', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50047.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Plant', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Plant', value: 9 }] },
        { id: '50048', name: 'Ragnos', element: 'Fire', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50048.webp', buffs: [{ type: 'Melee', value: 8 }, { type: 'Fire', value: 6.9 }, { type: 'Boss', value: 7.8 }, { type: 'Fire', value: 9 }] },
        { id: '50049', name: 'Maribelle', element: 'Water', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50049.webp', buffs: [{ type: 'Skill', value: 6 }, { type: 'Water', value: 6.9 }, { type: 'All', value: 5.2 }, { type: 'Water', value: 9 }] },
        { id: '50050', name: 'Belka', element: 'Poison', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50050.webp', buffs: [{ type: 'Basic', value: 10 }, { type: 'Poison', value: 6.9 }, { type: 'Crit %', value: 2.6 }, { type: 'Poison', value: 9 }] },
        { id: '50051', name: 'Mortarex', element: 'Dark', rarity: 'Mythic', icon: 'https://assets.pixelheroes.tips/images/ToyZ/50051.webp', buffs: [{ type: 'Ranged', value: 6 }, { type: 'Dark', value: 6.9 }, { type: 'Crit D.', value: 7.8 }, { type: 'Dark', value: 9 }] }
    ]
};

// Buff calculation functions
function calculateToyzLevelMultiplier(level) {
    // Each level adds 10% to the base buff values
    return 1 + (level - 1) * 0.1;
}

function calculateLayoutBuffs(layout, toyzLevel = 1) {
    const buffs = {
        'Melee': 0,
        'Ranged': 0,
        'Basic': 0,
        'Atk Spd': 0,
        'Skill': 0,
        'All': 0,
        'Fire': 0,
        'Water': 0,
        'Earth': 0,
        'Ground': 0,
        'Wind': 0,
        'Ice': 0,
        'Electric': 0,
        'Plant': 0,
        'Poison': 0,
        'Light': 0,
        'Dark': 0,
        'Boss': 0,
        'Crit D.': 0,
        'Crit %': 0
    };

    const levelMultiplier = calculateToyzLevelMultiplier(toyzLevel);
    
    // For each hexagon in the layout
    layout.forEach(hexagon => {
        if (hexagon && hexagon.toyz) {
            const toyz = hexagon.toyz;
            const rarityMultiplier = TOYZ_DATABASE.rarities[toyz.rarity].multiplier;
            
            // Calculate side matching bonus (each matching side adds 5% bonus)
            const matchingBonus = 1 + (hexagon.matchingSides * 0.05);
            
            // Apply all buffs from the ToyZ
            toyz.buffs.forEach(buff => {
                const finalValue = buff.value * levelMultiplier * rarityMultiplier * matchingBonus;
                buffs[buff.type] += finalValue;
                
                // 'All' buffs apply to all primary stats
                if (buff.type === 'All') {
                    buffs['Melee'] += finalValue * 0.5;
                    buffs['Ranged'] += finalValue * 0.5;
                    buffs['Basic'] += finalValue * 0.5;
                }
                
                // Earth and Ground are the same
                if (buff.type === 'Earth') {
                    buffs['Ground'] += finalValue;
                } else if (buff.type === 'Ground') {
                    buffs['Earth'] += finalValue;
                }
            });
        }
    });
    
    return buffs;
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOYZ_DATABASE, calculateToyzLevelMultiplier, calculateLayoutBuffs };
}
