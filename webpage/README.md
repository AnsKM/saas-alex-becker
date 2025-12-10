# BauChat Pro Landing Page

Landing page for BauChat Pro - DSGVO-compliant WhatsApp documentation for German construction companies.

## Project Structure

```
webpage/
├── src/
│   ├── components/
│   │   ├── Hero.astro         # Hero section with CTA
│   │   └── PainPoints.astro   # Problem agitation section
│   ├── i18n/
│   │   └── utils.ts           # Translation utilities (DE/EN)
│   └── pages/
│       └── index.astro        # Main landing page
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Components

### Hero.astro
Compelling hero section featuring:
- Headline: "WhatsApp-Dokumentation. Rechtssicher. DSGVO-konform."
- Social proof subheadline (72% statistic)
- Primary CTA: "Kostenlose Pilotphase starten" (orange button)
- Secondary CTA: "Mehr erfahren" (outline button)
- Trust badges: DSGVO-konform, Deutsche Server, Keine Schulung nötig
- Responsive design with mobile-first approach
- Product mockup placeholder

### PainPoints.astro
Problem agitation section with 3 cards:
1. **Bis zu €50.000 Bussgeld** - DSGVO violation warning
2. **8+ Stunden pro Woche verschwendet** - Lost documentation
3. **1-2 Stunden täglich für Berichte** - Manual daily reports

Each card features:
- Icon in colored circle (red/orange for urgency)
- Bold title highlighting the problem
- Description text explaining the pain point

## Features

- Fully responsive (mobile-first design)
- i18n support (German/English)
- Tailwind CSS for styling
- TypeScript for type safety
- Astro for optimal performance

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

The components accept a `lang` prop to determine which language to display:

```astro
<Hero lang="de" />
<PainPoints lang="en" />
```

Available languages: `de` (German), `en` (English)

## Color Scheme

- **Primary Blue**: `#0c4a6e` (primary-900)
- **Orange CTA**: `#f59e0b` (orange-500)
- **Background**: `#f9fafb` (gray-50)

## Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:4321
4. Replace product mockup placeholder with actual design
5. Add remaining landing page sections
