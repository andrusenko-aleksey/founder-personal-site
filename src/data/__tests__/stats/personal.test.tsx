import { describe, expect, it } from 'vitest';

import data from '../../stats/personal';

describe('personal stats data', () => {
  it('exports an array of stats', () => {
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  it('each stat has required properties', () => {
    for (const stat of data) {
      expect(stat).toHaveProperty('key');
      expect(stat).toHaveProperty('label');
      expect(typeof stat.label).toBe('string');
    }
  });

  it('has the expected stat keys in order', () => {
    expect(data.map((s) => s.key)).toEqual([
      'experience',
      'companies',
      'reviews',
      'agencies',
      'location',
    ]);
  });

  it('has a years of experience stat', () => {
    const experienceStat = data.find((s) => s.key === 'experience');

    expect(experienceStat).toBeDefined();
    expect(experienceStat!.label).toBe('Years in SEO and growth marketing');
    expect(experienceStat!.value).toBe('16+');
  });

  it('has a companies helped stat', () => {
    const companiesStat = data.find((s) => s.key === 'companies');

    expect(companiesStat).toBeDefined();
    expect(companiesStat!.label).toBe('SaaS and B2B tech companies helped');
    expect(companiesStat!.value).toBe('50+');
  });

  it('has a Clutch reviews stat with a link', () => {
    const reviewsStat = data.find((s) => s.key === 'reviews');

    expect(reviewsStat).toBeDefined();
    expect(reviewsStat!.label).toBe('Five-star reviews on Clutch');
    expect(reviewsStat!.value).toBe('37+');
    expect(reviewsStat!.link).toBe('https://clutch.co/profile/growpad');
  });

  it('has an agencies led stat', () => {
    const agenciesStat = data.find((s) => s.key === 'agencies');

    expect(agenciesStat).toBeDefined();
    expect(agenciesStat!.label).toBe('Marketing agencies led');
    expect(agenciesStat!.value).toBe(2);
  });

  it('has a current location stat', () => {
    const locationStat = data.find((s) => s.key === 'location');

    expect(locationStat).toBeDefined();
    expect(locationStat!.label).toBe('Current city');
    expect(locationStat!.value).toBe('Alicante, Spain');
  });
});
