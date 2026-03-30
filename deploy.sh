#!/bin/bash
cd /home/digibus/.openclaw/workspace/tavus-showcase

# Create site with automated responses
echo -e "1\n\n" | npx netlify sites:create --name tavus-showcase-lissy-ai --manual 2>/dev/null || true

# If that fails, try init with automated responses
echo -e "2\ntavus-showcase-lissy-ai\n\n" | npx netlify init 2>/dev/null || true

# Deploy the site
npx netlify deploy --dir=. --prod