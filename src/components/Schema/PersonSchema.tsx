import contact from '@/data/contact';
import degrees from '@/data/resume/degrees';
import { skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

const BIRTH_DATE = '1987-06-19';

function organization(name: string, url?: string) {
  return { '@type': 'Organization', name, ...(url && { url }) };
}

/**
 * ProfilePage + Person JSON-LD. Career history uses the schema.org Role
 * pattern: each EmployeeRole repeats `worksFor` and adds dates and title.
 */
export default function PersonSchema() {
  const socialLinks = contact
    .filter((item) => !item.link.startsWith('mailto:'))
    .map((item) => item.link);

  const emailItem = contact.find((item) => item.link.startsWith('mailto:'));
  const email = emailItem?.link.replace('mailto:', '');

  const currentJob = work[0];

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    givenName: 'Oleksii',
    familyName: 'Andrusenko',
    url: SITE_URL,
    image: `${SITE_URL}/images/me.jpg`,
    jobTitle: currentJob.position,
    ...(email && { email }),
    sameAs: socialLinks,
    birthDate: BIRTH_DATE,
    birthPlace: {
      '@type': 'Place',
      name: 'Dnipro, Ukraine',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dnipro',
        addressCountry: 'UA',
      },
    },
    nationality: { '@type': 'Country', name: 'Ukraine' },
    worksFor: work.map((job) => ({
      '@type': 'EmployeeRole',
      roleName: job.position,
      startDate: job.startDate,
      ...(job.endDate && { endDate: job.endDate }),
      worksFor: organization(job.name, job.url),
    })),
    alumniOf: degrees.map((degree) => ({
      '@type': 'OrganizationRole',
      ...(degree.startYear && { startDate: String(degree.startYear) }),
      endDate: String(degree.year),
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: degree.school,
        ...(degree.schoolFormerName && {
          alternateName: degree.schoolFormerName,
        }),
        url: degree.link,
        ...(degree.faculty && {
          department: organization(degree.faculty, degree.facultyLink),
        }),
      },
    })),
    hasCredential: degrees.map((degree) => ({
      '@type': 'EducationalOccupationalCredential',
      name: degree.degree,
      credentialCategory: 'degree',
      recognizedBy: organization(degree.school, degree.link),
    })),
    knowsAbout: skills.map((skill) => skill.title),
  };

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}/`,
    mainEntity: person,
  };

  return <JsonLd data={profilePage} />;
}
