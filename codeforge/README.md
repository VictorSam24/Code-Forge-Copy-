# Apar Innosys website

Static site for Apar Innosys. It has two pages, the homepage and Industrial IoT. Built with plain HTML, CSS custom properties and one vanilla JS file. There's no framework, build step, backend or database.

All visible copy comes word for word from the client document *Apar Content - Headline Options* (DOCX/PDF). If you change copy, change it there first.

## Run

Any static server works. The icon sprite is loaded by URL, so open the site over `http://`, not `file://`.

```bash
npx http-server@14.1.1 . -p 5173
```

## Structure

| Path | Role |
|---|---|
| `css/tokens.css` | All design tokens: color, type, spacing, radius, shadow. The only place raw values live. |
| `css/components.css` | Reusable components: header, nav, buttons, stats, cards, numbered list, steps, chips, tiles, logo slots, banner, FAQ, CTA band, footer. |
| `css/home.css` | Homepage composition. |
| `css/page.css` | Solution page composition (Industrial IoT). |
| `js/main.js` | Header shadow on scroll, mobile menu (focus trap, Escape), scroll reveal. Loaded with `defer`. |
| `img/icons.svg` | Shared SVG sprite, used via `<use href="img/icons.svg#id">`. |
| `img/apar-logo.*` | Client logo with a transparent background, WebP + PNG. Used on light surfaces (header). |
| `img/apar-logo-light.*` | The same logo with a white wordmark, for navy surfaces (footer, mobile menu). |
| `img/apar-logo-original.jpg` | The logo as the client supplied it (white background). The other logo files are made from it. |
| `img/favicon.png`, `img/apple-touch-icon.png` | The orange mark from the logo, cropped square. |
| `img/hero-camera-grid-*` | Homepage hero (image 1 from the client document), WebP + JPEG at 960/1600px. |
| `img/camera-industrial-site-*` | Industrial IoT hero and homepage banner (image 2 from the client document). |
| `index.html` | Homepage. |
| `industrial-iot.html` | Industrial IoT page. |
| `design-system.html` | Style guide showing tokens and components. |
| `DESIGN-SYSTEM.md` | Token and component reference, and content decisions. |

## Content decisions

- **Placeholder still to fill:** client logos are "to be provided". The homepage shows six empty dashed slots. Replace each empty `<li>` in `.logos` with an `<img>`.
- **Homepage banner:** "The Eyes Your Operations Need." is the third headline option. It is shown as a banner with no extra copy, because the document gives no body text for it.
- **Contact:** the content has no contact page or form. "Talk to Us" / "Get in Touch" go to the CTA section, and "Contact Us" goes to the footer office emails (`mailto:` links).
- **Unlinked pages:** Privacy Policy and Terms link to `#` until those pages exist. The other four solutions (E-Surveillance, Vision AI, Smart Energy Management, CCTV Repair & Maintenance) have no pages yet, so only the Industrial IoT card links out.
- **Left out on purpose:** the client's positioning answer (Q3), the "Image Idea" notes and the reviewer comments from the document.

## Accessibility

- Skip link, one `h1` per page, and headings in order.
- Text colors meet WCAG AA on their backgrounds.
- The mobile menu is `inert` while closed. When open it traps focus, closes on Escape and returns focus to the menu button.
- The FAQ uses native `<details>`/`<summary>`.
- Scroll reveal only hides content while JS is running, and reduced motion turns off all animation.
