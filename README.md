# Lead Time GTM - Scroll-Through Pitch Deck

A lightweight, animated single-page website built with Astro, Tailwind CSS, and TypeScript. Designed for Netlify deployment with near-zero runtime JavaScript.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── content/
│   ├── config.ts          # Content collection schema
│   └── sections/          # MDX content files
├── components/
│   ├── Section.astro      # Reusable section component
│   ├── Header.astro       # Navigation & progress bar
│   ├── Form.astro         # Netlify Forms integration
│   ├── CTA.astro          # CTA button component
│   └── StickyCTA.astro    # Floating CTA
├── layouts/
│   └── BaseLayout.astro   # Base HTML layout with meta tags
├── pages/
│   └── index.astro        # Main page
└── styles/
    └── global.css         # Global styles & animations
```

## ✏️ Editing Content

All content is in `src/content/sections/*.mdx`. Each file has:
- Frontmatter with metadata (title, subtitle, order, animation type)
- MDX body for content

To add a new section:
1. Create a new `.mdx` file in `src/content/sections/`
2. Add frontmatter with `order` number
3. Content will automatically appear on the site

## 🎨 Animations

Sections support three animation types:
- `fade` - Fade in from bottom (default)
- `slide-up` - Slide up and fade in
- `parallax` - Subtle parallax effect
- `none` - No animation

Animations automatically respect `prefers-reduced-motion` for accessibility.

## 🌐 Netlify Deployment

1. Push to GitHub
2. Connect repository to Netlify
3. Build settings are already configured in `netlify.toml`
4. Forms will automatically work with Netlify Forms

## 🔧 Configuration

- **Site URL**: Update `site` in `astro.config.mjs`
- **Styling**: Edit `src/styles/global.css` and Tailwind classes
- **Content Schema**: Modify `src/content/config.ts`

## 📝 Features

- ✅ Scroll-triggered animations
- ✅ Keyboard navigation (arrow keys, Home/End)
- ✅ Progress bar
- ✅ Sticky CTA (appears after 30% scroll)
- ✅ Netlify Forms integration
- ✅ Accessibility (WCAG AA compliant)
- ✅ SEO optimized (sitemap, meta tags)
- ✅ Security headers
- ✅ Responsive design

## 🎯 Performance

- <50 KB JavaScript
- Static HTML generation
- Optimized images (when added)
- Fast LCP and FCP

## 📄 License

All rights reserved - Lead Time GTM
