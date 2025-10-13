# Project Images Guide

This directory contains images and GIFs for portfolio projects.

## Directory Structure

```
projects/
├── cub3d/
├── gomoku/
├── minishell/
└── transcendence/
```

## Image Specifications

### Thumbnails (Card Previews)
- **Format**: GIF (preferred) or PNG
- **Dimensions**: 800-1200px wide
- **File size**: < 5MB (optimize GIFs!)
- **Aspect ratio**: 16:9 recommended
- **Naming**: `thumbnail.gif` or `thumbnail.png`

### Gallery Images (Modal View)
- **Format**: PNG (screenshots), GIF (demos), WebP (optimized)
- **Dimensions**: 1920px wide (will scale down)
- **File size**: < 3MB per image
- **Naming**: Descriptive names (e.g., `gameplay.gif`, `tournament.png`)

## Optimization Tools

### For GIFs:
- **Online**: [ezgif.com](https://ezgif.com/optimize) - Reduce colors, resize
- **CLI**: `gifsicle -O3 --lossy=80 input.gif -o output.gif`

### For PNGs:
- **Online**: [tinypng.com](https://tinypng.com)
- **CLI**: `pngquant input.png --output output.png`

### Recording GIFs:
- **Linux**: Peek, SimpleScreenRecorder
- **macOS**: Kap, Gifski
- **Windows**: ScreenToGif

## Tips for Great Project Images

### For cub3D:
- Record gameplay showing player movement through textured 3D corridors
- Screenshot of .cub map file with syntax highlighting
- Diagram showing raycasting concept

### For Gomoku:
- GIF of AI analyzing position and making moves (show performance metrics)
- Screenshot of final board position with winning pattern highlighted
- Visual showing pattern recognition (4-open, 3-open, etc.)

### For Transcendence:
- GIF of exciting 4-player match moment
- Tournament bracket with active matches
- Authentication flow (login → 2FA → dashboard)
- Grafana dashboard with live metrics

### For Minishell:
- Terminal recording showing complex pipelines
- Multiple redirections in action
- Built-in commands demo (cd, export, etc.)
- Screenshot with syntax highlighting for shell code

## Adding Images to Projects

1. Place your images in the appropriate project folder
2. In `components/Projects.tsx`, uncomment the image lines
3. Adjust paths if needed
4. Test locally with `npm run dev`

## Example:

```typescript
thumbnail: "/projects/cub3d/thumbnail.gif",
images: [
  "/projects/cub3d/gameplay.gif",
  "/projects/cub3d/textures.png",
  "/projects/cub3d/map-editor.png",
],
```

## Performance Notes

- Next.js will automatically serve these from `public/`
- Consider using WebP format with PNG fallback for best results
- Lazy loading is enabled in the modal
- First image (thumbnail) loads immediately
