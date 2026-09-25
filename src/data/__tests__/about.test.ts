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

  it('contains the story section', () => {
    expect(aboutMarkdown).toContain('# My Story');
    expect(aboutMarkdown).toContain('[Livepage](https://livepage.net)');
    expect(aboutMarkdown).toContain('Alicante, Spain');
  });

  it('contains the what I work on section', () => {
    expect(aboutMarkdown).toContain('# What I Work On');
    expect(aboutMarkdown).toContain('AI search visibility');
  });

  it('contains the how we work section', () => {
    expect(aboutMarkdown).toContain('# How We Work');
    expect(aboutMarkdown).toContain('qualified pipeline');
  });

  it('contains the mission section', () => {
    expect(aboutMarkdown).toContain('# Mission');
    expect(aboutMarkdown).toContain('10,000 Ukrainian IT and SaaS founders');
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
      'My Story',
      'What I Work On',
      'How We Work',
      'Mission',
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
