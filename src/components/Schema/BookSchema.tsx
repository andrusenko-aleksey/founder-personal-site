import book from '@/data/book';
import { SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function BookSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${SITE_URL}/#book`,
    name: book.title,
    alternateName: book.titleEnglish,
    author: {
      '@id': `${SITE_URL}/#person`,
      '@type': 'Person',
      name: book.author,
    },
    description: book.description.replace(/\s+/g, ' ').trim(),
    image: `${SITE_URL}${book.cover}`,
    isbn: book.isbn,
    numberOfPages: book.pages,
    bookFormat: 'https://schema.org/EBook',
    inLanguage: book.languageCode,
    datePublished: String(book.year),
    copyrightYear: book.year,
    copyrightHolder: { '@id': `${SITE_URL}/#person` },
    publisher: {
      '@type': 'Organization',
      name: book.publisher,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dnipro',
        addressCountry: 'UA',
      },
    },
    editor: { '@type': 'Organization', name: book.editor },
    about: ['Inbound marketing', 'SaaS marketing', 'SEO', 'B2B marketing'],
    url: `${SITE_URL}/#book`,
  };

  return <JsonLd data={data} />;
}
