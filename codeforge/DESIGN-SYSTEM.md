# CodeForge Design System

Source of truth: https://codeforge.themerex.net/ (Home 1, "Online Marketing"). The reference was inspected and measured with computed styles and element boxes in a browser at 1440×900, 768×1024 and 375×812 on 2026-10-24.

All values live in [`css/tokens.css`](css/tokens.css). Components in [`css/components.css`](css/components.css) and page layout in [`css/home.css`](css/home.css) only read tokens. The live style guide is [`design-system.html`](design-system.html).

**Legend:** **V** = verified (read from the reference's computed CSS or measured boxes) · **S** = sampled (from pixels of reference images) · **A** = approximation or inference

---

## 1. Color

| Token | Value | Role | |
|---|---|---|---|
| `--color-primary` | `#00ADFF` | Main buttons, menu hover, Gold price, newsletter arrow | V |
| `--color-primary-hover` | `#069EE6` | Primary hover (theme `text_hover`) | V (token) · A (applied to button hover) |
| `--color-secondary` | `#3441BE` | Subscribe, View All Articles, overlap card | V |
| `--color-secondary-hover` | `#2430A2` | Secondary hover (theme `text_hover2`) | V (token) · A (applied) |
| `--color-accent` | `#86AE6E` | Theme `text_link3`, not used on Home 1 | V |
| `--color-heading` / `--color-surface-dark` | `#17242B` | Headings, menu, dropdown panel, date badge | V |
| `--color-text` | `#929393` | Body copy | V |
| `--color-muted` | `#ACACAC` | Meta, "Per/Month", step numbers | V |
| `--color-border` | `#E5E7E8` | Dividers, step separators | V |
| `--color-background` | `#FDFDFD` | Body | V |
| `--color-background-alt` | `#F7FAFC` | Scheme background | V |
| `--color-footer-bg` | `#0D0E0F` | Footer | V |
| `--color-footer-input-bg` | `#1D1E21` | Footer email field | V |
| `--color-footer-text` / headings | `#929495` / `#F9F9F9` | Footer copy / column titles | V |
| `--gradient-hero`, `--gradient-soft-a/b` | sky `#D0E9FC`, ice `#ECFAFE`, lilac `#E6DBF9`, blush `#FCE8F4` | Hero, Solutions and Blog section backgrounds | S (the original uses 1920px raster images; these are CSS mesh gradients built from sampled pixels) |
| Button shadows | `0 7px 25px rgba(0,173,255,.2)` / `rgba(52,65,190,.2)` | Primary / secondary | V |

No colors were added beyond what the theme defines. The only addition is the focus outline, which reuses primary blue.

## 2. Typography

The fonts are **Quicksand** (headings, menu, buttons, eyebrows; 400–700) and **DM Sans** (body, meta; 400/500/700), both from Google Fonts. The theme also loads Lora, but Home 1 doesn't use it. All V.

| Style | Family / weight | 1440 | 768 | 375 | Line height | Tracking |
|---|---|---|---|---|---|---|
| Hero h1 | Quicksand 700 | 80px | 38px | 30px | 0.95 → 0.95 → 1.13 | −0.03em, normal on mobile |
| Section title | Quicksand 700 | 57px | 38px | 26px | 1 → 1.1 → 1.15 | −0.03em, normal on mobile |
| Overlap-card title | Quicksand 700 | 35px | ~26px | ~20–24px | 1 | 0.1px |
| Feature title | Quicksand 700 | 24px | 24px | 24px (ref 23) | 1.2 | — |
| Price title / price | Quicksand 700 | 24 / 57px | 21 / 37px (ref 20 / 39) | 20 / 30px | 1.25 | — |
| Blog card title | Quicksand 700 | 26px | 20px | 18px | 1.2 | 0.1px |
| Award title + year | Quicksand 700 | 19px | 19px (ref 17) | 15px | 1 | 0.1px |
| Eyebrow | Quicksand 700, uppercase | 14px | 14px | 14px | 18px | 0.13em (1.82px) |
| Nav / dropdown | Quicksand 700 / DM Sans 400 | 15px | — | — | 1.5 | — |
| Button | Quicksand 700 | 15px | 15px | 14px | 21px | 0.1px |
| Body | DM Sans 400 | 17px | 17px | 16px | 1.64 → 1.52 | 0.1px |
| Hero lead | DM Sans 400 | 19px | 18px | 17px | ~1.5 → 1.4 | — |
| Meta | DM Sans 700 / 400 | 13 / 14px | — | — | 1 | uppercase category |
| Blog date day | Quicksand 700 | 35px | — | — | 1 | — |

All V except where the table says "ref" (shown next to the value used) and the overlap-card size on mobile (A).

## 3. Layout and spacing

| Token | 1440 | 768 | 375 | |
|---|---|---|---|---|
| Container width | 1290px | fluid | fluid | V |
| `--container-gutter` | 30–65px (header 65px) | 30px | 20px | V |
| `--header-height` | 117px | 101px | 61px | V |
| `--section-pad` (spacer rows) | 120px | 80px | 54px | V |
| `--block-gap` (heading → grid → button) | 45px | 30px | 20px | V |
| `--grid-gap` | 30px | 30px | 20px for stacked cards | V |
| Card padding | price 50px 20px · blog 46px 38px 43px | price 45px · blog 30px 25px 25px | price 26px 20px | V (measured), A (rounded) |
| Button | 55px tall, 45px padding | same | 49px tall, 37px padding | V |
| Radius | pill 30px · card 15px · media 19px (hero photo top-right only) | | | V |
| Shadows | xs `0 3px 20px rgba(23,36,43,.03)` · sm `0 3px 25px rgba(0,0,0,.05)` · icon `0 6px 30px rgba(0,0,0,.03)` · lg `0 23px 90px rgba(0,0,0,.05)` | | | V |
| Image ratios | feature 517×638 · blog 890:664 · portfolio 1920:1709 and 1495:1920 (all portrait ≤1023px) | | | V |

**Breakpoints:** 1279 (desktop nav collapses), 1023 (tablet), 767 (mobile), 479. All V; these are the theme's own media queries.

**Wide screens (above 1440):** content stays 1290px wide and type sizes stay the same. Only the hero scales with the viewport (V at 1440 and 1920):

| Hero part | 1440 | 1920 |
|---|---|---|
| Section height | 854px | 963px |
| Photo column (39% of width) | 556px | 743px |
| Text column (47.3% of width, 19.2% left padding) | text at x685 | text at x916 |
| Headline top | y252 | y311 |
| Email field | 345px | 529px |
| Statistics card (photo width − 60px, ratio 496:289) | 496×289 | 683×398 |

The social icons always sit 50px above the bottom of the hero. The statistics card's contents scale with it through container-query units.

## 4. Components

| Component | Class | Notes |
|---|---|---|
| Header + nav | `.site-header`, `.nav`, `.dropdown` | Transparent over the hero, white and sticky after 300px of scroll. Current item has a 2px underline. Hover is primary blue. Dropdowns are dark, 225px wide with a 15px radius, and nest. |
| Mobile menu | `.mobile-menu` | Full-screen dark panel built from the desktop nav, with toggle buttons for sub-menus. |
| Side panel | `.side-panel` | Opened by the left burger. Socials plus contact details. Hidden on mobile, as on the reference. |
| Buttons | `.btn--primary`, `.btn--secondary`, `.link-arrow`, `.link-underline` | Pill buttons with a colored glow. Text links have a sliding arrow or an underline. |
| Section heading | `.eyebrow` + `.t-section` | Eyebrow → title gap is 21 / 9 / 8px (V). |
| Hero | `.hero`, `.hero__media`, `.stats-card`, `.subscribe`, `.socials` | Statistics card is rebuilt in HTML; the reference uses a static image. |
| Feature card | `.feature` | 119px icon circle (102px on mobile) with a soft shadow. Icon scales to 1.1 on hover. |
| Media + overlap card | `.media-overlap` | Indigo card overlapping the photo's bottom-right edge. |
| Process steps | `.steps` | Numbered list separated by border lines. |
| Logo strip | `.logos` | 6 / 3 / 2 columns. |
| Portfolio carousel | `.carousel`, `.project` | 3 / 3 / 1 per view, 30 / 60 / 60px gap. Slides alternate landscape and portrait on desktop and are all portrait below 1024px. Loops, autoplays every 7s with a 600ms slide, and supports drag. |
| Price card | `.price-card` | Gold price in primary blue. |
| Award item | `.award` | Title and year on one line, category, then description. |
| Blog card | `.post-card` | Dark date badge overlapping the image; category and comments meta. |
| CTA modal | `.modal`, `.cta-modal` | Newsletter popup shown on load. |
| Footer | `.site-footer` | 4 columns on desktop and tablet; on mobile Office, then Links + Socials side by side, then Newsletter. |

Testimonials, a team section and counters don't exist on the reference, so none were built.

## 5. Validation results

The positions of the section headings were measured on the reference and on this build at the same viewport widths. The numbers below are document y-coordinates in px.

| Element | 1440 ref / ours | 768 ref / ours | 375 ref / ours |
|---|---|---|---|
| Hero h1 | 252 / 252 | 180 / 180 | 464 / 464 |
| About title | 1013 / 1012 | 791 / 791 | 944 / 944 |
| Digital title | 1753 / 1757 | 1601 / 1607 | 2401 / 2414 |
| Solutions title | 2770 / 2767 | 2447 / 2453 | 3140 / 3157 |
| Pricing title | 3920 / 3919 | 3203 / 3229 | 4057 / 4072 |
| Awards title | 4580 / 4573 | 3747 / 3764 | 5003 / 5025 |
| Blog title | 5345 / 5341 | 4454 / 4500 | 5949 / 5988 |
| Footer "Office" | 6280 / 6275 | 5135 / 5176 | 7348 / 7393 |
| Page height | 6682 / 6682 | 5511 / 5545 | 7998 / 8062 |

**How close it gets:**
- Within 7px at 1440 and within 46px at 768 and 375 (under 1% of page height).
- This is a close match, but not pixel-perfect. The replacement images and text wrapping differ from the reference.
- There is no horizontal overflow at 375, 480, 768, 1024, 1280 or 1440px.

**Clean loads:**
- No console errors and no failed requests after a favicon was added.
- The dev server log shows no errors.

## 6. Remaining differences and elements that couldn't be used

- **Photos:** the originals are licensed ThemeREX stock, so they're replaced with free-licensed Unsplash images of similar subject, crop and proportion. The reference's hero photo is a background image (`image-001.jpg`); here it's an `<img>`.
- **Client logos:** the reference shows third-party brand logos. These are made-up wordmarks in matching gray.
- **Statistics card:** a static picture on the reference, rebuilt here as live HTML. Its proportions are close, but the bar shapes and type are not identical.
- **Feature icons:** redrawn as SVGs in the same indigo and sky-blue two-tone style. They are not the original artwork.
- **Section backgrounds:** CSS gradients built from sampled pixels stand in for the original raster images. The soft blur shapes differ slightly.
- **Left out on purpose:** the demo-store side tabs, the "Chat with us!" bubble and the cursor's exact "drag" artwork (the reference uses a custom HTML helper that wasn't inspected).
- **Added for accessibility:** a small pause/play button on the carousel (WCAG 2.2.2), visible focus outlines, and the newsletter popup showing only once per session instead of on every load.
- **Not verified:**
  - **Button hovers:** the filled-button hover colors are inferred from theme tokens.
  - **Side panel:** its layout wasn't inspected on the reference.
  - **1024–1279px:** this range isn't a reference breakpoint; the hero text padding there is a judgment call.
- **Contrast:** body text `#929393` on `#FDFDFD` is about 3.1:1, below WCAG AA for small text. It's kept to match the reference.
