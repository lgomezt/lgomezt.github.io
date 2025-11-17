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

### 3. Customize Content
- Edit pages in `src/pages/` to match your content from `WEBSITE_CONTENT_BACKUP.md`
- Update styles in the corresponding `.css` files
- Add your profile image to `public/` folder

### 4. Deploy to GitHub Pages

#### Option A: Automatic Deployment (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial React setup"
   git push origin main
   ```

2. Enable GitHub Pages:
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

## 📁 Project Structure

```
├── public/              # Static files (404.html, images, etc.)
├── src/
│   ├── components/      # Reusable components (Header, etc.)
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── .github/
│   └── workflows/      # GitHub Actions for auto-deployment
└── dist/               # Build output (created after npm run build)
```

## 🎨 Customization Tips

1. **Add Images**: Place images in `public/` folder and reference as `/image-name.png`
2. **Update Colors**: Modify CSS variables or color values in component CSS files
3. **Add Pages**: Create new components in `src/pages/` and add routes in `App.jsx`
4. **Content**: Reference `WEBSITE_CONTENT_BACKUP.md` for all your original content

## 🔧 Configuration

- **Base URL**: Currently set to `/` in `vite.config.js` (for `username.github.io` domain)
- **Routing**: Uses BrowserRouter with 404.html fallback for GitHub Pages
- **Build Output**: `dist/` folder (automatically deployed by GitHub Actions)

## 📝 Notes

- The GitHub Actions workflow automatically builds and deploys on every push to `main`
- No need to manually run `npm run build` - GitHub Actions handles it
- The `dist` folder is in `.gitignore` - don't commit it
- All your original content is preserved in `WEBSITE_CONTENT_BACKUP.md`

