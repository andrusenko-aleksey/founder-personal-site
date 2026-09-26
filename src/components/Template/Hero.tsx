import { sectionRoutes } from '@/data/routes';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Oleksii Andrusenko</span>
        </h1>

        <p className="hero-tagline">
          Founder &amp; CEO of{' '}
          <a href="https://growpad.pro" className="hero-highlight">
            GrowPad
          </a>
          . I help SaaS and IT companies become the first click when buyers
          search for a vendor, on Google or in ChatGPT.
          <br />
          SEO and LLMO measured in pipeline, not impressions.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">16+ years in inbound marketing</span>
          <span className="hero-chip">50+ SaaS &amp; tech companies</span>
          <span className="hero-chip">30+ five-star Clutch reviews</span>
        </div>

        <nav className="hero-cta" aria-label="Jump to section">
          {sectionRoutes.map((route, i) => (
            <a
              key={route.sectionId}
              href={`#${route.sectionId}`}
              className={`button ${i === 0 ? 'button-primary' : 'button-secondary'}`}
            >
              {i === 0 ? 'About Me' : route.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
