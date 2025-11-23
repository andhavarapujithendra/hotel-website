# Cloudflare Pages Deployment Guide

This guide explains how to deploy your hotel website to Cloudflare Pages.

## Prerequisites

1. Install Wrangler CLI globally (if not already installed):
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

## Deployment Methods

### Method 1: Using npm Scripts (Recommended)

#### Deploy to Production
```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Deploy the `dist/` folder to Cloudflare Pages

#### Deploy Preview (for testing)
```bash
npm run deploy:preview
```

### Method 2: Manual Deployment

1. **Build the project:**
```bash
npm run build
```

2. **Deploy using Wrangler:**
```bash
wrangler pages deploy dist --project-name=hotel-website
```

### Method 3: Connect GitHub Repository (Best for CI/CD)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Connect your GitHub repository: `andhavarapujithendra/hotel-website`
4. Configure build settings:
   - **Framework preset**: None (Static HTML)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Node version**: 18 or higher

5. Click **Save and Deploy**

## Configuration Files

### `wrangler.toml`
```toml
name = "hotel-website"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"

[site]
bucket = "./dist"
```

## Troubleshooting

### Error: "No loader is configured for .html"
**Solution**: This error occurs when `package.json` has `"main": "src/index.html"`. We've removed this field. Make sure your `package.json` doesn't have a `main` field.

### Error: "Project not found"
**Solution**: Create the project first in Cloudflare Dashboard, or let Wrangler create it on first deployment.

### Error: "Authentication required"
**Solution**: Run `wrangler login` to authenticate with Cloudflare.

## Custom Domain

After deployment, you can add a custom domain:

1. Go to your Pages project in Cloudflare Dashboard
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add your domain

## Environment Variables (if needed)

If you need environment variables:

1. Go to Cloudflare Dashboard → Your Pages Project
2. Navigate to **Settings** → **Environment variables**
3. Add your variables for Production and/or Preview environments

## Deployment URLs

After deployment, you'll get:
- **Production URL**: `https://hotel-website.pages.dev`
- **Preview URL**: `https://[branch].[project].pages.dev`

## Automatic Deployments

Once connected to GitHub:
- **Push to `main` branch** → Automatic production deployment
- **Push to other branches** → Automatic preview deployment

## Local Testing Before Deployment

Always test locally before deploying:

```bash
npm run preview
```

This builds and serves the production version locally at `http://localhost:8080`.
