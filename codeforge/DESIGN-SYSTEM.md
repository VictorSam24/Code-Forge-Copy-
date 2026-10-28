# Apar Innosys design system

The direction is calm, light and clear. The client brief asks to steer away from the usual dark, negative surveillance imagery, and to show complete, unbroken coverage instead. So surfaces stay light, navy is kept for the CTA band and footer, and a single green accent echoes the "LIVE" status in the hero image.

See `design-system.html` for a rendered view of everything below.

## Color (`css/tokens.css`)

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--color-primary` | `#0B63CE` | Buttons, links, eyebrow labels | 5.7:1 on white |
| `--color-primary-hover` | `#0950A8` | Hover | 7.7:1 on white |
| `--color-accent` | `#17A34A` | "Live" dots and check marks only, never text | — |
| `--color-heading` | `#0E2236` | Headings; also `--color-surface-dark` | 16:1 on white |
| `--color-text` | `#46566A` | Body text | 7.5:1 on white |
| `--color-muted` | `#5E6D7F` | Labels, meta | 5.3:1 on white |
| `--color-on-dark-text` | `#B9C6D4` | Text on navy | 9.3:1 on navy |
| `--color-background-alt` | `#F4F7FA` | Alternating sections | — |
| `--color-border` | `#DDE4EC` | Card and list borders | — |

## Typography

- **Headings:** Manrope 700/800, slight negative tracking.
- **Body:** Inter 400/500/600.
- Fluid sizes use `clamp()`: hero 40→72px, page title 36→60px, section 28→46px, card 18→21px, body 16px.

## Layout

- Container is 1200px with a 16–32px gutter. Section padding is 64→112px.
- Breakpoints: 1023px (nav collapses to the menu button, grids go to 2 columns) and 767px (single column).

## Components (`css/components.css`)

| Class | Used for |
|---|---|
| `.eyebrow`, `.eyebrow--live` | Section labels ("What We Do", "Coverage"…); `--live` adds the pulsing green dot. |
| `.btn--primary` / `--ghost` / `--light` / `--ghost-light` | Primary and secondary actions on light and dark backgrounds. |
| `.stats` | Stats bar (4 → 2 columns). |
| `.card`, `.card__num`, `.card__meta` | Solution and coverage cards. A link in `.card__title` makes the whole card clickable. |
| `.num-list` | Numbered differentiators. |
| `.steps` | Horizontal 4-step timeline (How It Works). |
| `.check-list` | Outcomes list. |
| `.chips`, `.tiles` | Industry lists (compact and large). |
| `.logos` | Dashed placeholder slots for client logos. |
| `.banner` | Headline over a photo, with a left-to-right navy gradient for legibility. |
| `.faq` | Native `<details>` accordion. |
| `.cta-band` | Navy call-to-action block. |
| `.media-frame` | Rounded, shadowed 16:9 image. |

## Logo

The client supplied the logo as a JPEG on white (`img/apar-logo-original.jpg`). It is turned into:

- `apar-logo.{webp,png}`: transparent background, 414×120, for light surfaces.
- `apar-logo-light.{webp,png}`: the same file with the blue wordmark made white, for navy surfaces.
- `favicon.png` (64px) and `apple-touch-icon.png` (180px): the orange mark only.

`.logo img` is sized by `--logo-height`: 40px, or 34px below 768px. The brand colours in the logo are orange `#FF5A00` and blue `#003DA8`. This site keeps its own blue/green palette on purpose, and the logo sits alongside it.

## Images

Both images come from the client document (1672×941). They're served as WebP with a JPEG fallback at 960 and 1600px wide, with `srcset`/`sizes`. Each hero image is preloaded with `fetchpriority="high"`; the banner is lazy-loaded.

- `hero-camera-grid`: homepage hero ("grid of camera feeds — all live, all clear").
- `camera-industrial-site`: Industrial IoT hero, where the document places it. It's also used for the homepage "The Eyes Your Operations Need." banner, which it matches ("close-up of a camera lens … industrial site slightly out of focus behind it").
