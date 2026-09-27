import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import BookSection from '../BookSection';

function readBookSchema(container: HTMLElement) {
  const script = container.querySelector('script[type="application/ld+json"]');
  return JSON.parse(script?.innerHTML || '{}');
}

describe('BookSection', () => {
  it('renders as the #book section with the original and English titles', () => {
    const { container } = render(<BookSection />);

    expect(container.querySelector('section#book')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Inbound-маркетинг для IT-сервісних та SaaS-компаній',
      }),
    ).toHaveAttribute('lang', 'uk');
    expect(
      screen.getByText('Inbound Marketing for IT Service and SaaS Companies'),
    ).toBeInTheDocument();
  });

  it('shows the cover image', () => {
    render(<BookSection />);

    const cover = screen.getByRole('img', {
      name: /cover of inbound marketing/i,
    });
    expect(cover.getAttribute('src')).toMatch(
      /\/images\/book\/inbound-marketing-cover\.jpg$/,
    );
  });

  it('lists the publication data', () => {
    const { container } = render(<BookSection />);
    const details = container.querySelector('.book-details') as HTMLElement;

    for (const value of [
      'Oleksii Andrusenko',
      'Serednyak T. K., Dnipro, Ukraine',
      'AVELaunch Books',
      '2025',
      '104',
      'E-book',
      'Ukrainian',
      '978-617-8648-79-4',
    ]) {
      expect(within(details).getByText(value)).toBeInTheDocument();
    }
  });

  it('does not link to a download', () => {
    const { container } = render(<BookSection />);

    expect(container.querySelector('a')).toBeNull();
  });

  it('emits Book structured data authored by the site owner', () => {
    const { container } = render(<BookSection />);
    const data = readBookSchema(container);

    expect(data['@type']).toBe('Book');
    expect(data['@id']).toBe(`${SITE_URL}/#book`);
    expect(data.isbn).toBe('978-617-8648-79-4');
    expect(data.numberOfPages).toBe(104);
    expect(data.bookFormat).toBe('https://schema.org/EBook');
    expect(data.inLanguage).toBe('uk');
    expect(data.datePublished).toBe('2025');
    expect(data.author['@id']).toBe(`${SITE_URL}/#person`);
    expect(data.publisher.name).toBe('Serednyak T. K.');
    expect(data.image).toBe(
      `${SITE_URL}/images/book/inbound-marketing-cover.jpg`,
    );
  });
});
