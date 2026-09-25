import Link from 'next/link';

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
          , an SEO and AI-visibility agency for SaaS and B2B tech companies.
          <br />
          16+ years turning organic search and LLMs into predictable pipeline.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">16+ years in SEO</span>
          <span className="hero-chip">50+ SaaS &amp; tech teams grown</span>
          <span className="hero-chip">37+ five-star Clutch reviews</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
