# GitHub Pages Deployment Guide

This portfolio is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Push to GitHub Repository
First, make sure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger on the next push to the main branch

### 3. Configure Repository Settings

Make sure your repository settings are configured correctly:
- Repository name should match the base path in `vite.config.ts` (currently set to `/resume/`)
- If your repository has a different name, update the `base` path in `vite.config.ts`

### 4. Access Your Deployed Site

Once the deployment is complete, your portfolio will be available at:
```
https://[your-username].github.io/[repository-name]/
```

For example: `https://666keke.github.io/resume/`

## Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the project using `npm run build`
- Deploy to GitHub Pages
- Update the live site

This happens automatically whenever you push changes to the `main` branch.

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository for error details
- Ensure all dependencies are properly listed in `package.json`
- Verify that the build works locally with `npm run build`

### Site Not Loading Correctly
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that GitHub Pages is enabled in repository settings
- Ensure the workflow has proper permissions (should be automatic)

### Assets Not Loading
- This is usually due to incorrect base path configuration
- Make sure the repository name matches the base path in `vite.config.ts`