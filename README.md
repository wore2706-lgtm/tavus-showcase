# Lissy AI Solutions - Tavus Showcase

A live demo showcasing AI video generation using Tavus API with Netlify Functions.

## Features

- **Real-time AI Video Generation**: Enter text, get AI-generated video
- **Netlify Functions Backend**: Serverless API integration
- **Modern UI**: Responsive design with gradient backgrounds
- **Tavus API Integration**: Uses state-of-the-art video generation
- **Zero Configuration**: Ready to deploy

## Setup & Deployment

### 1. Netlify Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/tavus-showcase.git
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build settings are pre-configured in `netlify.toml`

3. **Set Environment Variable**:
   - In Netlify dashboard: Site settings → Environment variables
   - Add `TAVUS_API_KEY` with your Tavus API key

### 2. Local Development

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Set environment variable**:
   ```bash
   export TAVUS_API_KEY="your_tavus_api_key_here"
   ```

3. **Run locally**:
   ```bash
   netlify dev
   ```

4. **Open browser**: http://localhost:8888

## Project Structure

```
tavus-showcase/
├── index.html              # Main frontend page
├── netlify.toml           # Netlify configuration
├── README.md              # This file
└── netlify/
    └── functions/
        └── tavus.js       # Netlify Function for Tavus API
```

## API Integration

The showcase uses Tavus API with these features:

- **Endpoint**: `POST https://tavusapi.com/v2/videos`
- **Required**: `replica_id` and `script`
- **Optional**: `background_url`, `voice` settings
- **Authentication**: API key in `x-api-key` header

## Customization

### Change Avatar
Edit `netlify/functions/tavus.js`:
```javascript
replica_id: 'anna', // Change to your replica ID
```

### Change Voice
```javascript
voice: 'en-US-JennyNeural', // Change to desired voice
```

### Add Background
```javascript
background_url: 'https://your-website.com', // Custom background
```

## Cost & Limits

- **Tavus Free Tier**: 5 videos/month
- **Netlify Free Tier**: 125k function calls/month
- **No credit card required** for initial testing

## Next Steps

1. **Get Tavus API Key**: Sign up at [Tavus](https://tavus.io)
2. **Test Integration**: Use the free tier for testing
3. **Customize Avatar**: Create your own replica in Tavus dashboard
4. **Production Ready**: Upgrade Tavus plan for business use

## Support

For questions or issues:
- Email: ai-office@maku-hanga.com
- Project: Lissy AI Solutions
- Created: March 2026

---

**Powered by Tavus AI & Netlify**