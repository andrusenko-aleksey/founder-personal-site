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
          Founder &amp; CEO at{' '}
          <a href="https://growpad.pro" className="hero-highlight">
            Growpad.pro
          </a>
          , building B2B SaaS tools that help startups grow faster.
          <br />
          Entrepreneur, product builder, and growth practitioner from Ukraine.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Founder &amp; CEO</span>
          <span className="hero-chip">B2B SaaS</span>
          <span className="hero-chip">Growth &amp; Product</span>
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
