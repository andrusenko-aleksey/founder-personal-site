import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Education from '../../Resume/Education';
import Degree from '../../Resume/Education/Degree';

const mockDegrees = [
  {
    school: 'Stanford University',
    degree: 'M.S. Computer Science',
    link: 'https://stanford.edu',
    year: 2020,
  },
  {
    school: 'MIT',
    degree: 'B.S. Computer Science',
    link: 'https://mit.edu',
    year: 2016,
  },
];

describe('Education', () => {
  it('renders the education section with title', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();
  });

  it('renders all degrees', () => {
    render(<Education data={mockDegrees} />);

    expect(screen.getByText('M.S. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('B.S. Computer Science')).toBeInTheDocument();
  });

  it('renders school links', () => {
    render(<Education data={mockDegrees} />);

    const stanfordLink = screen.getByRole('link', { name: /stanford/i });
    expect(stanfordLink).toHaveAttribute('href', 'https://stanford.edu');

    const mitLink = screen.getByRole('link', { name: /mit/i });
    expect(mitLink).toHaveAttribute('href', 'https://mit.edu');
  });

  it('has anchor link for navigation', () => {
    render(<Education data={mockDegrees} />);

    const anchor = document.getElementById('education');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Degree', () => {
  const mockDegree = {
    school: 'Stanford University',
    degree: 'M.S. Computer Science',
    link: 'https://stanford.edu',
    year: 2020,
  };

  it('renders degree title', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'M.S. Computer Science',
    );
  });

  it('renders school name with link', () => {
    render(<Degree data={mockDegree} />);

    const link = screen.getByRole('link', { name: /stanford/i });
    expect(link).toHaveAttribute('href', 'https://stanford.edu');
  });

  it('displays year', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByText(/2020/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Degree data={mockDegree} />);

    const article = document.querySelector('article.degree-container');
    expect(article).toBeInTheDocument();
  });
  it('shows faculty, former school name and study years when present', () => {
    render(
      <Degree
        data={{
          school: 'Oles Honchar Dnipro National University',
          schoolFormerName: 'Dnipropetrovsk National University',
          faculty: 'Faculty of Physics, Electronics and Computer Systems',
          facultyLink: 'https://www.dnu.dp.ua/en/faculty',
          degree: 'Master’s degree, Physics and Electronics',
          link: 'https://www.dnu.dp.ua',
          startYear: 2004,
          year: 2009,
        }}
      />,
    );

    expect(
      screen.getByRole('link', {
        name: 'Faculty of Physics, Electronics and Computer Systems',
      }),
    ).toHaveAttribute('href', 'https://www.dnu.dp.ua/en/faculty');
    expect(
      screen.getByText(/then Dnipropetrovsk National University/),
    ).toBeInTheDocument();
    expect(document.querySelector('time[datetime="2004"]')).toBeInTheDocument();
    expect(document.querySelector('time[datetime="2009"]')).toBeInTheDocument();
  });
});
