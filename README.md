# Pixel Heroes Adventure - Toyz Optimizer

A powerful optimization tool for Pixel Heroes Adventure that helps you find the best ToyZ arrangements in the 2-3-2 hexagon grid layout to maximize your hero's stats.

🎮 **[Play Pixel Heroes Adventure](https://dapp.pixelheroes.io/invite?code=S3QkiQKS)**

## Features

- **Smart Optimization**: Find the optimal ToyZ arrangement to maximize any stat (Attack, Health, Defense, Speed)
- **Exhaustive Search**: Analyzes all possible combinations to find the absolute best layouts
- **ToyZ Database**: Built-in database of all ToyZ with their stats and buff patterns
- **Collection Manager**: Import/export your ToyZ collection for easy management
- **Side Pattern Matching**: Automatically calculates matching hexagon sides for bonus stats
- **Multiple Optimization Goals**: Optimize for specific stats or maximum side matches
- **Tie-breaking Options**: Configure how to break ties between equally good arrangements
- **Real-time Progress**: Watch the optimization progress with time estimates
- **Visual Results**: See the optimal arrangements displayed on an interactive hexagon grid

## How to Use

1. **Add Your ToyZ**: 
   - Search for ToyZ by name in the database
   - Or manually enter custom ToyZ with their stats
   
2. **Select Target Pool**:
   - Use checkboxes to add ToyZ to your optimization pool
   - Click "Add to Selected" to include them in calculations

3. **Configure Optimization**:
   - Choose which stat to optimize (Attack, Health, Defense, Speed)
   - Select a center hexagon or let the algorithm find the best one
   - Enable/disable fast mode for quicker (but less exhaustive) results

4. **Run Optimization**:
   - Click "Optimize Toyz Layout" to start
   - View results in the hexagon grid display
   - Navigate through multiple optimal arrangements if found

## Technology Stack

- Pure HTML/CSS/JavaScript
- Web Workers for non-blocking optimization
- Tailwind CSS for styling
- Google Fonts (Inter, Press Start 2P)

## Local Development

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/hex-matching.git
cd hex-matching

# Start a local server (Python)
python3 -m http.server 8080

# Or use Node.js
npx http-server -p 8080
```

Then open `http://localhost:8080` in your browser.

## Deployment

The app is designed to be deployed as a static website. You can deploy it to:

- **GitHub Pages**: Push to a GitHub repository and enable Pages in settings
- **Netlify**: Drag and drop the folder or connect to GitHub
- **Vercel**: Import the project directly

## Performance Optimizations

- **Web Workers**: Heavy calculations run in a separate thread
- **Debounced Search**: Search input is debounced to prevent excessive re-renders
- **Pruning Algorithm**: Symmetry-based pruning reduces search space
- **Incremental UI Updates**: Progress updates are throttled for smooth performance

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support (Escape to close modals, Tab focus trapping)
- Skip to content link
- Focus indicators for keyboard users

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use and modify for your own projects.

## Credits

Created by the Pixel Heroes Community for the Pixel Heroes Adventure game.

---

**Disclaimer**: This is a fan-made optimization tool and is not affiliated with the official Pixel Heroes Adventure game.
