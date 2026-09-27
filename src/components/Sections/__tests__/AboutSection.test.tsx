import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import contact, { BOOKING_URL } from '@/data/contact';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('renders a Contact me button to the Calendly booking page', () => {
    render(<AboutSection />);

    const button = screen.getByRole('link', { name: 'Contact me' });
    expect(button).toHaveAttribute(
      'href',
      'https://calendly.com/hello-growpad/30min',
    );
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
    expect(BOOKING_URL).toBe('https://calendly.com/hello-growpad/30min');
  });

  it('places the button right after the intro, before the section nav', () => {
    const { container } = render(<AboutSection />);

    const intro = container.querySelector('.about-intro');
    const cta = container.querySelector('.about-intro-cta');
    expect(intro?.nextElementSibling).toBe(cta);
    expect(cta?.nextElementSibling).toHaveClass('about-section-nav');
  });

  it('lists the YouTube channel among contact links', () => {
    expect(contact.map((item) => item.link)).toContain(
      'https://www.youtube.com/@OleksiiAndrusenko',
    );
  });
});
