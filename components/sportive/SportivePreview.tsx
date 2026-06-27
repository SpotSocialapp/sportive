import Image from "next/image";

const disclaimer =
  "Manufacturer names and campaign concepts are included for planning and presentation purposes only. They do not represent manufacturer approval, endorsement, sponsorship, or a live integration. Final use of trademarks, logos, brand imagery, co-branded offers, manufacturer loyalty references, drop messaging, or official promotional language requires written approval from Sportive and the applicable manufacturer or brand representative.";

const findings = [
  "Shopify-powered storefront ready for ecommerce loyalty attribution.",
  "Free shipping over $100 creates a clear member threshold and cart nudge.",
  "Last Pairs and New Arrivals collections are natural offer destinations.",
  "Brand menu supports affinity profiles, drop alerts, and brand-specific wallets.",
  "Shop-by-size behavior can power fit reminders and inventory-aware messages."
];

const stores = [
  ["Bayside", "401 Biscayne Blvd, #N103", "Miami, FL 33132"],
  ["CocoWalk", "3015 Grand Ave, #230", "Coconut Grove, FL"],
  ["Dadeland", "7535 N Kendall Dr., Suite #2416", "Miami, FL 33156"],
  ["Dolphin Mall", "11401 NW 12th St, Suite #256", "Miami, FL 33172"],
  ["Sawgrass Mall", "12801 W Sunrise Blvd, Suite #917", "Sunrise, FL 33323"]
];

const mockups = [
  ["Rewards Home", "Points balance, tier progress, and next-best Sportive offer."],
  ["Brand Hub", "Member affinity areas for launches, fit stories, and brand campaigns."],
  ["Offer Wallet", "Saved rewards, expiring offers, and store-ready redemption details."],
  ["Fit Profile", "Sizes, preferred brands, purchase cadence, and replacement timing."],
  ["Stores", "Nearby locations, mall context, phone numbers, and visit prompts."]
];

const campaigns = [
  ["Nike/Jordan Drop Zone", "Launch calendar, reserve interest, and store pickup guidance."],
  ["On/Cloud Comfort Test", "Fit trial flow for comfort discovery and repeat purchase prompts."],
  ["adidas 3-Stripes Weekend", "Weekend offer wallet concept for member-only retail moments."],
  ["New Balance Fit Lab", "Size confidence, staff recommendations, and replacement reminders."],
  ["Sprayground Backpack Wall", "Limited wall drops, style wishlists, and referral sharing."]
];

const loyalty = [
  "Tier ladder tied to spend, visits, referrals, and selected profile completion.",
  "Points ledger with clear earning rules and wallet-ready redemption paths.",
  "Member profile for sizes, favorite brands, preferred stores, and product interests.",
  "Store visit and referral moments that reward omnichannel behavior.",
  "Replacement reminders for sneakers, backpacks, and seasonal staples."
];

const architecture = [
  ["Mobile App", "Rewards home, offers, profile, stores, and campaign experiences."],
  ["Backend API", "Member, reward, campaign, visit, referral, and integration services."],
  ["Database", "Profiles, ledgers, offers, locations, events, and approval audit records."],
  ["Admin Portal", "Campaign setup, approval gates, content controls, and reporting."],
  ["Connectors", "Shopify bridge plus Retail Pro Prism or Shopify POS path."]
];

const roadmap = [
  ["Preview", "Client approval hub, downloadable assets, campaign concepts."],
  ["MVP", "Core rewards app, wallet, profile, stores, and admin basics."],
  ["Integration", "Shopify data bridge, POS strategy, loyalty events, reporting."],
  ["Pilot", "Limited store and campaign launch with monitored redemption rules."],
  ["Rollout", "Full store footprint, refined campaigns, and operational reporting."]
];

const downloads = [
  ["Download PowerPoint", "/sportive/Sportive_Rewards_Client_Presentation_v3.pptx"],
  ["Download PDF", "/sportive/Sportive_Rewards_Client_Presentation_v3.pdf"],
  ["Open Interactive Mockup", "/sportive/Sportive_Rewards_App_Mockup_v3.html"],
  ["Download Store Seed", "/sportive/sportive_store_master_seed_v3.csv"],
  ["Download Handoff", "/sportive/Sportive_Strategic500_Codex_Handoff_v3.md"]
];

export default function SportivePreview() {
  return (
    <main className="sportive-page">
      <section className="hero section-band">
        <div className="hero-content">
          <div className="logo-mark">
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
            <h1>Sportive Rewards loyalty app preview</h1>
            <p>
              A polished approval and implementation view for an omnichannel loyalty
              program spanning Sportive stores, ecommerce, branded campaigns, and
              future POS integrations.
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
            </div>
          </div>
        </div>
        <div className="hero-strip">
          <span>Preview</span>
          <span>MVP</span>
          <span>Integration</span>
          <span>Pilot</span>
          <span>Rollout</span>
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
        <div className="section-heading">
          <p className="eyebrow">Store footprint</p>
          <h2>Five South Florida store nodes for pickup, visits, and pilots.</h2>
        </div>
        <div className="store-grid">
          {stores.map(([name, line1, line2]) => (
            <article className="store-card" key={name}>
              <h3>{name}</h3>
              <p>{line1}</p>
              <p>{line2}</p>
            </article>
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

      <section className="section-band campaigns">
        <div className="section-heading">
          <p className="eyebrow">Branded campaign mockups</p>
          <h2>Campaign concepts show how rewards can become retail moments.</h2>
        </div>
        <div className="campaign-grid">
          {campaigns.map(([title, body]) => (
            <article className="campaign-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <aside className="disclaimer">
          <strong>Brand approval required.</strong>
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
        <div className="section-heading">
          <p className="eyebrow">POS and ecommerce strategy</p>
          <h2>Keep the first release static while planning the integration path.</h2>
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
          <h2>Static approval hub now, extensible product system later.</h2>
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
        <div className="section-heading">
          <p className="eyebrow">Roadmap</p>
          <h2>Move from client approval to controlled rollout.</h2>
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
            <h3>Brand approvals</h3>
            <p>Trademark usage, manufacturer names, campaign copy, imagery, and promotional claims.</p>
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
