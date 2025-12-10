# BauChat Pro - Quick Reference Card

## Development Commands
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Brand Colors (Tailwind Classes)
```html
<!-- Primary (Navy/Blue) -->
bg-primary-900   #1e3a5f   <!-- Dark navy -->
bg-primary-600   #2563eb   <!-- Royal blue -->
bg-primary-500   #3b82f6   <!-- Bright blue -->
bg-primary-100   #dbeafe   <!-- Light blue -->

<!-- Accent & Success -->
bg-accent        #f59e0b   <!-- Orange CTA -->
text-success     #059669   <!-- Green badges -->
```

## Translation Usage
```astro
---
import { useTranslations } from '../i18n/utils';
const t = useTranslations('de'); // or 'en'
---
<h1>{t('hero.title')}</h1>
```

## Available Translation Keys
```
meta.title, meta.description
nav.features, nav.benefits, nav.pricing
hero.title, hero.subtitle, hero.cta_primary
features.title, features.whatsapp.title
benefits.title, benefits.time.title
pricing.starter.name, pricing.professional.name
cta.title, cta.button
footer.privacy, footer.terms
```

## Project Structure
```
src/
├── i18n/                # Translations (de.json, en.json)
├── layouts/             # BaseLayout.astro
├── pages/              
│   ├── de/             # German pages
│   └── en/             # English pages
├── components/          # UI components
└── styles/             # global.css
```

## Routes
```
/              → /de/
/de/           → German landing page
/en/           → English landing page
/de/datenschutz → Privacy (DE)
/en/privacy    → Privacy (EN)
```

## Configuration Files
- `astro.config.mjs` - i18n, integrations
- `tailwind.config.mjs` - Brand colors
- `src/i18n/utils.ts` - Translation helpers
- `src/styles/global.css` - Tailwind + fonts

## Component Template
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { useTranslations } from '../i18n/utils';

const lang = 'de';
const t = useTranslations(lang);
---

<BaseLayout 
  title={t('meta.title')}
  description={t('meta.description')}
  lang={lang}
>
  <section class="py-20 bg-primary-900">
    <h2 class="text-4xl font-bold text-white">
      {t('section.title')}
    </h2>
  </section>
</BaseLayout>
```

## Deployment Ready
- Static site generation
- SEO optimized
- Multi-language support
- GitHub Pages compatible
