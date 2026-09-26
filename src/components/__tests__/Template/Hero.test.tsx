import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Oleksii Andrusenko');
  });

  it('renders the tagline with Growpad link', () => {
    render(<Hero />);

    const growpadLink = screen.getByRole('link', { name: /^growpad$/i });
    expect(growpadLink).toHaveAttribute('href', 'https://growpad.pro');
    expect(growpadLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(screen.getByText('16+ years in SEO')).toBeInTheDocument();
    expect(screen.getByText('50+ SaaS & tech teams grown')).toBeInTheDocument();
    expect(
      screen.getByText('37+ five-star Clutch reviews'),
    ).toBeInTheDocument();
    expect(document.querySelectorAll('.hero-chip')).toHaveLength(3);
  });

  it('renders a jump button for every section', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: 'About Me' });
    expect(aboutButton).toHaveAttribute('href', '#about');
    expect(aboutButton).toHaveClass('button-primary');

    for (const [label, href] of [
      ['Experience', '#experience'],
      ['Skills', '#skills'],
      ['Projects', '#projects'],
      ['Writing', '#writing'],
      ['Contact', '#contact'],
    ]) {
      const button = screen.getByRole('link', { name: label });
      expect(button).toHaveAttribute('href', href);
      expect(button).toHaveClass('button-secondary');
    }
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
