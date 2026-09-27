import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Navigation from '../../Template/Navigation';

// Mock usePathname to control active state
const mockPathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

function placeSection(id: string, top: number) {
  const el = document.createElement('div');
  el.id = id;
  el.getBoundingClientRect = () => ({ top }) as DOMRect;
  document.body.appendChild(el);
}

describe('Navigation', () => {
  afterEach(() => {
    for (const id of ['about', 'experience', 'skills']) {
      document.getElementById(id)?.remove();
    }
  });

  beforeEach(() => {
    mockPathname.mockReturnValue('/');

    // Mock matchMedia for ThemeToggle
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('renders the logo link to home', () => {
    render(<Navigation />);
    const logo = screen.getByRole('link', { name: /oa/i });
    expect(logo).toHaveAttribute('href', '/');
  });

  it('renders a link to every home page section', () => {
    render(<Navigation />);

    for (const [label, href] of [
      ['About', '/#about'],
      ['Book', '/#book'],
      ['Experience', '/#experience'],
      ['Skills', '/#skills'],
      ['Projects', '/#projects'],
      ['Writing', '/#writing'],
      ['Contact', '/#contact'],
    ]) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        href,
      );
    }
    expect(screen.queryByRole('link', { name: /stats/i })).toBeNull();
  });

  it('highlights the section that has scrolled past the top of the view', async () => {
    placeSection('about', -500);
    placeSection('experience', 100);
    placeSection('skills', 900);

    render(<Navigation />);

    const experience = screen.getByRole('link', { name: 'Experience' });
    await waitFor(() => expect(experience).toHaveClass('active'));
    expect(experience).toHaveAttribute('aria-current', 'location');
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveClass(
      'active',
    );
    expect(screen.getByRole('link', { name: 'Skills' })).not.toHaveClass(
      'active',
    );
  });

  it('does not highlight sections on other pages', async () => {
    mockPathname.mockReturnValue('/writing/some-post');
    placeSection('about', -500);

    render(<Navigation />);

    await new Promise((resolve) => requestAnimationFrame(resolve));
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveClass(
      'active',
    );
  });

  it('renders theme toggle and hamburger menu', () => {
    render(<Navigation />);

    // Theme toggle should be present (placeholder initially due to SSR)
    const navActions = document.querySelector('.nav-actions');
    expect(navActions).toBeInTheDocument();
  });
});
