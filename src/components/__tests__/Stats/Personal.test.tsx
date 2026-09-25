import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays years of experience', () => {
    render(<Personal />);

    expect(
      screen.getByText('Years in SEO and growth marketing'),
    ).toBeInTheDocument();
    expect(screen.getByText('16+')).toBeInTheDocument();
  });

  it('displays Clutch reviews linked to the Clutch profile', () => {
    render(<Personal />);

    expect(screen.getByText('Five-star reviews on Clutch')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '37+' })).toHaveAttribute(
      'href',
      'https://clutch.co/profile/growpad',
    );
  });

  it('displays current city', () => {
    render(<Personal />);

    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText('Alicante, Spain')).toBeInTheDocument();
  });

  it('renders one row per stat', () => {
    render(<Personal />);

    const body = document.querySelector('.stat-table tbody');
    expect(body?.querySelectorAll('tr')).toHaveLength(5);
  });
});
