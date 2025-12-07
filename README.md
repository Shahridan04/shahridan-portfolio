# Shahridan Portfolio Website

A modern, responsive portfolio website showcasing video editing, photography, and web development work.

## Features

- 🎨 Modern, clean design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 for optimal performance
- 🎬 Portfolio sections for Video Editing, Photography, and Web Development
- 📧 Contact form section
- 🚀 Ready for free hosting deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

1. **Contact Information** - Edit `components/Contact.tsx`:
   - Replace email, LinkedIn, and social media handles

2. **Portfolio Items** - Edit `components/Portfolio.tsx`:
   - Update the `portfolioItems` array with your actual projects
   - Add image URLs when you have them ready

3. **About Section** - Edit `components/About.tsx`:
   - Customize the description and skill categories

4. **Hero Section** - Edit `components/Hero.tsx`:
   - Update the title and description

### Adding Images

To add images to your portfolio:
1. Create a `public` folder in the root directory
2. Add your images there (e.g., `public/video1.jpg`)
3. Update portfolio items to include image paths:
   ```typescript
   {
     id: 1,
     title: 'Your Project',
     category: 'video',
     description: 'Description',
     image: '/video1.jpg'
   }
   ```

## Free Hosting Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy" (Vercel auto-detects Next.js)
7. Your site will be live in minutes!

**Benefits:**
- Free SSL certificate
- Automatic deployments on git push
- Custom domain support
- Global CDN
- Free tier is very generous

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login with GitHub
4. Click "New site from Git"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

### Option 3: GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "next build && next export && gh-pages -d out"
   ```
3. Run `npm run deploy`
4. Enable GitHub Pages in repository settings

### Option 4: Cloudflare Pages

1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Sign up/login
4. Connect your repository
5. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
6. Deploy!

## Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Responsive Design** - Mobile-first approach

## License

This project is open source and available for personal use.

## Support

For questions or issues, feel free to reach out!

