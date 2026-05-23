# SyncVision — Improved Files

## Latest Changes - May 24, 2026

### `app/globals.css`
- Added the updated SyncVision brand palette:
  - Background teal: `#17726d` with transparency variants
  - Logo green: `#a4d376`
  - Logo blue: `#4c7bc1`
- Updated shared muted text color so content on pale sections is readable.
- Kept brand variables available through legacy aliases so existing components continue to work.

### `components/Navbar.tsx`
- Adjusted the navbar to work better over hero sections and while scrolling.
- Reduced the logo sizing so it does not look oversized.
- Improved the scrolled navbar visibility so text and background do not fade into the page.
- Removed/softened the unwanted bottom line effect at the end of the navbar.
- Tuned header colors using the new teal, green, and blue palette.

### `components/Footer.tsx`
- Restored the footer to the darker brand background.
- Removed the card-like structure from the "Our Location" area.
- Kept "Our Location" on the right side with a simple embedded map.
- Removed the white card wrapper around the footer logo.
- Updated footer headings, links, icons, borders, and bottom bar colors for better contrast on the dark footer.

### `app/about/page.tsx`
- Added `AboutSection` back into the About page.
- This makes the following content visible on the page:
  - Headquartered in Pune, with operational presence in Thane and Patna.
  - SyncVision as a quality-focused Site Management Organization.
  - The bridge between Sponsors, CROs, Investigators, and Ethics Committees.

### `components/AboutSection.tsx`
- Improved paragraph readability through the updated muted text color token.
- Kept the Pune, Thane, and Patna presence content visible and aligned with the updated palette.

### Mobile Hero Height Updates
- Reduced phone hero section heights across the main pages.
- Kept tablet and desktop hero behavior unchanged.
- Updated these hero components:
  - `components/HomeHero.tsx`
  - `components/AboutHero.tsx`
  - `components/ServicesHero.tsx`
  - `components/TherapeuticHero.tsx`
  - `components/CareersHero.tsx`
  - `components/PartnerHero.tsx`
  - `components/ContactHero.tsx`
- Changed mobile hero sizing to use shorter `svh` values:
  - `min-h-[72svh]`
  - `sm:min-h-[78svh]`
  - Existing `md` and `lg` heights preserved.
- Reduced mobile top/bottom hero padding so pages feel less tall on phones.

### Verification
- `npm run lint` passed.
- `npm run build` passed after allowing Google Fonts to be fetched.

## Files Changed

### `app/globals.css`
- Added `-webkit-tap-highlight-color: transparent` → removes the blue flash on mobile taps
- Added proper `:focus-visible` outlines using brand gold color for accessibility

### `app/layout.tsx` ← **IMPORTANT — Google / Browser tab fixes**
- Added full SEO meta tags: `description`, `keywords`, `authors`
- Added `openGraph` metadata → controls how the site looks when shared on WhatsApp, LinkedIn, etc.
- Added `twitter` card metadata
- Added `<meta name="theme-color" content="#0A4D44">` → **this fixes the browser tab / mobile status bar color** (makes it dark green, not the default yellow/green icon color)
- Added `<link rel="icon" href="/favicon.ico">` explicitly in `<head>` → ensures favicon is picked up correctly by Google
- Better page title with keywords for search

### `components/Navbar.tsx`
- Replaced plain `☰` and `✕` text with proper `Menu` and `X` Lucide icons
- Mobile drawer slides from the **right side** with a dark backdrop → much more modern UX
- Nav links **auto-close** on route change
- Proper `aria-label` on icon buttons for accessibility
- Slightly smaller logo sizes to avoid overflow on mid-size screens
- Touch targets are larger and more thumb-friendly

### `components/HomeHero.tsx`
- Two distinct buttons: solid gold (primary) + outlined (secondary) → clearer visual hierarchy
- Added a **trust strip** below CTAs: "ICH-GCP Compliant · Pan-India Presence · Data Integrity"
- Tighter, cleaner gradient overlays
- Added a small "Site Management Organization · India" label above the heading for SEO context
- Removed duplicate `min-h` logic to fix layout on mid-devices

### `components/AboutSection.tsx`
- Consistent padding (`py-20 md:py-24 lg:py-28`) — removes the confusing `pt-28/pt-36/lg:pt-12` pattern
- Image aspect ratio changed to `sm:aspect-square` for better tablet display
- Badge uses `flex-shrink-0` to prevent icon wrapping on small screens

### `components/Services.tsx`
- Grid is now `sm:grid-cols-2 md:grid-cols-3` — 2 columns on tablet, 3 on desktop
- Icon size reduced slightly, card padding adjusted for tighter mobile fit
- Section heading now uses green + gold split for better brand consistency

### `components/OncologySection.tsx` (was SiteManagementSection)
- Consistent padding pattern applied
- Minor spacing tightening for mobile

### `components/ExperienceSection.tsx`
- Background changed from `#F7F9FB` to `white` to create visual alternation with adjacent sections
- Consistent padding pattern
- Feature icon size normalized

### `components/NetworkSection.tsx`
- Consistent padding
- Active operations badge uses `hidden sm:flex` for cleaner mobile fallback

### `components/Footer.tsx`
- Grid is now `sm:grid-cols-2 lg:grid-cols-4` — 2 columns on mobile/tablet, 4 on desktop
- Logo card max-width tightened
- Social icons slightly smaller for better mobile fit
- All hover states polished

## Earlier Scope Notes
- Older entries below may refer to the previous brand pass.
- Recent updates changed the brand color tokens, footer styling, About page composition, and mobile hero heights.
- Reveal animation behavior is unchanged.
