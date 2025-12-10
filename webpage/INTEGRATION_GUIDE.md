# BauChat Pro Landing Page - Integration Guide

## Quick Start

The Features and HowItWorks sections have been created and are ready to integrate into your Astro landing page.

### Files Created

```
/Users/anskhalid/CascadeProjects/saas-alex-becker/webpage/
└── src/
    └── components/
        ├── HowItWorks.astro    (6.0 KB)
        ├── Features.astro      (6.1 KB)
        └── README.md           (3.2 KB)
```

## Integration Steps

### 1. Set Up Astro Project (if not already done)

```bash
cd /Users/anskhalid/CascadeProjects/saas-alex-becker/webpage
npm create astro@latest . -- --template minimal --install --no-git --typescript strict
npm install -D tailwindcss @astrojs/tailwind
npx astro add tailwind
```

### 2. Configure Tailwind

Create/update `tailwind.config.mjs`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Main BauChat Pro brand blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 3. Create Main Landing Page

Create `src/pages/index.astro`:

```astro
---
import HowItWorks from '../components/HowItWorks.astro';
import Features from '../components/Features.astro';
---

<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BauChat Pro - WhatsApp Bautagebuch für Architekten</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased">

  <!-- Hero Section (create separately) -->
  <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Ihr WhatsApp wird zum<br />HOAI-konformen Bautagebuch
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">
        Ohne App-Wechsel. Ohne Schulung. Ohne Aufwand.
      </p>
      <button class="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
        Jetzt 14 Tage kostenlos testen
      </button>
    </div>
  </section>

  <!-- How It Works Section -->
  <HowItWorks lang="de" />

  <!-- Features Section -->
  <Features lang="de" />

  <!-- CTA Section (create separately) -->
  <section class="bg-primary-600 text-white py-16">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Bereit für Ihr digitales Bautagebuch?
      </h2>
      <button class="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
        Kostenlos starten
      </button>
    </div>
  </section>

</body>
</html>
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your landing page.

## Component Features

### HowItWorks.astro

**Visual Elements:**
- 3 circular step indicators with custom icons
- Horizontal connecting line on desktop
- Vertical arrows on mobile
- Step numbers in corner badges
- White background with subtle animations

**Content:**
1. WhatsApp verbinden (WhatsApp icon)
2. KI übernimmt (AI Brain icon)
3. Dokumentation abrufen (PDF Document icon)

### Features.astro

**Visual Elements:**
- 6 feature cards in 3x2 grid
- Light blue background (bg-blue-50)
- Icon squares with primary-100 background
- Card hover effects with shadow
- Responsive grid layout

**Features:**
1. WhatsApp-Integration (Chat icon)
2. KI-Bautagebuch (Document icon)
3. Projekt-Zuordnung (Folder icon)
4. Bild-Dokumentation (Camera icon)
5. Intelligente Suche (Search icon)
6. Sprachnachrichten-Text (Microphone icon)

## Customization

### Change Colors

Edit the `primary` color values in `tailwind.config.mjs`:

```javascript
primary: {
  600: '#YOUR_BRAND_COLOR',
}
```

### Add More Languages

Both components support the `lang` prop:

```astro
<HowItWorks lang="en" />
<Features lang="en" />
```

Add English content by extending the `content` object in each component:

```typescript
const content = {
  de: { /* German content */ },
  en: { /* English content */ }
};
```

### Modify Animations

Edit the `<style>` section in each component:

```css
/* Adjust animation duration */
animation: fadeInUp 0.6s ease-out forwards;

/* Adjust delays */
animation-delay: 0.1s;
```

## Responsive Behavior

### HowItWorks
- **Desktop (lg+):** 3 columns with horizontal connecting line
- **Mobile:** Single column with vertical arrows between steps

### Features
- **Desktop (lg+):** 3 columns
- **Tablet (md):** 2 columns
- **Mobile:** 1 column

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- All icons are inline SVG (no external requests)
- CSS animations use GPU-accelerated properties
- Responsive images support
- Minimal JavaScript (Astro generates static HTML)

## Next Steps

1. Create Hero section with CTA button
2. Add pricing section
3. Create testimonials component
4. Add FAQ section
5. Build footer with contact info
6. Set up form handling for "Kostenlos testen" button

## Support

For questions or issues with these components, refer to:
- `/Users/anskhalid/CascadeProjects/saas-alex-becker/webpage/src/components/README.md`
- Astro Documentation: https://docs.astro.build
- Tailwind CSS: https://tailwindcss.com/docs
