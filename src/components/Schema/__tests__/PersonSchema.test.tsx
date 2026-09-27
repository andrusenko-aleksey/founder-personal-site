import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import work from '@/data/resume/work';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import PersonSchema from '../PersonSchema';

function readSchema() {
  const { container } = render(<PersonSchema />);
  const script = container.querySelector('script[type="application/ld+json"]');
  return JSON.parse(script?.innerHTML || '{}');
}

describe('PersonSchema', () => {
  it('wraps the person in a ProfilePage', () => {
    const data = readSchema();

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('ProfilePage');
    expect(data.url).toBe(`${SITE_URL}/`);
    expect(data.mainEntity['@type']).toBe('Person');
  });

  it('describes the person with name, url and image', () => {
    const person = readSchema().mainEntity;

    expect(person.name).toBe(AUTHOR_NAME);
    expect(person.givenName).toBe('Oleksii');
    expect(person.familyName).toBe('Andrusenko');
    expect(person.url).toBe(SITE_URL);
    expect(person.image).toBe(`${SITE_URL}/images/me.jpg`);
    expect(person.jobTitle).toBe('Founder & CEO');
  });

  it('includes birth date and birthplace', () => {
    const person = readSchema().mainEntity;

    expect(person.birthDate).toBe('1987-06-19');
    expect(person.birthPlace).toEqual(
      expect.objectContaining({
        '@type': 'Place',
        name: 'Dnipro, Ukraine',
        address: expect.objectContaining({
          addressLocality: 'Dnipro',
          addressCountry: 'UA',
        }),
      }),
    );
    expect(person.nationality.name).toBe('Ukraine');
  });

  it('includes social links in sameAs', () => {
    const person = readSchema().mainEntity;

    expect(Array.isArray(person.sameAs)).toBe(true);
    expect(person.sameAs).toContain(
      'https://www.linkedin.com/in/oleksiiandrusenko/',
    );
  });

  it('marks up every position as an EmployeeRole with dates', () => {
    const roles = readSchema().mainEntity.worksFor;

    expect(roles).toHaveLength(work.length);
    expect(roles[0]).toEqual({
      '@type': 'EmployeeRole',
      roleName: 'Founder & CEO',
      startDate: '2020-08-01',
      worksFor: {
        '@type': 'Organization',
        name: 'GrowPad',
        url: 'https://growpad.pro',
      },
    });
    for (const [i, role] of roles.entries()) {
      expect(role.roleName).toBe(work[i].position);
      expect(role.worksFor.name).toBe(work[i].name);
      expect(role.endDate).toBe(work[i].endDate);
    }
  });

  it('omits the organization url when a position has none', () => {
    const roles = readSchema().mainEntity.worksFor;
    const dialog = roles.find(
      (role: { worksFor: { name: string } }) => role.worksFor.name === 'Dialog',
    );

    expect(dialog.worksFor).not.toHaveProperty('url');
  });

  it('includes education with faculty and years', () => {
    const person = readSchema().mainEntity;
    const [education] = person.alumniOf;

    expect(education['@type']).toBe('OrganizationRole');
    expect(education.startDate).toBe('2004');
    expect(education.endDate).toBe('2009');
    expect(education.alumniOf).toEqual(
      expect.objectContaining({
        '@type': 'CollegeOrUniversity',
        name: 'Oles Honchar Dnipro National University',
        alternateName: 'Dnipropetrovsk National University',
      }),
    );
    expect(education.alumniOf.department.name).toBe(
      'Faculty of Physics, Electronics and Computer Systems',
    );
    expect(person.hasCredential[0]['@type']).toBe(
      'EducationalOccupationalCredential',
    );
  });

  it('lists skills in knowsAbout', () => {
    const person = readSchema().mainEntity;

    expect(person.knowsAbout).toContain('SaaS SEO');
  });
});
