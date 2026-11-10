# N&K Electrical Contractors — static GitHub Pages preview brief

For a Cursor cloud agent. Write the site code only. Do not contact the business, or Neil. Do not push this URL to Nate, or to the client, until Audit passes the L-103 gate. The parent launches this run; do not start further cloud agents.

Written 10 Nov 2026, ~23:45 AWST (Australia/Perth), from Production’s approved wireframe (`wireframe.html` md5 `59803e59792e065026b6177d987a27d9`) and Director’s job card (Nate GO 23:37 AWST). This is a **static noindex GitHub Pages** preview, not a Wix build, and nothing may touch the client’s dLook site or account.

---

## 1. Route

Public repo `CromServices/nk-electrical-preview`, branch `main`, GitHub Pages from `main` `/`. Expected URL:

https://cromservices.github.io/nk-electrical-preview/

The repo already has `assets/`, `fonts/`, `robots.txt` (`User-agent: *` / `Disallow: /`), this `BRIEF.md`, and a placeholder `index.html` with `<meta name="robots" content="noindex">`. Replace the placeholder with the finished Home. Keep the noindex meta on every page. Keep `robots.txt` as disallow-all. Add an empty `.nojekyll` if it is not already there.

Commit as Crom Services `<cromservices@gmail.com>`. Do not add a custom domain. Do not edit any other CromServices repo. A read-only reference for the sun/moon toggle and booking widget shape (not for brand or copy) is https://cromservices.github.io/ozzy-gyprock-preview/ — do not modify that repo.

Deliverable: a single Home page (`index.html` plus CSS/JS as needed) that matches the attached `wireframe.html` layout, with the colour, chrome, booking, and copy rules in this brief. Inner marketing pages are optional; Home is what Audit will gate.

---

## 2. Source files

Canonical production pack (do not overwrite): `/workspace/crom/projects/crom-desk/02-working/production/outbound-spec-sites-2026-11-10/nk-electrical/`

A working copy sits in `/workspace/crom/projects/crom-desk/02-working/coder2/outbound-spec-sites-2026-11-10/nk-electrical/`. The parent attaches `wireframe.html` and `wireframe.md` to the cloud run. Approved logo and font files are already in this repo.

| File | md5 | Role |
|---|---|---|
| `wireframe.html` | `59803e59792e065026b6177d987a27d9` | Home layout, spacing, visible copy (upgrade booking and drop banned lines) |
| `wireframe.md` | `c193cbadc36a471693f6800ce0b9a7a5` | Facts, sourcing, structure |
| `assets/logo.png` / `assets/logo-400.webp` | `113d915558b4d90bdea7e9b3f7260c37` / `3902187b6e4ceb3cd5daf4bf847579b9` | Refreshed logo (use on the site) |
| `fonts/manrope-400.woff2` / `manrope-700.woff2` / `sourcesans3.woff2` | `700bdb48f816f3a1cfe09e57bbc4397e` / `f473cffa9febfb6c91827efb2cafdee7` / `9ef356ea553ac473c76cc863ff644c35` | Self-host |

**Logo refresh: yes.** Use the refreshed orange-plate N&K mark, keeping the name and the REC No. 10138 (`assets/logo.png` / `logo-400.webp` / `logo-800.webp`). It is a refresh of their existing logo, not a new brand. After the build, the parent will publish `proofs/logo-before-after.png` and site before/after proofs at public URLs. Old-site shots already exist in the production pack as `proofs/current-desktop-1440.png` and `proofs/current-mobile-390.png` (there are no files named `current-desktop-1440-first.png` / `current-mobile-390-first.png`; `desktop-1440-first.png` / `mobile-390-first.png` are first-view crops of the new wireframe).

**Do not use any gallery JPEG from `assets/source/`.** Every large photograph on the current site is stock (including `Domestic-Electrian-*.jpg`, `Electrical-Contractors-*.jpg`, `Switchboard-Upgrade-*.jpg`, `Industrial-Electrician-*.jpg`, `Shop-Fitouts-Lancefield.jpg`, `Electrical-Installations-Whittlesea.jpg`). Stock that could pass as theirs is banned under L-105. There is no hero photograph.

---

## 3. Hard rules

- `<meta name="robots" content="noindex">` on every page, and `robots.txt` disallow-all, before any URL is announced.
- No pricing on the page. Drop the wireframe line “There is no online price.” The published phrase “free no-obligation quote” may stay, because it is already on their site. The word “price” inside a published testimonial stays, because that is their customer’s wording, not a price list.
- **No street address and no ABN** (none are published anyway). Location is Wallan VIC 3756 only.
- No invented reviews, ratings, stats, opening hours, or licence numbers. REC No. 10138 may appear, because it is on their current logo. Do not invent hours. The only testimonials on the page are the four already published on their Testimonials page, credited exactly as below. Rodney Parker’s row has no quote body and is omitted. There is no invented Google block.
- No builder/demo/AI wording. Public copy uses only facts published on `https://www.nkelectrical.com.au/` (About, Services, Testimonials, Contact, `/page-12.php`), fetched 10 Nov 2026.
- Do not email neallangborne@msn.com or anyone at the business. Widgets are in-page only and must not send mail.
- Honour `prefers-reduced-motion`. Tap targets ≥ 44px.

## Shared build standards (write these into the page behaviour, not as on-page copy)

These come from locks.md, the 10 Nov Ozzy/Subzero job, Production research.md, and Director’s 23:37 job card. Do not print lock names, file paths, or “per the brief” on the rendered page.

### L-103 (locks.md, 10 Nov 2026 21:54 AWST)

Every preview is read as the client would read it. Scan rendered visible text for internal or builder notes. Ban-list: as listed, no invented, placeholder, TODO, per wireframe, brief, L-0, Crom meta-talk, “This form does not send.” Any hit is a BLOCK. The only allowed placeholder is a marked photo slot: **Your photo here**. Copy where the client site gives no detail is written in the client voice from facts on their site only. Sourcing notes live in `wireframe.md`, never on the page.

Also **L-101**: no sample, demo, template, concept, or “illustrative” wording on the pages, titles, metas, or alt text. Honesty that this is a Crom pitch preview belongs in `README.md` only.

### L-105 (locks.md, 10 Nov 2026 22:06 AWST)

Keep the business’s own photos, logo and brand colours, modernised. No stock that could pass as theirs. A marked photo slot only where no usable photograph exists. No empty panels. Real copy on every card. Each photograph is used once as a content image (a CSS lightbox of that same image is not a second use).

### L-072 sun/moon toggle (locks.md, amended 10 Nov 2026 22:59 AWST)

Every site ships light and dark themes. Default follows the device (`prefers-color-scheme`). A **single small sun/moon icon button** (about 36px) sits at the **right of the nav**, `aria-label="Switch light/dark"`, switches light/dark, and is remembered per device. **No visible System option.** Dark keeps the brand accents and headings with contrast ≥ 4.5:1 (3:1 for large text). Check both themes at 390 and 1440 (also 320 and 1920).

### Date chips and time pills (Ozzy/Subzero job card + this Director card; upgrades the wireframe widget)

The wireframe’s booking block is a static 10-day row that includes Saturday and Sunday as selectable, and time pills **Morning / Afternoon / Either**, plus walkthrough copy that promises emails and calendars and the banned line “This preview form does not send.” Do not copy that behaviour.

Required shape on Home:

1. **14 date chips** for the next 14 calendar days in the business’s local timezone (named in this brief). **Weekends disabled** (Saturday and Sunday may be visible or omitted, but must not be selectable). Do not invent clock opening hours.
2. Time-window pills: **Morning, Midday, Afternoon** (not “Either”).
3. Job-type chips from their real services only (listed below).
4. A summary line of the selected day, window, and job type (and, for RPL, the plant).
5. Name and phone fields (email and a customer site-address field are fine).
6. A **full-width Book** button.
7. A **success state** that only restates the saved summary. No step copy that promises emails or calendars, or says “you’ll stay on this page.” No “This form does not send.”

Safe help line, trimmed: “Pick a day that suits you. This holds a visit or a call. The job is confirmed once we reply.”

### Big-image lightbox (Production research.md + each pack’s wireframe)

**Definition**, from `/workspace/crom/projects/crom-desk/02-working/production/outbound-spec-sites-2026-11-10/research.md` (section “Masonry or bento job gallery, with a lightbox”): a bento / masonry gallery of the business’s own job photographs, with fixed aspect ratios, `srcset` in WebP (JPEG fallback), lazy-load below the fold, and a **CSS `:target` lightbox** so a visitor can open a shot without a heavy script. Captions stay short and factual. No shader or scroll libraries.

The pack wireframes already implement this as `.lightbox` panels (`display:none` until `:target { display:flex }`), a full-viewport dark veil, the larger derivative of the same photograph, and a close control with `aria-label="Close"` that returns to `#photos`. See `wireframe.html` in this folder. Where the gallery is marked “Your photo here” slots, still ship the lightbox CSS so it is ready once real photographs are supplied; do not lightbox an empty slot as if it were a photo.

### Sticky chrome the wireframe already asks for

- Sticky header on desktop and at 390.
- At 390: a sticky **Call | Request a quote** (or the site’s Book label) bar on **one line** at the bottom. Call uses the published `tel:` number. No hamburger that hides the phone number. Tap targets ≥ 44px. No horizontal scroll from 320px to 1440px (also check 1920). Honour `prefers-reduced-motion`.


---


---

## 4. Colours and type

Orange taken from the current banner. White on `#E96233` fails body-size AA (about 3.35:1), so buttons use ink `#1A1714` on the orange.

| Token | Hex | Role |
|---|---|---|
| `--accent` | `#E96233` | Brand orange: buttons and selected chips |
| `--accent-ink` / `--ink` | `#1A1714` | Body text and ink on orange |
| `--paper` / `--header-bg` | `#FFF8F3` | Page background and light header |
| `--dark` | `#1C1C1B` | Dark field, footer |
| `--wash` | `#F4EBE3` | Soft fills |
| `--muted` | `#4A4038` | Secondary text |
| `--line` | `#E0D4C8` | Rules |
| `--on-dark` | `#FFF8F3` | On-dark text |
| `--mark` | `#F0A27A` | Kickers |

**Type:** Manrope 700 for headings, `clamp(30px, 7.7vw, 56px)` on the H1; Manrope 400 and Source Sans 3 for body (18px desktop, 17px phone), self-hosted latin woff2, SIL OFL. A clean, normal-width bold sans — not Syne, and not an ultra-wide display face.

The first view is a **wall-of-type hero on a dark field**, with their orange as the accent, because there is no usable photograph of their own work.

---

## 5. Copy and facts (published only)

- Name: N&K Electrical Contractors / N&K Electrical Contractors Pty Ltd / N & K Electrical Contractors
- Area: Wallan, Wandong, Kilmore and Craigieburn (named on the homepage). “Greater Victoria” may appear only as a title line if it already does in their copy; the service-area block stays at the four named towns. No invented suburbs.
- Experience: 20 years local, 30 years in the trade (About).
- Phone: 0418 569 953 (`tel:+61418569953`)
- Fax: (03) 5783 1182 (published; not a first-view action — it can sit in the contact block, not in the header or the sticky phone bar)
- Email: neallangborne@msn.com
- Location: Wallan VIC 3756
- Licensing: REC No. 10138 (from the current logo artwork)
- “Free no-obligation quote”

**Home title:** `Electricians in Wallan, Wandong, Kilmore and Craigieburn | N&K Electrical` plus noindex.

**Meta:** `Electrical work in Wallan, Wandong, Kilmore and Craigieburn. Free no-obligation quote. Call 0418 569 953.`

**Nav:** Work, About, Quote, Book a visit, Contact, 0418 569 953, Request a quote, then the theme button on the right.

**Hero eyebrow:** Wallan and the surrounding areas

**H1:** Electrical work in Wallan, Wandong, Kilmore and Craigieburn.

**Hero lead (verbatim):** N&K Electrical Contractors are experienced electricians. We handle installations and repairs, from light and power to audio-visual, security, data cabling and air-conditioning.

**Hero proof row:** REC No. 10138 · Over 30 years in the trade · Based in Wallan · Free quote

**Hero CTAs:** Call 0418 569 953 / Request a quote

**Services heading / lead:** Domestic, commercial and industrial / A prompt, reliable service for homes, shops, offices and industrial sites, from the smallest repair through to a complete fitout.

**Service cards (job-type chips use these labels):** Installations and alterations; Lights and power points; Switchboards; Air conditioning; Hot water and ovens; Data, security and audio-visual. Keep the short published blurbs from `wireframe.html`.

**About heading / copy:** Over 20 years of local work, and over 30 years in the trade / Based in Wallan, we also cover Wandong, Kilmore and Craigieburn. We don’t cut corners on electrical installations, because everything in your premises has to work properly and stay hazard-free. / We are fully qualified and insured. Call 0418 569 953 for a free, no-obligation quote, or send a message through the form.

**Testimonials — verbatim, these four only, credited as published:**

1. Mel Carr — “Amazing AMAZING Amazing. Service, price and quality, this man Neil knows it all. Incredibly talented and can solve any problem. I was in a pickle after 7 hours of wire tripping. I phoned, he attended within 15 minutes, fixed the problem and out the door he went. So thankful for this company. Just a superior company with old fashioned quality service. So helpful and got the job done, if it wasn't for Neil I would still be in trouble. 20/10 service ABSOLUTELY WOULD RECOMMEND THIS MAN FOR ANY ELECTRICAL NEEDS. QUALITY, FAST AND INCREDIBLE KNOWLEDGE. Thank you so so so much.”
2. Rogue Fox — “Came to our rescue when electrical issues stopped a renovation in its tracks. Sorted it all in no time at all. Fantastic service and lovely people.”
3. Hannele Parojarvi — “Fast and fantastic service. No job too small. Highly recommend.”
4. Langbourne Constructions — “Our go to electrician. Reliable, friendly and efficient.”

Heading: What customers have said. A short line that these are testimonials published on their website is fine. No star ratings, no Google badge.

**Where we work:** Wallan, Wandong, Kilmore, Craigieburn only.

**Contact:** N&K Electrical Contractors Pty Ltd · Wallan VIC 3756 · 0418 569 953 · Fax (03) 5783 1182 · neallangborne@msn.com · REC No. 10138. No street address, no hours, no map.

**Footer:** © 2026 N&K Electrical Contractors Pty Ltd

**Quote form** (in-page only, must not email the business): Name, Phone, Email, Suburb or address, Type of work (the real services above, plus Other), short description, preferred time to talk. Submit: Request a quote. Honest in-page success only. Rewrite the wireframe walkthrough so it does not promise emails, calendars, or “you stay on this page,” and drop “There is no online price” and “This preview form does not send.” Do not mention leftover CoffeeCup links.

---

## 6. Photographs (each used once)

There are no usable job photographs. The gallery and the About photo are marked **Your photo here** slots only. Ship the CSS `:target` lightbox so it is ready once real photographs are supplied; do not lightbox an empty slot as if it were a photo. Logo files are the header / footer mark only.

---

## 7. Booking widget

Label: **Book a visit**. 14 date chips in **Australia/Melbourne**, weekends disabled, Morning / Midday / Afternoon, job-type chips from the six service labels in §5, summary line, full-width Book a visit button, success state. Follow the shared standard in this brief, not the wireframe’s 10-day / Either / email-promise widget.

---

## 8. Verification to return

Save 1440 and 390 shots, light and dark, plus a booking success state, under the parent’s proof folder (`…/coder2/outbound-spec-sites-2026-11-10/nk-electrical/`), and as cloud-agent artifacts, with MD5SUMS. Also compose `proofs/before-after-desktop.png` and `proofs/before-after-mobile.png` (old site `current-desktop-1440.png` / `current-mobile-390.png` beside the new preview) and keep the existing logo before/after ready for a public URL.

Return:

- [ ] Repo URL, branch, and head SHA. Pages URL, HTTP 200, logged-out curl shows `<meta name="robots" content="noindex">`.
- [ ] Theme button at the right of the nav, `aria-label="Switch light/dark"`, defaults to system. Shots of light and dark at 1440 and 390.
- [ ] Sticky header; at 390 the Call | Request a quote bar is one line.
- [ ] CSS `:target` lightbox ready on the gallery; only “Your photo here” slots; no stock.
- [ ] Booking: 14 day chips, weekends disabled, Morning/Midday/Afternoon, real service chips, summary line, full-width Book, success state. No email/calendar/“you’ll stay on this page” / “does not send” copy.
- [ ] The four published testimonials only; service area stays at the four named towns; REC No. 10138 present; no street address, no hours, no invented Google block.
- [ ] Visible-text scan (L-103 / L-101): no builder notes, no sample/demo/template wording, no pricing, no bots/AI.
- [ ] Refreshed logo in the header. No email was sent to the business.
