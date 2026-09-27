import AboutContent from '@/components/About/Sections';
import { aboutMarkdown } from '@/data/about';
import { BOOKING_URL } from '@/data/contact';

export default function AboutSection() {
  return (
    <section id="about" className="onepage-section">
      <div className="about-page">
        <header className="about-header">
          <h2 className="page-title">About</h2>
        </header>
        <AboutContent
          markdown={aboutMarkdown}
          introAction={
            <div className="about-intro-cta">
              <a
                href={BOOKING_URL}
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me
              </a>
              <span className="about-intro-cta-note">
                Book a 30-minute call
              </span>
            </div>
          }
        />
      </div>
    </section>
  );
}
