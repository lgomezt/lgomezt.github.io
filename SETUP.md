# Setup Instructions

## ✅ What's Been Done

1. **Cleaned the repository** - All old Jekyll files removed (backup saved in `WEBSITE_CONTENT_BACKUP.md`)
2. **Created React app** - Modern React app using Vite
3. **Set up GitHub Actions** - Automatic deployment to GitHub Pages
4. **Created basic pages** - Home, About, Publications, Teaching, Contact
5. **Configured routing** - React Router with GitHub Pages support

## 🚀 Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Locally
```bash
npm run dev
```
Visit http://localhost:5173 to see your site

### 3. Deploy to GitHub Pages

#### Option A: Automatic Deployment (Recommended)
1. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Under "Source", select **"GitHub Actions"**
   - The workflow will automatically deploy on every push to `main`

#### Option B: Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages (using gh-pages branch or GitHub Actions)