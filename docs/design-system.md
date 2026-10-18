# Marriott Hospital: Design System & Visual Identity Tokens

## 1. Brand Identity & Creative Direction

The brand identity of **Marriott Hospital** is centered entirely on clinical precision, compassionate care, patient safety, and institutional trust. 

> **Critical Brand Rule:**
> Marriott Hospital is an independent healthcare institution. Under no circumstances should hotel motifs, lodging stars, room service graphics, or Marriott Bonvoy elements be utilized.

---

## 2. Color System & Design Tokens

### 2.1 Primary & Interactive Palette
- **Deep Medical Navy (Primary Brand):**
  - `brand-navy-950`: `#07152B` (Top utility, footer background)
  - `brand-navy-900`: `#0A192F` (Primary hero background, high-contrast dark sections)
  - `brand-navy-800`: `#0F2C59` (Primary branding headers, navbar text)
  - `brand-navy-700`: `#1A365D` (Dark cards, active states)
- **Clinical Blue (Interactive Secondary):**
  - `brand-blue-600`: `#0284C7` (Interactive buttons, links, primary highlights)
  - `brand-blue-500`: `#0EA5E9` (Hover states, badges, icon accents)
  - `brand-blue-100`: `#E0F2FE` (Pill backgrounds, icon badges)
  - `brand-blue-50`: `#F0F9FF` (Subtle card highlights)
- **Healthcare Teal (Supporting Medical Accent):**
  - `brand-teal-600`: `#0D9488` (Wellness, health packages, positive clinical accents)
  - `brand-teal-500`: `#14B8A6` (Secondary icons, checkmark indicators)
  - `brand-teal-50`: `#F0FDFA` (Light diagnostic card backgrounds)
- **Warm Coral / Crimson (Emergency & Alert Accents):**
  - `brand-accent-600`: `#DC2626` (Emergency 24/7 hotline, critical alerts)
  - `brand-accent-500`: `#EF4444` (Emergency badges, urgent notifications)

### 2.2 Neutral & Surface Palette
- `surface-white`: `#FFFFFF` (Primary page background, modal surfaces)
- `surface-slate-50`: `#F8FAFC` (Alternating section backgrounds, light panels)
- `surface-slate-100`: `#F1F5F9` (Card borders, dividers, disabled inputs)
- `text-slate-900`: `#0F172A` (Primary titles and high-emphasis headlines)
- `text-slate-800`: `#1E293B` (Primary body text, card headers)
- `text-slate-600`: `#475569` (Secondary explanatory copy, captions)
- `text-slate-400`: `#94A3B8` (Muted labels, placeholders)

### 2.3 Semantic Status Palette
- **Success:** `#16A34A` / bg `#F0FDF4` (Appointment confirmed, form sent)
- **Warning:** `#D97706` / bg `#FFFBEB` (Preparation warnings, fasting notices)
- **Error:** `#DC2626` / bg `#FEF2F2` (Validation failure, emergency notices)
- **Information:** `#0284C7` / bg `#F0F9FF` (Clinical guidance, visitor notes)

---

## 3. Typography & Hierarchy

### 3.1 Font Family Pairings
- **Headings & Display:** `Plus Jakarta Sans`, `Inter`, system-ui, sans-serif
  - Crisp, modern, authoritative geometry with humanistic touches.
- **Body & Data:** `Inter`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
  - High legibility at small sizes, optimal x-height for clinical tables and forms.

### 3.2 Type Scale
| Level | Font Size | Line Height | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| `Display 1` | 44px – 56px | 1.15 | Bold (700) | -0.02em | Homepage Hero Headline |
| `H1` | 32px – 40px | 1.2 | Bold (700) | -0.015em | Page Titles, Category Heroes |
| `H2` | 24px – 30px | 1.25 | SemiBold (600) | -0.01em | Major Section Headings |
| `H3` | 18px – 22px | 1.35 | SemiBold (600) | 0 | Card Titles, Modal Titles |
| `Body Large`| 16px – 18px | 1.6 | Regular (400) | 0 | Lead paragraphs, Hero subtitles |
| `Body Base` | 14px – 15px | 1.55 | Regular (400) | 0 | General copy, Doctor bios, Articles |
| `Caption` | 12px – 13px | 1.4 | Medium (500) | +0.01em | Badges, Timestamps, Table headers |
| `Micro` | 11px | 1.3 | SemiBold (600) | +0.02em | Utility bar tags, status indicators |

---

## 4. Spacing, Grid & Container System

- **Max Content Container:** `max-w-7xl` (1280px) centered with `px-4 sm:px-6 lg:px-8`
- **Breakpoints:**
  - `xs`: 320px – 479px (Mobile compact)
  - `sm`: 480px – 767px (Mobile landscape)
  - `md`: 768px – 1023px (Tablet portrait)
  - `lg`: 1024px – 1279px (Desktop)
  - `xl`: 1280px – 1535px (Large Desktop)
  - `2xl`: 1536px+ (Ultra-wide screens)

---

## 5. UI Components & Interaction States

### 5.1 Buttons
- **Primary CTA:** Deep Medical Navy or Clinical Blue background, white bold text, rounded-lg or rounded-full, subtle shadow, scale-up on hover (scale 1.02), visible focus ring (2px blue-500 offset-2).
- **Secondary CTA:** White background with slate-200 border, text-slate-800, hover:bg-slate-50.
- **Emergency Action:** Red/Coral background (`bg-red-600 hover:bg-red-700`), white text, pulsing alert ring on high-urgency call buttons.

### 5.2 Cards
- Clean white background (`bg-white`), subtle 1px border (`border-slate-100` or `border-slate-200`), rounded-xl (`rounded-xl` or `rounded-2xl`), smooth shadow (`shadow-sm hover:shadow-md transition-all duration-200`).

### 5.3 Forms
- Floating or clear top labels, high contrast borders, accessible focus outlines (`focus:ring-2 focus:ring-sky-500 focus:border-sky-500`), descriptive inline error messages with `aria-live` regions.
