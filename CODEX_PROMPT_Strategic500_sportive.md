# Codex Prompt - Build Strategic500.com/sportive

You are working in the Strategic500 web repository. Build the Sportive client preview route at `/sportive` using the assets and specifications in this package.

## Goal
Create a polished client-facing microsite at `https://Strategic500.com/sportive` for Sportive Rewards. The page is a sales, approval, and implementation preview hub - not the final customer mobile app.

## Required assets
Copy these into `public/sportive/`:

- `assets/sportive_logo_hires_transparent.png`
- `Sportive_Rewards_Client_Presentation_v3.pptx`
- `Sportive_Rewards_Client_Presentation_v3.pdf`
- `Sportive_Rewards_App_Mockup_v3.html`
- `sportive_store_master_seed_v3.csv`
- `Sportive_Strategic500_Codex_Handoff_v3.md`

## Required route
Use Next.js App Router if available:

```text
app/sportive/page.tsx
components/sportive/*
public/sportive/*
```

If the repo is not App Router, use the existing routing convention and create the equivalent `/sportive` route.

## Page sections
Build these sections in order:

1. Hero with Sportive logo, loyalty app value proposition, and clear CTAs.
2. Website findings: Shopify-powered storefront, free shipping over $100, Last Pairs, New Arrivals, brand menu, shop-by-size behavior.
3. Store footprint: Bayside, CocoWalk, Dadeland, Dolphin Mall, Sawgrass Mall.
4. App mockup gallery: Rewards Home, Brand Hub, Offer Wallet, Fit Profile, Stores.
5. Branded campaign mockups: Nike/Jordan Drop Zone, On/Cloud Comfort Test, adidas 3-Stripes Weekend, New Balance Fit Lab, Sprayground Backpack Wall.
6. Loyalty strategy: tiers, points, offer wallet, member profile, store visits, referrals, replacement reminders.
7. POS/ecommerce strategy: Retail Pro Prism upgrade, Shopify bridge, Shopify POS migration.
8. Architecture: mobile app, backend API, database, admin portal, Shopify/POS connectors.
9. Roadmap: preview, MVP, integration, pilot, rollout.
10. Downloads: PPTX, PDF, interactive mockup, store CSV, Codex handoff.
11. Approval gates and visible brand-compliance disclaimer.

## Design direction
Use Sportive green/orange/cream palette:

```css
--sportive-green: #24841F;
--sportive-deep: #0E3B18;
--sportive-orange: #E65A12;
--sportive-cream: #F8F4EA;
--sportive-sand: #EFE3CE;
--sportive-ink: #142015;
--sportive-muted: #596656;
--sportive-line: #E0D2BB;
```

Use modern sans-serif typography, large headlines, premium retail styling, and responsive layouts. Make the page work well on desktop and mobile.

## Brand-compliance disclaimer
Include this text prominently near the branded campaign section and footer:

> Manufacturer names and campaign concepts are included for planning and presentation purposes only. They do not represent manufacturer approval, endorsement, sponsorship, or a live integration. Final use of trademarks, logos, brand imagery, co-branded offers, manufacturer loyalty references, drop messaging, or official promotional language requires written approval from Sportive and the applicable manufacturer or brand representative.

## Downloads
Add working links:

```tsx
<a href="/sportive/Sportive_Rewards_Client_Presentation_v3.pptx">Download PowerPoint</a>
<a href="/sportive/Sportive_Rewards_Client_Presentation_v3.pdf">Download PDF</a>
<a href="/sportive/Sportive_Rewards_App_Mockup_v3.html">Open Interactive Mockup</a>
<a href="/sportive/sportive_store_master_seed_v3.csv">Download Store Seed</a>
<a href="/sportive/Sportive_Strategic500_Codex_Handoff_v3.md">Download Handoff</a>
```

## Acceptance criteria
- `/sportive` route loads without errors.
- Logo renders cleanly on transparent background.
- Page includes all required sections and brand campaign mockups.
- Download links work.
- Layout is responsive.
- Brand-compliance disclaimer is visible.
- No Shopify Admin API, POS credentials, or protected tokens are exposed in browser code.
- Add analytics TODO hooks for download clicks, mockup views, and CTA clicks if analytics is not configured.

## First PR scope
Keep PR 1 focused on the static preview route and downloadable assets. Backend, app store deployment, POS connectors, and admin portal should be separate follow-up PRs after client approval.
