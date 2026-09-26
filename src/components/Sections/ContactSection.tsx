import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

export default function ContactSection() {
  return (
    <section id="contact" className="onepage-section">
      <div className="contact-page">
        <header className="contact-header">
          <h2 className="page-title">Get in Touch</h2>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">Usually respond within 24 hours</p>
          </div>

          <div className="contact-divider">
            <span>or find me on</span>
          </div>

          <ContactIcons />
        </div>
      </div>
    </section>
  );
}
