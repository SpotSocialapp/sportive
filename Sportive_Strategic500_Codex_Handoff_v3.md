# Sportive Rewards Strategic500 Handoff v3

## Objective

Build a client-facing Strategic500 preview route at `/sportive` for Sportive Rewards. This route is a sales, approval, and implementation hub, not the final shopper mobile app.

## PR 1 Scope

- Static App Router page at `/sportive`.
- Public downloadable assets under `public/sportive/`.
- Responsive premium retail layout using Sportive green, orange, cream, sand, ink, and muted neutrals.
- Visible campaign and trademark approval disclaimer.
- Analytics TODO hooks for downloads, mockup views, and CTA clicks.

## Required Sections

1. Hero with Sportive logo, loyalty value proposition, and CTAs.
2. Website findings: Shopify storefront, free shipping over $100, Last Pairs, New Arrivals, brand menu, and shop-by-size behavior.
3. Store footprint: Bayside, CocoWalk, Dadeland, Dolphin Mall, and Sawgrass Mall.
4. App mockup gallery: Rewards Home, Brand Hub, Offer Wallet, Fit Profile, and Stores.
5. Branded campaign concepts: Nike/Jordan Drop Zone, On/Cloud Comfort Test, adidas 3-Stripes Weekend, New Balance Fit Lab, and Sprayground Backpack Wall.
6. Loyalty strategy: tiers, points, offer wallet, member profile, store visits, referrals, and replacement reminders.
7. POS/ecommerce strategy: Retail Pro Prism upgrade, Shopify bridge, and Shopify POS migration option.
8. Architecture: mobile app, backend API, database, admin portal, Shopify connector, and POS connector.
9. Roadmap: preview, MVP, integration, pilot, and rollout.
10. Downloads: PowerPoint, PDF, interactive mockup, store seed CSV, and this handoff.
11. Approval gates and brand-compliance disclaimer.

## Brand-Compliance Disclaimer

Manufacturer names and campaign concepts are included for planning and presentation purposes only. They do not represent manufacturer approval, endorsement, sponsorship, or a live integration. Final use of trademarks, logos, brand imagery, co-branded offers, manufacturer loyalty references, drop messaging, or official promotional language requires written approval from Sportive and the applicable manufacturer or brand representative.

## Follow-Up Work

- Backend, app store deployment, POS connectors, admin portal, and authenticated integrations should remain separate follow-up work after client approval.
- Verify store address, postal code, phone, and POS location IDs before production use.
- Do not expose Shopify Admin API credentials, POS credentials, protected tokens, or private integration secrets in browser code.
