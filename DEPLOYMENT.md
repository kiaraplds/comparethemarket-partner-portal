# Deploy Compare the Market Partner Portal to Vercel

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git installed on your machine
- Vercel CLI (optional but recommended)

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd "/Users/kiara.polychroniadi/Cursor Files/CompareTheMarket"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? **comparethemarket-partner-portal**
- In which directory is your code located? **./
**
- Want to override the settings? **N**

### Step 4: Deploy to Production
```bash
vercel --prod
```

## Option 2: Deploy via GitHub + Vercel Dashboard

### Step 1: Initialize Git Repository
```bash
cd "/Users/kiara.polychroniadi/Cursor Files/CompareTheMarket"
git init
git add .
git commit -m "Initial commit - Compare the Market Partner Portal"
```

### Step 2: Push to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/comparethemarket-partner-portal.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Click "Deploy"

## Environment Variables (if needed)

If you need to add environment variables:

### Via Vercel CLI:
```bash
vercel env add REACT_APP_THOUGHTSPOT_HOST
```

### Via Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add variables as needed

## Build Settings

The project is configured with:
- **Build Command**: `npm run build` (automatically from package.json)
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Development Command**: `npm start`

## Post-Deployment

After deployment, your app will be available at:
- **Production**: `https://comparethemarket-partner-portal.vercel.app`
- **Preview**: Unique URL for each branch/commit

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure no linter errors that break the build
- Check Vercel build logs for specific errors

### ThoughtSpot Embed Issues
- Ensure your Vercel domain is added to ThoughtSpot CSP and CORS allowlists
- Update ThoughtSpot security settings to include your Vercel URLs

### Routing Issues (404 on refresh)
- The `vercel.json` file handles SPA routing
- All routes should redirect to `index.html`

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS settings as instructed

## Continuous Deployment

Once connected to Git:
- Every push to `main` branch → Production deployment
- Every push to other branches → Preview deployment
- Pull requests get unique preview URLs

## Support

- Vercel Documentation: https://vercel.com/docs
- React Deployment: https://create-react-app.dev/docs/deployment/

---

**Note**: Make sure to update ThoughtSpot CORS settings to include your Vercel domain for the embeds to work properly!


