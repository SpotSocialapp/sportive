import Image from "next/image";

const disclaimer =
  "Brand names, logos, media references, and campaign treatments are included as authorized Sportive planning assets for this enterprise preview. Production launch should still pass final asset QA, offer-rule review, legal approval, and manufacturer co-op signoff before any live customer promotion is published.";

const findings = [
  "Shopify-powered storefront ready for ecommerce loyalty attribution.",
  "Free shipping over $100 creates a clear member threshold and cart nudge.",
  "Last Pairs and New Arrivals collections are natural offer destinations.",
  "Brand menu supports affinity profiles, drop alerts, and brand-specific wallets.",
  "Shop-by-size behavior can power fit reminders and inventory-aware messages."
];

const stores = [
  ["Bayside", "401 Biscayne Blvd, #N103", "Miami, FL 33132", "https://www.google.com/maps/search/?api=1&query=Sportive%20Bayside%20401%20Biscayne%20Blvd%20Miami%20FL"],
  ["CocoWalk", "3015 Grand Ave, #230", "Coconut Grove, FL", "https://www.google.com/maps/search/?api=1&query=Sportive%20CocoWalk%203015%20Grand%20Ave%20Coconut%20Grove%20FL"],
  ["Dadeland", "7535 N Kendall Dr., Suite #2416", "Miami, FL 33156", "https://www.google.com/maps/search/?api=1&query=Sportive%20Dadeland%207535%20N%20Kendall%20Dr%20Miami%20FL"],
  ["Dolphin Mall", "11401 NW 12th St, Suite #256", "Miami, FL 33172", "https://www.google.com/maps/search/?api=1&query=Sportive%20Dolphin%20Mall%2011401%20NW%2012th%20St%20Miami%20FL"],
  ["Sawgrass Mall", "12801 W Sunrise Blvd, Suite #917", "Sunrise, FL 33323", "https://www.google.com/maps/search/?api=1&query=Sportive%20Sawgrass%20Mall%2012801%20W%20Sunrise%20Blvd%20Sunrise%20FL"]
];

const mockups = [
  ["Rewards Home", "Points balance, tier progress, and next-best Sportive offer."],
  ["Brand Hub", "Member affinity areas for launches, fit stories, and brand campaigns."],
  ["Offer Wallet", "Saved rewards, expiring offers, and store-ready redemption details."],
  ["Fit Profile", "Sizes, preferred brands, purchase cadence, and replacement timing."],
  ["Stores", "Nearby locations, mall context, phone numbers, and visit prompts."]
];

const campaigns = [
  ["Nike/Jordan Drop Zone", "Launch calendar, size-filtered alerts, reserve interest, and store pickup guidance."],
  ["On Cloud Comfort Test", "Fit appointment flow, comfort quiz, replacement reminders, and local event check-ins."],
  ["adidas 3-Stripes Weekend", "Member-only style bundles, Originals storytelling, and wallet-based redemptions."],
  ["New Balance Fit Lab", "Width, arch, fit history, store availability, and staff-guided recommendations."],
  ["Brand Media Calendar", "Enterprise campaign calendar for drops, store traffic, retention, and co-op reporting."]
];

const loyalty = [
  "Tier ladder tied to spend, visits, referrals, and selected profile completion.",
  "Points ledger with clear earning rules and wallet-ready redemption paths.",
  "Member profile for sizes, favorite brands, preferred stores, and product interests.",
  "Store visit and referral moments that reward omnichannel behavior.",
  "Replacement reminders for sneakers, backpacks, and seasonal staples."
];

const architecture = [
  ["Mobile App", "Rewards home, offer wallet, brand hubs, fit profile, stores, and push journeys."],
  ["Backend API", "Member, reward, campaign, visit, referral, inventory, consent, and integration services."],
  ["Customer Graph", "Profiles, sizes, brand affinities, purchase history, offers, stores, and event streams."],
  ["Admin Studio", "Brand media calendar, asset library, approval workflow, offer rules, and reporting."],
  ["Connectors", "Shopify bridge plus Retail Pro Prism or Shopify POS migration path."]
];

const roadmap = [
  ["Brand System", "Approve brand media kit, campaign architecture, offer taxonomy, and launch voice."],
  ["MVP App", "Ship rewards home, wallet, brand hubs, fit profile, stores, and campaign deep links."],
  ["Enterprise Admin", "Add media calendar, asset QA, approval workflow, segmentation, and reporting."],
  ["Integration Pilot", "Connect Shopify, POS path, loyalty events, inventory signals, and store attribution."],
  ["Scale Rollout", "Expand to all stores with co-op reporting, lifecycle automation, and executive dashboards."]
];

const downloads = [
  ["Download PowerPoint", "/sportive/Sportive_Rewards_Client_Presentation_v3.pptx"],
  ["Download PDF", "/sportive/Sportive_Rewards_Client_Presentation_v3.pdf"],
  ["Open Interactive Mockup", "/sportive/Sportive_Rewards_App_Mockup_v3.html"],
  ["Download Store Seed", "/sportive/sportive_store_master_seed_v3.csv"],
  ["Download Handoff", "/sportive/Sportive_Strategic500_Codex_Handoff_v3.md"]
];

const mediaSlides = [
  [
    "Executive answer",
    "Why Sportive needs an owned loyalty layer, not a generic discount program.",
    "/sportive/media/slide-02.png"
  ],
  [
    "Website signals",
    "Stores, sizes, brands, sale language, and cart behavior are already visible.",
    "/sportive/media/slide-03.png"
  ],
  [
    "Core app screens",
    "Rewards, wallet, and profile utility for repeat member behavior.",
    "/sportive/media/slide-07.png"
  ],
  [
    "Decision slide",
    "Approve the preview route, then move into the MVP path.",
    "/sportive/media/slide-22.png"
  ]
];

const campaignMedia = [
  [
    "Nike and On / Cloud concepts",
    "High-demand sneaker access and comfort-fit conversion examples.",
    "/sportive/media/slide-09.png"
  ],
  [
    "Brand campaign mockups",
    "Reusable campaign screens for adidas, New Balance, Jordan, and Sprayground.",
    "/sportive/media/slide-10.png"
  ],
  [
    "Participation plan",
    "Sportive-owned customer promise with formal brand approval checkpoints.",
    "/sportive/media/slide-12.png"
  ]
];

const adConcepts = [
  {
    title: "Launch campaign world",
    body: "A cinematic retail system for the loyalty app, store pickup, and member wallet.",
    src: "/sportive/creative/sportive-rewards-hero-art.png",
    href: "/sportive/creative/sportive-rewards-hero-art.png"
  },
  {
    title: "Campaign triptych",
    body: "Drop Zone, Comfort Test, and Fit Lab as a repeatable ad platform.",
    src: "/sportive/creative/sportive-campaign-triptych.png",
    href: "/sportive/creative/sportive-campaign-triptych.png"
  },
  {
    title: "Offer ad units",
    body: "Last Pairs, New Arrivals, Visit Bonus, and Birthday Reward as shoppable creative.",
    src: "/sportive/creative/sportive-ad-unit-board.png",
    href: "/sportive/creative/sportive-ad-unit-board.png"
  }
];

const brandPartners = [
  {
    name: "Nike",
    mark: "nike",
    headline: "Drop Zone",
    body: "Launch access, size-filtered alerts, reserve interest, and store pickup demand capture.",
    media: "SNKRS-style launch cadence, Sportive-owned wallet redemption, location-aware drops.",
    href: "/sportive/Sportive_Rewards_App_Mockup_v3.html#campaigns"
  },
  {
    name: "Jordan",
    mark: "jordan",
    headline: "Launch Alerts",
    body: "High-intent release notifications, visit bonuses, and member-only follow-up journeys.",
    media: "Release calendar, opt-in audience, post-drop retention, and store visit measurement.",
    href: "/sportive/Sportive_Rewards_App_Mockup_v3.html#campaigns"
  },
  {
    name: "adidas",
    mark: "adidas",
    headline: "3-Stripes Weekend",
    body: "Lifestyle bundles, Originals storytelling, app-only wallet offers, and school-season pushes.",
    media: "Campaign landing page, bundle logic, member offer wallet, and ecommerce attribution.",
    href: "/sportive/Sportive_Rewards_App_Mockup_v3.html#campaigns"
  },
  {
    name: "New Balance",
    mark: "newbalance",
    headline: "Fit Lab",
    body: "Comfort, width, arch, and repeat purchase flows built around fit confidence.",
    media: "Fit profile, staff picks, in-store scan, and replacement reminder automation.",
    href: "/sportive/Sportive_Rewards_App_Mockup_v3.html#campaigns"
  },
  {
    name: "On Cloud",
    mark: "oncloud",
    headline: "Comfort Test",
    body: "Try-on appointments, event check-ins, work-comfort segments, and Cloud replacement timing.",
    media: "Appointment booking, QR check-in, profile capture, and local event conversion.",
    href: "/sportive/Sportive_Rewards_App_Mockup_v3.html#campaigns"
  }
];

const enterpriseModules = [
  ["Brand Media Studio", "Approved logos, campaign assets, hero modules, offer cards, and channel-ready creative stored by brand."],
  ["Segmentation Engine", "Target by size, brand affinity, store, purchase cadence, visit history, family profile, and wallet status."],
  ["Offer Rules", "Margin-safe controls for access, points, bundles, redemption windows, exclusions, and manager override."],
  ["Attribution Layer", "QR, app open, wallet save, store visit, POS redemption, Shopify order, and campaign lift reporting."],
  ["Executive Dashboard", "Capture rate, repeat rate, campaign revenue, store traffic, redemptions, co-op performance, and cohort retention."],
  ["Approval Workflow", "Draft, brand review, Sportive approval, legal check, scheduled launch, rollback, and post-campaign readout."]
];

const deckGallery = [
  "Cover",
  "Executive answer",
  "Website signals",
  "Store footprint",
  "Loyalty strategy",
  "Customer journey",
  "Core app screens",
  "Brand hub",
  "Nike and On concepts",
  "Campaign pages",
  "Loyalty model",
  "Brand participation",
  "POS strategy",
  "Preview route",
  "Architecture",
  "Data model",
  "Mobile build plan",
  "Roadmap",
  "Pilot scorecard",
  "Approval gates",
  "Codex handoff",
  "Decision"
].map((title, index) => ({
  title,
  src: `/sportive/media/slide-${String(index + 1).padStart(2, "0")}.png`
}));

function BrandMark({ type }: { type: string }) {
  if (type === "nike") {
    return (
      <svg className="brand-svg nike-swoosh" viewBox="0 0 180 70" aria-hidden="true">
        <path d="M12 45c35 15 88 2 154-35-50 45-104 66-143 61-17-2-27-11-11-26Z" />
      </svg>
    );
  }

  if (type === "adidas") {
    return (
      <svg className="brand-svg adidas-bars" viewBox="0 0 170 80" aria-hidden="true">
        <rect x="18" y="42" width="28" height="34" transform="rotate(-22 32 59)" />
        <rect x="67" y="25" width="28" height="51" transform="rotate(-22 81 50)" />
        <rect x="116" y="8" width="28" height="68" transform="rotate(-22 130 42)" />
      </svg>
    );
  }

  if (type === "newbalance") {
    return <span className="brand-wordmark nb-word">NB</span>;
  }

  if (type === "oncloud") {
    return <span className="brand-wordmark on-word">On</span>;
  }

  if (type === "jordan") {
    return <span className="brand-wordmark jordan-word">AIR</span>;
  }

  return <span className="brand-wordmark">{type}</span>;
}

export default function SportivePreview() {
  return (
    <main className="sportive-page">
      <section className="hero section-band">
        <Image
          className="hero-art"
          src="/sportive/creative/sportive-rewards-hero-art.png"
          alt="Sportive Rewards premium retail campaign artwork"
          width={1792}
          height={1024}
          priority
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-lockup">
            <Image
              src="/sportive/sportive_logo_hires_transparent.png"
              alt="Sportive"
              width={760}
              height={250}
              priority
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Client preview hub</p>
            <h1>Sportive Rewards campaign launch system</h1>
            <p>
              A premium brand-media, loyalty, and enterprise commerce preview for
              Nike, Jordan, adidas, New Balance, On Cloud, store traffic, member
              offers, and future POS integrations.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a
                className="button primary"
                href="/sportive/Sportive_Rewards_App_Mockup_v3.html"
                data-analytics-todo="mockup_view_click"
              >
                Open mockup
              </a>
              <a
                className="button secondary"
                href="/sportive/Sportive_Rewards_Client_Presentation_v3.pdf"
                data-analytics-todo="download_pdf_click"
              >
                Download deck
              </a>
              <a
                className="button glass"
                href="#ad-concepts"
                data-analytics-todo="view_ad_concepts_click"
              >
                View ad concepts
              </a>
            </div>
          </div>
        </div>
        <div className="hero-strip">
          <span>Preview</span>
          <span>Brand Media</span>
          <span>Enterprise</span>
          <span>Pilot</span>
          <span>Rollout</span>
        </div>
      </section>

      <section className="section-grid media-library" id="media">
        <div className="section-heading">
          <p className="eyebrow">Media</p>
          <h2>Client deck visuals are embedded throughout the preview.</h2>
        </div>
        <div className="media-card-grid">
          {mediaSlides.map(([title, body, src]) => (
            <a className="media-card" href={src} key={title}>
              <Image src={src} alt={`${title} slide`} width={1467} height={825} />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <span>Open visual</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-band creative-showcase" id="ad-concepts">
        <div className="section-heading">
          <p className="eyebrow">Ad concepts and art</p>
          <h2>A campaign system that feels launch-ready, not placeholder.</h2>
        </div>
        <div className="ad-showcase">
          {adConcepts.map(({ title, body, src, href }, index) => (
            <a className={index === 0 ? "ad-card feature" : "ad-card"} href={href} key={title}>
              <Image src={src} alt={`${title} creative artwork`} width={1792} height={1024} />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-band brand-command" id="brand-media">
        <div className="section-heading">
          <p className="eyebrow">Approved brand media command center</p>
          <h2>Nike, Jordan, adidas, New Balance, and On Cloud become first-class app destinations.</h2>
        </div>
        <div className="brand-partner-grid">
          {brandPartners.map(({ name, mark, headline, body, media, href }) => (
            <a className={`brand-partner-card ${mark}`} href={href} key={name}>
              <div className="brand-card-head">
                <BrandMark type={mark} />
                <span>{name}</span>
              </div>
              <h3>{headline}</h3>
              <p>{body}</p>
              <div className="brand-media-note">{media}</div>
              <span className="brand-card-cta">Open brand mockup</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-grid enterprise-section" id="enterprise">
        <div className="section-heading">
          <p className="eyebrow">Enterprise system</p>
          <h2>Beyond a microsite: the operating layer for retail media, loyalty, and store attribution.</h2>
        </div>
        <div className="enterprise-grid">
          {enterpriseModules.map(([title, body], index) => (
            <article className="enterprise-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band interactive-preview" id="interactive">
        <div className="section-with-media interactive-layout">
          <div className="section-heading">
            <p className="eyebrow">Interactive media</p>
            <h2>Live app mockup embedded inside the preview hub.</h2>
            <p>
              The interactive mockup remains available as a standalone download, and
              this embedded view lets Sportive review the app experience without
              leaving the client page.
            </p>
            <a
              className="button secondary"
              href="/sportive/Sportive_Rewards_App_Mockup_v3.html"
              data-analytics-todo="embedded_mockup_open_click"
            >
              Open full mockup
            </a>
          </div>
          <div className="iframe-shell">
            <iframe
              title="Sportive Rewards interactive app mockup"
              src="/sportive/Sportive_Rewards_App_Mockup_v3.html"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-grid two-column">
        <div>
          <p className="eyebrow">Website findings</p>
          <h2>Storefront behavior maps cleanly into loyalty moments.</h2>
        </div>
        <div className="check-list">
          {findings.map((item) => (
            <div className="check-item" key={item}>
              <span aria-hidden="true">+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band stores">
        <div className="section-with-media">
          <div className="section-heading">
            <p className="eyebrow">Store footprint</p>
            <h2>Five South Florida store nodes for pickup, visits, and pilots.</h2>
          </div>
          <div className="section-media-frame">
            <Image
              src="/sportive/media/slide-04.png"
              alt="Sportive South Florida store footprint slide"
              width={1467}
              height={825}
            />
          </div>
        </div>
        <div className="store-grid">
          {stores.map(([name, line1, line2, href]) => (
            <a className="store-card" href={href} target="_blank" rel="noreferrer" key={name}>
              <h3>{name}</h3>
              <p>{line1}</p>
              <p>{line2}</p>
              <span>Open map</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-grid media-section">
        <div className="section-heading">
          <p className="eyebrow">App mockup gallery</p>
          <h2>Five app views define the MVP customer experience.</h2>
        </div>
        <div className="mockup-layout">
          <div className="montage-frame">
            <Image
              src="/sportive/Sportive_Rewards_Deck_Montage_v3.png"
              alt="Sportive Rewards deck montage"
              width={1600}
              height={577}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
          <div className="mockup-list">
            {mockups.map(([title, body]) => (
              <article className="mini-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band deck-gallery-section" id="deck-gallery">
        <div className="section-heading">
          <p className="eyebrow">Deck media library</p>
          <h2>Every presentation slide is available as browseable page media.</h2>
        </div>
        <div className="deck-gallery" aria-label="Sportive Rewards presentation slide thumbnails">
          {deckGallery.map(({ title, src }, index) => (
            <a className="deck-thumb" href={src} key={src}>
              <Image src={src} alt={`${title} slide thumbnail`} width={1467} height={825} />
              <span className="deck-caption">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {title}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-band campaigns" id="campaigns">
        <div className="section-heading">
          <p className="eyebrow">Branded campaign mockups</p>
          <h2>Campaign concepts show how rewards can become retail moments.</h2>
        </div>
        <div className="campaign-media-grid">
          {campaignMedia.map(([title, body, src]) => (
            <a className="campaign-media" href={src} key={title}>
              <Image src={src} alt={`${title} slide`} width={1467} height={825} />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <span>Open campaign board</span>
              </div>
            </a>
          ))}
        </div>
        <div className="campaign-grid">
          {campaigns.map(([title, body]) => (
            <a className="campaign-card" href="/sportive/Sportive_Rewards_App_Mockup_v3.html#campaigns" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
              <span>View in mockup</span>
            </a>
          ))}
        </div>
        <aside className="disclaimer">
          <strong>Brand media enabled for this preview.</strong>
          <p>{disclaimer}</p>
        </aside>
      </section>

      <section className="section-grid two-column">
        <div>
          <p className="eyebrow">Loyalty strategy</p>
          <h2>Build loyalty around profiles, store behavior, and wallet utility.</h2>
        </div>
        <div className="strategy-list">
          {loyalty.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section-band commerce">
        <div className="section-with-media">
          <div className="section-heading">
            <p className="eyebrow">POS and ecommerce strategy</p>
            <h2>Keep the first release static while planning the integration path.</h2>
          </div>
          <div className="section-media-frame">
            <Image
              src="/sportive/media/slide-13.png"
              alt="Sportive POS and commerce strategy slide"
              width={1467}
              height={825}
            />
          </div>
        </div>
        <div className="commerce-grid">
          <article>
            <h3>Retail Pro Prism upgrade</h3>
            <p>
              Best path if Sportive stays with Retail Pro and needs a modern connector
              layer for member, purchase, and store-event data.
            </p>
          </article>
          <article>
            <h3>Shopify bridge</h3>
            <p>
              Near-term ecommerce connector for order attribution, collection-based
              campaigns, and loyalty signals tied to online behavior.
            </p>
          </article>
          <article>
            <h3>Shopify POS migration</h3>
            <p>
              Strategic option if Sportive wants unified ecommerce and store operations
              with simpler loyalty instrumentation over time.
            </p>
          </article>
        </div>
      </section>

      <section className="section-grid architecture">
        <div className="section-heading">
          <p className="eyebrow">Architecture</p>
          <h2>Enterprise-ready architecture for brand media, loyalty, integrations, and reporting.</h2>
        </div>
        <div className="wide-media-frame">
          <Image
            src="/sportive/media/slide-15.png"
            alt="Sportive secure backend architecture slide"
            width={1467}
            height={825}
          />
        </div>
        <div className="architecture-grid">
          {architecture.map(([title, body]) => (
            <article className="arch-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band roadmap-section">
        <div className="section-with-media">
          <div className="section-heading">
            <p className="eyebrow">Roadmap</p>
            <h2>Move from approved brand preview to an enterprise rollout plan.</h2>
          </div>
          <div className="section-media-frame">
            <Image
              src="/sportive/media/slide-18.png"
              alt="Sportive implementation roadmap slide"
              width={1467}
              height={825}
            />
          </div>
        </div>
        <div className="roadmap">
          {roadmap.map(([phase, detail], index) => (
            <article className="roadmap-step" key={phase}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{phase}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid downloads">
        <div>
          <p className="eyebrow">Downloads</p>
          <h2>Client package assets are available from the preview route.</h2>
        </div>
        <div className="download-grid">
          {downloads.map(([label, href]) => (
            <a
              className="download-link"
              href={href}
              key={href}
              data-analytics-todo={`download_click_${label.toLowerCase().replaceAll(" ", "_")}`}
            >
              <span>{label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-band approvals">
        <div className="section-heading">
          <p className="eyebrow">Approval gates</p>
          <h2>What needs signoff before production work starts.</h2>
        </div>
        <div className="approval-grid">
          <article>
            <h3>Sportive approval</h3>
            <p>Program positioning, tier rules, offer language, store data, and launch timeline.</p>
          </article>
          <article>
            <h3>Brand media QA</h3>
            <p>Logo files, approved imagery, campaign copy, offer language, and co-op reporting rules.</p>
          </article>
          <article>
            <h3>Integration approvals</h3>
            <p>Retail Pro, Shopify, POS access, data retention, reporting, and security boundaries.</p>
          </article>
        </div>
        <footer className="footer-disclaimer">
          <p>{disclaimer}</p>
        </footer>
      </section>
    </main>
  );
}
