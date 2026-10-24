# CodeForge — Phase 1 Inspection Report

Source: https://codeforge.themerex.net/ (Home 1 — "Online Marketing"), inspected live on 2026-10-24 at 1440×900, 768×1024 and 375×812.
Platform: WordPress + Elementor + ThemeREX `trx_addons`, theme `codeforge`, skin `default`.

Legend: **[V]** = verified from computed CSS/DOM · **[S]** = read from screenshots · **[I]** = inferred, not directly verified.

---

## 1. Page structure (exact order)

| # | Section | Height @1440 | Background | Layout |
|---|---------|-------------|------------|--------|
| 0 | Header (over hero, transparent) | 117px | transparent → white when sticky | Burger · logo · nav · search · burger · "Let's Talk" |
| 1 | Hero | 854px | `h1-bg-1.jpg` (soft blue/lilac gradient image) | 2 cols: photo + stats card left (flush to viewport edge) / text + subscribe form right |
| — | Spacer | 120px | — | — |
| 2 | About Us intro | 198px | white | Centered subtitle + H1 |
| 3 | Features (icon boxes) | 462px | white | 4 icon boxes in a row + centered "More Features" button |
| 4 | Digital Marketing split | 638px | white | Image left (with overlapping blue card) / text right with 2 numbered items + button |
| — | Spacer 120 + Logo strip 99 + spacer 120 | | white | 6 grayscale client logos in a row |
| 5 | Perfect Solutions + portfolio slider | 1125px | `h1-bg-2-1.jpg` (pale blue/lilac gradient) | Row: subtitle+H1 left / 2 paragraphs + "Read More" right; then Swiper carousel, 3 visible, 6 slides, staggered heights |
| — | Spacer | 120px | | |
| 6 | Pricing | 540px | white | Centered heading + 3 price cards |
| — | Spacer | 120px | | |
| 7 | Achievements / Awards | 526px | white | Left: subtitle + H1 · Right: paragraph + "View More →", divider, 2×2 grid of awards |
| — | Spacer | 120px | | |
| 8 | Blog | 968px | `h1-bg-3.jpg` (pale gradient) | Centered heading, 3 post cards, centered "View All Articles" |
| 9 | Footer | ~530px | `#0D0E0F` | 4 cols: Office · Links · Socials · Newsletter; divider; copyright row |

Sections that do **not** exist on this page: testimonials, team, statistics/counters, FAQ, video. Do not add them.

Global floating elements:
- Right edge: 3 stacked 48px blue (`#00ADFF`) square tabs (cart / demos / layouts). These are ThemeREX demo-store widgets, not part of the theme design **[V]** — optional in recreation.
- Bottom-right: "Chat with us!" white pill + 46px green round chat button **[S]** (demo widget).
- Bottom-right: dark round "back to top" button **[S]**.
- Newsletter popup (`adp-popup`) opens on load: centered modal ~65% width, left half 3D paper-flower image on peach, right half white with "Subscribe for the updates!" H2, underline email input, blue pill button, close × top-right **[V/S]**.
- Custom cursor follower dot (`trx_addons_mouse_helper`) **[V]**.

---

## 2. Design tokens

### Colors **[V]** (theme scheme `default`)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#F7FAFC` | Scheme bg |
| `--bg-body` | `#FDFDFD` | Body bg (computed) |
| `--alter-bg` | `#FDFDFD` / hover `#FFFFFF` | Cards |
| `--border` | `#E5E7E8` | Dividers, inputs |
| `--text` | `#929393` | Body copy |
| `--text-light` | `#ACACAC` | Meta, dates |
| `--text-dark` | `#17242B` | Headings, menu |
| `--link` | `#00ADFF` | Primary (sky blue) |
| `--link-hover` | `#069EE6` | |
| `--link2` | `#3441BE` | Secondary (indigo) — Subscribe, View All Articles, overlap card |
| `--link2-hover` | `#2430A2` | |
| `--link3` | `#86AE6E` | Tertiary green (rare) |
| `--link3-hover` | `#749B5D` | |
| `--extra-bg` | `#17242B` | Dropdown menus |
| `--footer-bg` | `#0D0E0F` | Footer |
| `--footer-input-bg` | `#1D1E21` | Footer email input |
| `--footer-text` | `#929495` / headings `#F9F9F9` | |

### Typography **[V]**
Google Fonts: `DM Sans` 400/500/700 (+italics), `Quicksand` 300–700, `Lora` (loaded, used only as "other" font — not visible on home).

| Role | Family | Size @1440 | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Body `p` | DM Sans | 17px (1rem) | 400 | 1.64em (27.88px) | 0.1px |
| Hero H1 | Quicksand | 80px | 700 | 76px (0.95) | -2.4px (-0.03em) |
| Section title (H1 `sc_item_title`) | Quicksand | ~57px (3.352em) | 700 | 1em | -0.03em |
| H2 token | Quicksand | 2.764em | 700 | 1.021em | — |
| H3 overlay card | Quicksand | 35px | 700 | 1em | |
| H4 icon-box title | Quicksand | 24px | 700 | 1.2 | |
| H5 numbered items | Quicksand | 24px | 700 | 1 | |
| Blog card title (H5) | Quicksand | 26px | 700 | 1.2 | |
| H6 awards | Quicksand | 19px | 700 | 1 | |
| Subtitle (eyebrow) | Quicksand | 14px | 700 | 18px | 1.82px (0.13em), UPPERCASE, `#17242B` |
| Menu | Quicksand | 15px | 700 | 1.5em | |
| Dropdown links | DM Sans | 15px | 400 | | white on `#17242B` |
| Buttons | Quicksand | 15px | 700 | 21px | |
| Icon-box description | DM Sans | 16px | 400 | 1.6 | |
| Meta / info | DM Sans | 14px (blog meta 12px, 700, uppercase) | | | |

Responsive section titles: 57px desktop → 38px tablet (768) → 26–30px mobile (375) **[V]**.

### Spacing & layout **[V]**
- Content width `1290px`; grid gap `30px`; Elementor gaps 10/20/30/40/60.
- Vertical rhythm: dedicated 120px spacer sections between blocks (≈ `--sc-space-large` 6.67rem).
- Breakpoints: 1679, 1439, 1279, 1023/1024, 767/768, 479.

### Radii & shadows **[V]**
- Buttons/inputs: `30px` (pill).
- Cards & images: `15px` (woman photo: 19px).
- Primary button shadow: `0 7px 25px rgba(0,173,255,.2)`; indigo variant `rgba(52,65,190,.2)`.
- Input shadow: `0 3px 25px rgba(0,0,0,.05)`.
- Price card: `0 23px 90px rgba(0,0,0,.05)`.
- Blog card: `0 3px 20px rgba(23,36,43,.03)`.
- Dropdown: `1px 1px 2px rgba(0,0,0,.2)`, radius 15px, padding 15px 0, width 225px.

---

## 3. Components

**Header** — 117px tall, transparent over hero. Left: white 40px round burger button (opens side panel) + logo (`logo-1-retina.png` 186×34, rocket icon + "CodeForge" wordmark). Right: nav (Home · Pages · Portfolio · Blog · Contacts), search icon, second burger, "Let's Talk" button (padding 13px 40px). Current item: dark text with 2px dark underline (`::after`, bottom -2px). Hover: `#00ADFF` **[V]**. Becomes fixed on scroll with white bg **[V]**.

**Navigation tree [V]**
- Home → Online Marketing (current), SEO Agency, Creative Agency, Digital Agency
- Pages → About (Agency/Personal), Services (Agency/Personal), Our Team, FAQ, Pricing, Tools (Shortcodes, Typography, 404, Service Plus, Newsletter Popup)
- Portfolio → Portfolio 1–6, Single Portfolio (Style 1–5)
- Blog → Blog Styles 1 (Standard, List, Masonry 2/3/4), Blog Styles 2 (Grid 3/4, Portfolio 3/4), Single Post (Style 1–3, Video, Audio, With Sidebar)
- Contacts

**Buttons [V]**
- Primary: `#00ADFF` bg, white, pill, padding 17px 45px (h 55px), blue glow shadow, 0.3s transition. Hover → `#069EE6` **[I]**.
- Secondary: `#3441BE` bg, same shape; hover `#2430A2` **[I]**.
- Simple link ("View More", "Read More"): 17px dark text, arrow icon that slides in from left on hover; "Read More" has 1px underline **[V/S]**.

**Hero subscribe form [V]** — white email input 345×55, pill, soft shadow, placeholder "Enter Your Email Address"; indigo "Subscribe" button 190×55 with paper-plane icon; checkbox "I agree to the Privacy Policy." below; then 4 circular white social icons (Facebook, X, Dribbble, Instagram).

**Stats card [V]** — `diagram.jpg` (1340×780) is a static image, radius 15px, overlapping bottom of hero photo. Recreate as image or HTML (bar chart S–S, Conversion 90%, Clicks 1 562, Purchases 286, blue pill badges).

**Icon box [V]** — 4 per row, centered: 60–65px SVG icon (indigo + sky-blue duotone: world, mobile, rating, cloud) inside a white circle with soft shadow; H4 title; 2-line gray description. Hover: icon scales 1.1.

**Overlap card [S]** — Indigo `#3441BE` rounded card, white H3 "We ensure your market success", positioned over the bottom-right of the woman photo.

**Numbered list [V/S]** — "01." in light gray + H5 title, separated by 1px `#E5E7E8` divider.

**Logo strip [V]** — 6 PNGs 190×99 (Jacobin, Ninja, Verseo, PBJ, Smartsites, Uplers), gray.

**Portfolio carousel [V]** — Swiper, 3 per view, 6 slides, images 390px wide, radius 15px, alternating landscape/portrait so cards stagger vertically; dot pagination.

**Price card [V]** — 410×309, `#FDFDFD`, radius 15px, big diffuse shadow; title 24px; price ~40px bold (Gold pack price in `#00ADFF`, others dark); "Per/Month" light; "N Downloads" bold. Silver $78, Gold $174, Platinum $230.

**Awards item [V]** — H6 title + year right-aligned on same line; category in light gray; 2-line description. 2×2 grid, top divider.

**Blog card [V]** — 410×487, radius 15px, light shadow; image 890×664 crop; dark square date badge (day large, month small uppercase) overlapping image bottom-right; meta "DIDITAL · 0 Comments" (sic — typo exists on the live site); title 26px.

**Footer [V]** — 4 columns: Office (address, underlined email, bold phone), Links (Home, Services, About Us, Our Team, Contacts), Socials (Facebook, Twitter, Dribbble, Instagram — text links), Newsletter (dark pill input `#1D1E21` with mail icon + round blue arrow button, privacy checkbox). Column headings Quicksand 18px `#F9F9F9`. Bottom: divider + "ThemeREX © 2026. All Rights Reserved."

---

## 4. Interactions & motion **[V]**
- Entrance animations: `codeforge-fadein`, `codeforge-fadeinleft` on scroll.
- Sticky header after scroll (0.3s slide-in animation, white bg).
- Dropdowns: dark `#17242B` panels, nested flyouts, hover color `#00ADFF`.
- Icon-box hover: icon zoom (scale 1.1 / `icons-zoom` 0.25s).
- Simple-button hover: arrow swaps position/opacity (0.3s).
- Portfolio Swiper with dots.
- Custom cursor dot follower.
- Newsletter modal on load.

## 5. Responsive behavior **[V/S]**
- **Tablet 768**: header keeps "Let's Talk" but nav collapses to burger; hero stays 2-column (smaller); icon boxes 2×2; price cards stay 3 across (211px); titles 38px.
- **Mobile 375**: header = logo + search + burger; hero stacks (photo+card on top, text below), H1 30px; icon boxes single column centered; price cards full width (335px); titles 26px; floating widgets remain.

## 6. Not verified / caveats
- Exact hover colors for filled buttons (inferred from `text_hover` / `text_hover2` tokens).
- Whether the hero people photo is part of `h1-bg-1.jpg` or a separate column image — the DOM shows only the three section background images plus `diagram.jpg`; the photo is most likely baked into the hero composition.
- Side-panel (burger) contents not opened; contains Facebook/Twitter/Dribbble/Instagram + phone + email per DOM text.
- Animation durations beyond the 0.3s button transition weren't measured.
- Imagery and logos are ThemeREX stock/licensed assets; a public recreation should use replacement images of matching size, crop and radius.
