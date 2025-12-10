# BauChat Pro Landing Page Components

## Components Created

### 1. HowItWorks.astro
A 3-step process visualization showing how BauChat Pro works.

**Features:**
- Responsive 3-column grid (desktop) → single column (mobile)
- Animated step indicators with icons
- Connecting line between steps on desktop
- Staggered fade-in animations
- WhatsApp, AI Brain, and PDF document icons

**Usage:**
```astro
---
import HowItWorks from '../components/HowItWorks.astro';
---

<HowItWorks lang="de" />
```

### 2. Features.astro
A 6-feature grid showcasing BauChat Pro's main capabilities.

**Features:**
- Responsive 3x2 grid (desktop) → 2x3 (tablet) → 1x6 (mobile)
- Card-based design with hover effects
- Icon system for each feature
- Light blue background (bg-blue-50)
- Staggered animations on load

**Usage:**
```astro
---
import Features from '../components/Features.astro';
---

<Features lang="de" />
```

## Tailwind Configuration

Make sure your `tailwind.config.mjs` includes these colors:

```js
export default {
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
          600: '#2563eb', // Main brand blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## Example Landing Page Structure

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import Features from '../components/Features.astro';
import HowItWorks from '../components/HowItWorks.astro';
import CTA from '../components/CTA.astro';
---

<Layout title="BauChat Pro - WhatsApp Bautagebuch für Architekten">
  <Hero lang="de" />
  <HowItWorks lang="de" />
  <Features lang="de" />
  <CTA lang="de" />
</Layout>
```

## Design Specifications

### Colors
- Primary Blue: `#2563eb` (primary-600)
- Light Blue Background: `#eff6ff` or `#f0f9ff` (blue-50)
- White Cards: `#ffffff`
- Text Gray: `#111827` (gray-900) for headings, `#4b5563` (gray-600) for body

### Typography
- Headlines: 3xl → 4xl → 5xl (responsive)
- Subheadlines: lg → xl
- Card Titles: lg → xl
- Body Text: base → lg

### Spacing
- Section Padding: py-16 md:py-24
- Card Padding: p-6 md:p-8
- Grid Gaps: gap-6 lg:gap-8

### Icons
All icons use inline SVG with:
- Size: w-6 h-6 md:w-7 md:h-7 (feature cards)
- Size: w-10 h-10 md:w-12 md:h-12 (how it works circles)
- Color: text-primary-600
- Stroke width: 2

## Animations

Both components include:
- Fade-in animations on page load
- Staggered delays for sequential appearance
- Hover effects on cards (Features)
- Smooth transitions (300ms cubic-bezier)

## Responsive Breakpoints

- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h2 → h3)
- ARIA labels where needed
- Decorative elements marked with aria-hidden="true"
- High contrast text colors

## German Content

All content is in German as per requirements:
- DSGVO-konform (GDPR compliant)
- HOAI-konform (German fee structure for architects)
- Professional construction industry terminology
