# BauChat Pro Components - Visual Specification

## HowItWorks.astro - Layout Breakdown

```
┌─────────────────────────────────────────────────────────────────┐
│                        WHITE BACKGROUND                          │
│                                                                  │
│              So einfach funktioniert es (h2)                     │
│     Ihr Team nutzt weiterhin WhatsApp. BauChat Pro              │
│              arbeitet im Hintergrund. (subtext)                  │
│                                                                  │
│  ┌───────────────┐────────┌───────────────┐────────┌──────────┐│
│  │    ┌───┐     │        │    ┌───┐     │        │  ┌───┐   ││
│  │    │ 1 │ ●   │        │    │ 2 │ ●   │        │  │ 3 │ ● ││
│  │    └───┘     │        │    └───┘     │        │  └───┘   ││
│  │   ┌─────┐    │        │   ┌─────┐    │        │ ┌─────┐  ││
│  │   │  📱  │    │        │   │  🧠  │    │        │ │ 📄  │  ││
│  │   └─────┘    │        │   └─────┘    │        │ └─────┘  ││
│  │               │        │               │        │          ││
│  │  WhatsApp     │        │  KI übernimmt │        │Dokumen-  ││
│  │  verbinden    │        │               │        │tation    ││
│  │               │        │               │        │abrufen   ││
│  │  Verbinden    │        │  Unsere KI    │        │Erhalten  ││
│  │  Sie Ihre...  │        │  sortiert...  │        │Sie...    ││
│  └───────────────┘        └───────────────┘        └──────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

Desktop: 3 columns side-by-side with connecting line
Mobile: Stacked vertically with down arrows between steps
```

### Visual Details

**Step Circles:**
- Size: 80px-96px diameter
- Color: primary-600 (#2563eb)
- Icon: White, 40px-48px
- Shadow: Large shadow for depth
- Badge: Step number in white circle at top-right corner

**Typography:**
- Headline: text-3xl → text-5xl, font-bold, gray-900
- Subheadline: text-lg → text-xl, gray-600
- Step Title: text-xl → text-2xl, font-bold, gray-900
- Step Text: text-base → text-lg, gray-600

**Spacing:**
- Section padding: py-16 md:py-24
- Gap between steps: gap-8 lg:gap-12
- Icon margin bottom: mb-6

---

## Features.astro - Layout Breakdown

```
┌─────────────────────────────────────────────────────────────────┐
│                    LIGHT BLUE BACKGROUND                         │
│                                                                  │
│              Alles, was Ihr Bautagebuch braucht (h2)             │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ ┌──────┐     │  │ ┌──────┐     │  │ ┌──────┐     │          │
│  │ │ 💬   │     │  │ │ 📄✨ │     │  │ │ 📁   │     │          │
│  │ └──────┘     │  │ └──────┘     │  │ └──────┘     │          │
│  │              │  │              │  │              │          │
│  │ WhatsApp-    │  │ KI-          │  │ Projekt-     │          │
│  │ Integration  │  │ Bautagebuch  │  │ Zuordnung    │          │
│  │              │  │              │  │              │          │
│  │ Empfangen    │  │ HOAI-        │  │ Nachrichten  │          │
│  │ Sie alle...  │  │ konformes... │  │ werden...    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ ┌──────┐     │  │ ┌──────┐     │  │ ┌──────┐     │          │
│  │ │ 📷   │     │  │ │ 🔍   │     │  │ │ 🎤   │     │          │
│  │ └──────┘     │  │ └──────┘     │  │ └──────┘     │          │
│  │              │  │              │  │              │          │
│  │ Bild-        │  │ Intelligente │  │ Sprach-      │          │
│  │ Dokumentation│  │ Suche        │  │ nachrichten  │          │
│  │              │  │              │  │              │          │
│  │ GPS-         │  │ Finden Sie   │  │ Deutsche     │          │
│  │ Koordinaten..│  │ jede...      │  │ Sprach...    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

Desktop: 3x2 grid (3 columns, 2 rows)
Tablet: 2x3 grid (2 columns, 3 rows)
Mobile: 1x6 grid (1 column, 6 rows)
```

### Visual Details

**Feature Cards:**
- Background: White (#ffffff)
- Border radius: rounded-xl (12px)
- Padding: p-6 md:p-8
- Shadow: shadow-sm, hover:shadow-md
- Hover effect: translateY(-4px)

**Icon Containers:**
- Size: 48px-56px square
- Background: primary-100 (#dbeafe)
- Border radius: rounded-lg (8px)
- Icon color: primary-600 (#2563eb)
- Icon size: 24px-28px

**Typography:**
- Headline: text-3xl → text-5xl, font-bold, gray-900
- Card Title: text-lg → text-xl, font-bold, gray-900
- Card Text: text-base, gray-600, leading-relaxed

**Spacing:**
- Section padding: py-16 md:py-24
- Grid gap: gap-6 lg:gap-8
- Icon margin bottom: mb-5

---

## Color Palette

```
Primary Blue (Brand Color):
├─ primary-50:  #eff6ff (very light backgrounds)
├─ primary-100: #dbeafe (icon backgrounds)
├─ primary-200: #bfdbfe (connecting lines)
├─ primary-600: #2563eb ★ MAIN BRAND COLOR ★
├─ primary-700: #1d4ed8 (hover states)
└─ primary-800: #1e40af (dark accents)

Neutral Grays:
├─ gray-50:  #f9fafb (subtle backgrounds)
├─ gray-600: #4b5563 (body text)
└─ gray-900: #111827 (headings)

Background Colors:
├─ White:     #ffffff (cards, HowItWorks section)
└─ Blue-50:   #eff6ff or #f0f9ff (Features section)
```

---

## Icon Reference

### HowItWorks Icons (in order):

1. **WhatsApp Icon** (Step 1)
   - Type: Brand icon, filled
   - Size: w-10 h-10 md:w-12 md:h-12
   - Color: white
   - Style: WhatsApp logo path

2. **AI Brain/Lightbulb Icon** (Step 2)
   - Type: Heroicons outline
   - Size: w-10 h-10 md:w-12 md:h-12
   - Color: white
   - Path: Lightbulb with idea representation

3. **PDF Document Icon** (Step 3)
   - Type: Heroicons outline
   - Size: w-10 h-10 md:w-12 md:h-12
   - Color: white
   - Path: Document with text lines

### Features Icons (in order):

1. **Chat Bubble** - WhatsApp-Integration
2. **Document with Sparkles** - KI-Bautagebuch
3. **Folder** - Projekt-Zuordnung
4. **Camera** - Bild-Dokumentation
5. **Magnifying Glass** - Intelligente Suche
6. **Microphone** - Sprachnachrichten-Text

All feature icons:
- Type: Heroicons outline
- Size: w-6 h-6 md:w-7 md:h-7
- Color: primary-600
- Stroke width: 2

---

## Animation Specifications

### HowItWorks Animations

```css
/* Fade in from bottom */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered delays */
Step 1: 0.1s delay
Step 2: 0.2s delay
Step 3: 0.3s delay
```

### Features Animations

```css
/* Fade in from bottom with more travel */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card hover effect */
hover: {
  transform: translateY(-4px);
  shadow: shadow-md;
}

/* Staggered delays */
Card 1: 0.1s delay
Card 2: 0.15s delay
Card 3: 0.2s delay
Card 4: 0.25s delay
Card 5: 0.3s delay
Card 6: 0.35s delay
```

---

## Responsive Breakpoints

| Breakpoint | Size      | HowItWorks Layout | Features Layout |
|------------|-----------|-------------------|-----------------|
| xs         | < 640px   | 1 column          | 1 column        |
| sm         | 640px     | 1 column          | 1 column        |
| md         | 768px     | 1 column          | 2 columns       |
| lg         | 1024px    | 3 columns         | 3 columns       |
| xl         | 1280px    | 3 columns         | 3 columns       |
| 2xl        | 1536px    | 3 columns         | 3 columns       |

---

## Accessibility Checklist

✅ Semantic HTML (section, h2, h3)
✅ Proper heading hierarchy
✅ ARIA labels for decorative elements
✅ High contrast ratios (WCAG AA compliant)
✅ Keyboard navigable
✅ Screen reader friendly
✅ Responsive touch targets (min 44x44px)
✅ Alt text for meaningful icons
✅ Focus states visible

---

## German Content Summary

### HowItWorks (3 steps):
1. **WhatsApp verbinden** - 5 Minuten Setup, kein App-Wechsel
2. **KI übernimmt** - Automatische Sortierung und Zusammenfassung
3. **Dokumentation abrufen** - DSGVO-konform, gerichtsfest, PDF

### Features (6 features):
1. **WhatsApp-Integration** - DSGVO-konform, deutsche Server
2. **KI-Bautagebuch** - HOAI-konform, täglich automatisch
3. **Projekt-Zuordnung** - Nach Projekt, nicht Person
4. **Bild-Dokumentation** - GPS + Zeitstempel, gerichtsfest
5. **Intelligente Suche** - Sekunden-schnelle Suche
6. **Sprachnachrichten-Text** - Deutsche Transkription

---

## File Structure

```
/Users/anskhalid/CascadeProjects/saas-alex-becker/webpage/
├── src/
│   └── components/
│       ├── HowItWorks.astro        (6.0 KB)
│       ├── Features.astro          (6.1 KB)
│       └── README.md               (3.2 KB)
├── INTEGRATION_GUIDE.md
└── COMPONENT_SPECIFICATION.md      (this file)
```

Both components are production-ready and can be integrated into any Astro project with Tailwind CSS configured.
