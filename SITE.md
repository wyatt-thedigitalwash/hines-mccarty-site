# Hines & McCarty Website Reference

## Business Info
- Business Name: Hines & McCarty, PLLC
- Industry: Criminal defense law firm (state and federal)
- Location: 745 W Lumsden Rd, Brandon, FL 33511
- Phone: (813) 738-8650
- Email: intake@hinesmccarty.com (placeholder, confirm)
- Website URL: TBD
- Google Business Profile: live, rating 5.0 (low review count); primary category
  should be "Criminal justice attorney"
- Service area: Greater Tampa Bay; 13th Judicial Circuit; M.D. Fla. Tampa Division
- Hours: Monday to Friday, 9 AM to 5 PM

## Positioning
A Brandon criminal defense firm built around four attorneys who each concentrate
on different areas of criminal law, handling serious state and federal charges
that many firms refer out. Much of the work arrives by referral. The site leads
with capability and gravitas, presents the full bench, and never relies on
superlative or outcome claims (Fla. Bar R. 4-7 compliant).

## Brand Voice
Confident, calm, plain-spoken. No "best/expert/specialist" claims (Rule 4-7.14),
no outcome promises or guarantees (Rule 4-7.13). Sensitive practice areas (sex
offenses, CSAM) are framed around process, rights, and discretion. No em dashes
in user-facing copy (use commas, periods, or double hyphens).

## Visual Direction
- Reference: https://www.sheppard.com/ (editorial BigLaw, deep navy canvas, warm
  cream panels, large serif display, generous whitespace, arrow-up-right links)
- Minimal top nav; a Sheppard-style slide-in menu panel holds the full site
- Anti-patterns: fear-marketing, clutter, stock-photo gavel cliches, loud CTAs

## Colors
- Background (primary dark): Prussian Blue #101933  (token: navy)
- Primary Text on dark: Linen #F4EDE4  (token: linen)
- Light section background: Linen #F4EDE4
- Accent: Golden Bronze #C5A059  (token: bronze)
- Secondary Accent / muted: Charcoal Blue #3A4750  (token: charcoal)
- White: #FFFFFF
- Tokens defined in src/app/globals.css @theme (bg-navy, text-bronze, etc.)

## Typography
- Display Font: EB Garamond, weight 800 (headers) -- class .font-display
- Subheaders: Lora, all caps, no tracking -- class .eyebrow
- Body Font: Lora
- Loaded via next/font/google in src/app/layout.tsx
- Sizing: hero display up to text-7xl; section headers text-4xl to text-5xl;
  body text-lg

### Type scale, explicit

Written out because it drifted once: inner pages were built a full step below
this, at text-3xl to text-4xl for section headers, while the home page followed
the scale. The result was a home page that looked correct next to inner pages
that looked undersized. Use these exact ladders.

| Role | Classes |
|---|---|
| Home hero H1 | `text-5xl sm:text-6xl lg:text-7xl` |
| Page H1 (inner heroes) | `text-4xl sm:text-5xl lg:text-6xl` |
| **Section H2** | `text-4xl sm:text-5xl` |
| CTA H2 | `text-4xl sm:text-5xl lg:text-6xl`, font-extrabold |
| Card title (large, 3-up grid) | `text-3xl lg:text-4xl` |
| Card title (small, 4-up grid) | `text-2xl lg:text-3xl` |
| Sub-heading inside a section | `text-xl` to `text-2xl` |
| Body | `text-lg` |

A section header is any H2 that titles a band of the page. Card titles and
in-section sub-headings are not section headers and sit below the ladder on
purpose.

## Logo
No logo yet (text wordmark "Hines & McCarty" in EB Garamond for now). Real logo
files will live in /public before launch and replace the wordmark in Header and
Footer.

## Navigation (confirmed, client meeting)
`Attorneys | Cases We Defend | Results | Resources | Contact Us`
- Wordmark links home; no separate Home nav item.
- About has no top-level slot. The Attorneys hub carries the About overview; the
  full /about page is linked from that hub and from the footer.
- Contact Us renders as a button. In-page CTAs stay "Request a consultation."
- Footer "Areas We Serve" splits state markets (Tampa Bay counties and cities)
  from federal reach ("Middle District of Florida, including the Tampa, Orlando,
  and Fort Myers divisions"). Plain text or links to the five built location
  pages only. Never a page per city.
- Full rationale and the page-level sitemap: docs/build/WEBSITE-PLAN.md Section 3

## Home Page Direction (client meeting)
- **Hero:** headline is the trial credential, not a slogan. "100+ Federal &
  State Jury Trials" leads; "Defending Your Future" sits under it as the
  subline. "Aggressive Representation" is dropped as the headline: it is
  generic across the market, it carries no evidentiary weight, and it fights
  the calm-gravitas voice above. The trial count is objectively verifiable,
  which is exactly why it is both stronger and safer. Pending substantiation
  (WEBSITE-PLAN Open Question 2b).
- **Meet the Attorneys:** attorneys on the edges, the trial number centered
  between them. Chosen over the photo-on-right variant because it puts faces
  next to the claim and proves the bench, which is the firm's actual edge.
- **Ribbon:** double ribbon, "Free Consultation, Available 24/7." The 24/7 half
  is BLOCKED pending confirmation that calls are actually answered after hours
  (Open Question 2c). No em dash in the ribbon copy.
- **Floating call button:** bottom-RIGHT, not bottom-left, for thumb reach on
  mobile. Must be dismissible, keyboard-focusable, and must not overlap content
  or the footer, per the pre-launch ADA audit.
- **Consultation Process (4 steps):** step 4 is rewritten. "To get your case
  dismissed" predicts an outcome and violates Rule 4-7.13(b). Approved wording:
  1. Call for a free consultation
  2. Confidential in-person or virtual meeting to discuss your case
  3. Explore all options to fight your case
  4. Our attorneys represent you at every court appearance and fight the charge
- **Credential strip (5 logos):** Board Certified, HCBA, NACDL, DUIDLA, FJA.
  All BLOCKED pending Open Questions 7 and 8 (certification is only citable with
  the certifying body and area named; marks need usage permission; FACDL is
  missing and is the more on-point credential).
- **Sub-service cards:** description capped at 8 words. Enforce as a hard cap in
  the card component, not a guideline.
- **Wordmark:** larger than current.
- **OPEN, blocks further Home work:** notes say "white background throughout,
  dark blue header," which contradicts the navy-canvas direction above. See
  WEBSITE-PLAN Open Question 9.

## Pages
Build order (per client): Home first (design), then one Capability hub, then one
State practice sub-page, then About, Attorneys, Results, Contact, Insights
(blog), Reviews.
- [x] Home
- [ ] Capabilities hub (single, next)
- [ ] State practice sub-page (single, after hub)
- [ ] About
- [ ] Attorneys hub + 4 bios: David Hines, Lily McCarty, Maria Pavlidis, Colton
      Trina. Bio copy carries each attorney's own keyword set. Pavlidis is
      blocked pending her relationship to the firm (WEBSITE-PLAN OQ 2a).
- [ ] Results (overview; county pages only once a county has 5+ real results)
- [ ] Contact
- [ ] Resources hub: Tools & Guides, Articles (the blog lives here, not top-level)
- [ ] Reviews
Full architecture and content plan: docs/build/WEBSITE-PLAN.md

## CTAs
- Primary: Request a consultation (/contact)
- Secondary: Call (813) 738-8650

## Content Status

### Text Content
- [ ] Business bio / owner bio: home + about drafted; attorney bios pending client
- [~] Service descriptions: capability summaries drafted; sub-pages pending
- [ ] Testimonials: placeholder; real client-consented Google reviews needed
- [ ] About page copy: home About section drafted; full page pending
- [ ] Contact form auto-reply: not built

### Visual Content
- [ ] Logo files: none yet (wordmark placeholder)
- [ ] Team photo: placeholder block in Home About section
- [ ] Tampa hero video: /public/videos/tampa-skyline.mp4 (+ poster at
      /public/images/tampa-skyline-poster.jpg) not yet added; gradient shows until then
- [ ] Attorney portraits: pending
- [ ] OG image: not set

### Business Info Confirmed
- [x] Address confirmed: 745 W Lumsden Rd, Brandon, FL 33511
- [x] Phone confirmed: (813) 738-8650
- [ ] Email confirmed: intake@ placeholder
- [x] Hours confirmed: Mon to Fri 9-5
- [ ] Social profiles confirmed

### Integrations
- [ ] Resend domain verified (package installed)
- [ ] Google Analytics installed
- [ ] Google Search Console verified
- [ ] Google Business Profile linked

### Blocking Items for Launch
- Logo files
- Maria Pavlidis's relationship to the firm (of counsel vs firm attorney)
- Substantiation for "100+ federal and state jury trials"
- Whether the phone is genuinely answered 24/7 (gates the ribbon copy)
- Board certification status and credential-logo usage permissions
- White-background vs navy-canvas decision (gates all further Home design)
- Real attorney bios, photos, and which attorney leads which practice area
- At least the first batch of practice-area money pages (see WEBSITE-PLAN.md)
- Real testimonials with results-may-vary disclaimer, or remove the section
- Confirm intake email and set up Resend + contact form

### Nice-to-Have (Post-Launch)
- Tampa hero video
- Tools, in build order (WEBSITE-PLAN.md Section 5): Sentencing Calculator,
  Bond & Bail Estimator, Federal Case Timeline, Seal & Expunge Checker.
  Guides: After an Arrest, Federal Case Timeline.

## Notes
- Scope decision: criminal defense focus. Corporate/business law limited to a
  single overview page under Capabilities, not a full silo (keeps topical focus).
- No Spanish-language pages (firm has no Spanish capability).
- Paid advertising is parked; website-first. See docs/research/ for full market
  research and docs/build/WEBSITE-PLAN.md for the plan.
