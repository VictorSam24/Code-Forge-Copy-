Build the Apar Innosys website (homepage + Industrial IoT page) inside [PROJECT FOLDER], using the theme/template already set up there. The look must stay true to THAT theme. Do not copy the look of the other Apar build (light, navy + blue #0B63CE + green "live" accent, Manrope/Inter); this one should look completely different.

## Source content (the only source of copy)
- D:\CDownloads\Apar Content - Headline Options.docx
- D:\CDownloads\Apar Content - Headline Options.pdf

The PDF is a Google Docs export of the same document: 8 pages, 2 images. Read the DOCX text from word/document.xml, and/or use pdftotext at C:\Program Files\Git\mingw64\bin\pdftotext.exe.

STRICT RULE: every visible word comes from the document, verbatim. Do not invent copy, stats, testimonials, addresses, phone numbers, button labels, form fields or "Learn more" links. Leave out these three things, which are notes, not site copy:
- The client's "Q3 … Answer" positioning note.
- Every "Image Idea:" paragraph. Use these only to place images and write alt text.
- The reviewer comments (Kumar KS / Shiva Sundarrajan), which sit in comments.xml.

## Pages and sections (in document order)
1. Homepage
   - Navigation: logo "Apar Innosys"; links Solutions · About · Clients · Contact; CTA "Get in Touch".
   - Hero: eyebrow, headline "Know Everything. Miss Nothing.", subheadline, CTAs "Talk to Us" / "See Our Solutions".
   - Stats bar: 4 stats. Keep them as written, including "<5 min" and both "24 hrs" and "24/7".
   - Solutions: "What We Do" / "Five Disciplines. One Operating Picture.", cards 01–05. E-Surveillance includes its Industries line.
   - Banner with the third headline option, "The Eyes Your Operations Need.", as the headline only. It has no body copy.
   - Why Apar Innosys: "Our Difference" / "We Operate What We Deploy.", the intro paragraph, differentiators 01–04.
   - Client Logos: "Trusted By", empty placeholder slots (logos are "to be provided"), and the sectors line.
   - Industries: "Sectors We Work In", 6 items.
   - CTA: "Let's Talk", headline, body, "Contact Us" / "View Solutions".
   - Footer:
     - Tagline "People · Innovation · Technology".
     - Office emails as mailto links: Singapore sundar@aparinnosys.com, Chennai benson.benni@aparinnosys.com.
     - "© 2024 Apar Innosys LLP. All rights reserved."
     - Privacy Policy · Terms, linked to "#".
2. Industrial IoT page (same header and footer)
   - Page Hero: label "Industrial IoT", "Visibility That Drives Decisions.", subheadline, "Talk to Our Team".
   - What We Do: "The Work" / "Sensors In. Decisions Out.", 2 paragraphs.
   - What We Monitor: "Coverage", 4 items.
   - How It Works: "Deployment", steps 01–04.
   - What You Get: "Outcomes", 5 bullets.
   - Industries: "Where We Deploy", 5 items.
   - FAQs Q1–Q5, as an accordion (native details/summary).
   - CTA: "Get Started", headline, body, "Contact Us".

## Images (extract from the DOCX word/media/, 1672×941)
- image1.png: a grid of live camera feeds. Use it for the homepage hero.
- image2.png: a camera lens with an industrial site behind it. Use it for the Industrial IoT hero (where the document places it), and also for the homepage "The Eyes Your Operations Need." banner.
- Serve both as WebP + JPEG fallback at 960/1600px with srcset/sizes. Preload the hero image, and lazy-load the rest.
- Do not add stock photos.

## Decisions already made (keep consistent with the other build)
- There is no contact page or form in the content:
  - "Talk to Us" and "Get in Touch" go to the CTA section (#contact).
  - "Contact Us" goes to the footer office emails (#offices).
- The nav goes to homepage anchors: #solutions, #about, #clients, #contact.
- Only the Industrial IoT solution card links to its page. The other four have no page content yet.
- Logo: use the client's logo, not a text wordmark. The ready-made files are in D:\codeforge-recreation\codeforge\img\:
  - apar-logo.webp/.png: transparent background, for light surfaces.
  - apar-logo-light.webp/.png: white wordmark, for dark surfaces.
  - favicon.png / apple-touch-icon.png: the orange mark only.
  - apar-logo-original.jpg: the source file, on white.
  The brand colours in the logo are orange #FF5A00 and blue #003DA8. Build this theme's palette around them, and keep text contrast AA. Orange on white is only about 3:1, so use it for marks and large display type, not small text.
- The brief asks to avoid the usual dark, negative surveillance look. Whatever the theme, the mood should read as clear, calm, everything running smoothly.

## Quality bar
- Responsive at 1440, 768 and 375 with no horizontal scroll.
- WCAG AA text contrast. Skip link, one h1 per page, headings in order.
- Mobile menu that traps focus and closes on Escape.
- Respects reduced motion.

## Verify before finishing
- Run the dev server and check both pages at the 3 widths. Check the console for errors.
- Extract the visible text of both pages and confirm every string appears in the pdftotext output of the PDF. Normalize dashes, quotes and whitespace before comparing.
- Click through the nav anchors, the IoT card link, the mobile menu, the FAQ toggles and the mailto links.

Give me a plan first, before building.
