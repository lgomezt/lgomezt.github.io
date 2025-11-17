# Lucas Gómez Tobón - Personal Website

A modern React-based personal website built with Vite and deployed to GitHub Pages.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📦 Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/      # GitHub Actions for deployment
├── dist/               # Build output (generated)
└── package.json        # Dependencies and scripts
```

## 🚢 Deployment

This project uses GitHub Actions to automatically build and deploy to GitHub Pages whenever you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to `main`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project: `npm run build`
2. The `dist` folder contains the static files
3. You can deploy the `dist` folder contents to GitHub Pages
