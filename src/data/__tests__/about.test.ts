import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Oleksii Andrusenko');
    expect(aboutMarkdown).toContain('[GrowPad](https://growpad.pro)');
  });

  it('contains the journey section in chronological order', () => {
    expect(aboutMarkdown).toContain('# My Journey');
    expect(aboutMarkdown).toContain('[Livepage](https://livepage.net)');
    expect(aboutMarkdown.indexOf('**2010:**')).toBeLessThan(
      aboutMarkdown.indexOf('**2020:**'),
    );
  });

  it('contains the today section', () => {
    expect(aboutMarkdown).toContain('# Today');
    expect(aboutMarkdown).toContain('team of 10 inbound marketing specialists');
    expect(aboutMarkdown).toContain('Alicante, Spain');
  });

  it('contains the results section', () => {
    expect(aboutMarkdown).toContain('# Results');
    expect(aboutMarkdown).toContain('30+ verified five-star reviews');
  });

  it('contains the outside work section', () => {
    expect(aboutMarkdown).toContain('# Outside Work');
    expect(aboutMarkdown).toContain('Bosphorus');
  });

  it('contains the elsewhere section', () => {
    expect(aboutMarkdown).toContain('# Elsewhere');
    expect(aboutMarkdown).toContain('https://clutch.co/profile/growpad');
  });

  it('has sections in the expected order', () => {
    const headings = Array.from(
      aboutMarkdown.matchAll(/^# (.+)$/gm),
      (match) => match[1],
    );

    expect(headings).toEqual([
      'Intro',
      'My Journey',
      'Today',
      'Results',
      'Outside Work',
      'Elsewhere',
    ]);
  });

  it('contains valid markdown links', () => {
    // Check for markdown link format [text](url)
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(5);
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(5);
  });
});
