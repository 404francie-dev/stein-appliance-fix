# Deployment Guide

This React app is configured for deployment on multiple hosting providers. Follow the instructions for your chosen platform:

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally (optional)
npm run preview
```

The build output will be in the `dist` folder.

## Hosting Providers

### Netlify
- Upload the `dist` folder or connect your Git repository
- The `public/_redirects` file is already configured
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Upload the `dist` folder or connect your Git repository  
- The `vercel.json` file handles routing
- Build command: `npm run build`
- Output directory: `dist`

### Apache Server
- Upload contents of `dist` folder to your web root
- The `public/.htaccess` file will be copied to handle routing
- Ensure mod_rewrite is enabled

### Nginx Server
- Upload contents of `dist` folder to your web root
- Use the provided `nginx.conf` configuration
- Restart Nginx after configuration changes

### Other Static Hosting
- Upload contents of `dist` folder
- Configure your server to serve `index.html` for all routes

## Domain Configuration

1. Update the canonical URL in `index.html` to match your domain
2. Update Open Graph URLs to match your domain
3. Test all routes after deployment:
   - `/` (Home)
   - `/services` (Services page)
   - Direct URL access and refresh functionality

## Testing Checklist

After deployment, verify:
- [ ] Home page loads correctly
- [ ] Services page loads correctly  
- [ ] Navigation between pages works
- [ ] Direct URL access works (e.g., yourdomain.com/services)
- [ ] Page refresh works on all routes
- [ ] All images and assets load properly
- [ ] Contact forms and WhatsApp links work