# CodeForge homepage recreation

Static recreation of https://codeforge.themerex.net/ (Home 1). Plain HTML, CSS custom properties and one vanilla JS file. No framework, build step, backend or database.

## Run

Any static server works. The icon sprite is loaded by URL, so open the site over `http://`, not `file://`.

```bash
npx http-server@14.1.1 . -p 5173
```

## Structure

| Path | Role |
|---|---|
| `css/tokens.css` | All design tokens: color, type, spacing, radius, shadow. The only place raw values live. |
| `css/components.css` | Reusable components (header, nav, buttons, cards, footer…). Uses tokens only. |
| `css/home.css` | Homepage composition: section spacing and positions measured from the reference. |
| `js/main.js` | Sticky header, overlays, dropdown state, mobile menu, carousel, forms, scroll reveal, cursor. About 8 KB, loaded with `defer`. |
| `img/icons.svg` | Shared SVG sprite, used via `<use href="img/icons.svg#id">`. |
| `img/favicon.svg` | Favicon (the logo mark). |
| `index.html` | Homepage. |
| `design-system.html` | Style guide that shows every token and component. |
| `DESIGN-SYSTEM.md` | Verified values, approximations, validation measurements and remaining differences. |

## Implementation notes

- **Layout**: CSS Grid for page and card layouts, Flexbox inside components. Breakpoints are 1279, 1023, 767 and 479px, the same as the reference.
- **Images**: Unsplash photos (free license) are served with `auto=format` (WebP/AVIF), plus `srcset`/`sizes`, explicit `width`/`height` and `loading="lazy"`. The hero image is preloaded with `fetchpriority="high"`.
- **Fonts**: Loaded with `<link>` and preconnect, not CSS `@import`.
- **Accessibility**:
  - Skip link, one `h1`, and headings in order.
  - Every input has a label.
  - Overlays are `inert` while closed. When open they trap focus, close on Escape and return focus to the button that opened them.
  - Dropdowns expose `aria-expanded`, open on hover or focus, and close on Escape.
  - Mobile sub-menus use real toggle buttons.
  - The carousel has slide labels and pauses on hover or focus. It has no pagination dots, matching the reference. It does have a pause/play button (WCAG 2.2.2), which the reference doesn't.
  - Scroll reveal only hides content when JS is running. Reduced motion is respected throughout.
- **Forms**: Front end only. They validate and then show a status message; nothing is sent anywhere. Connect them to a mailing-list service if needed.

## Known deviations from the reference

- Photos are replacements (the originals are licensed ThemeREX stock). Client logos are made-up wordmarks.
- The demo-store side tabs and the chat bubble are left out.
- Body text `#929393` on white is about 3.1:1 contrast, below WCAG AA for small text. It's kept because it's the reference color. Darken `--color-text` in `tokens.css` if you need AA.
