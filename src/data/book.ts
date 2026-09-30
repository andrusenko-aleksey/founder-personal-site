export interface BookPart {
  title: string;
  chapters: string[];
}

export interface BookOffer {
  seller: string;
  url: string;
  /** Leave unset until the listing price is confirmed; schema omits it then. */
  price?: string;
  priceCurrency?: string;
}

export interface Book {
  title: string;
  /** English rendering of the original title. */
  titleEnglish: string;
  author: string;
  description: string;
  cover: string;
  publisher: string;
  editor: string;
  placeOfPublication: string;
  year: number;
  pages: number;
  isbn: string;
  format: string;
  language: string;
  languageCode: string;
  copyright: string;
  /** Where to buy the book; no download links. */
  offers: BookOffer[];
  parts: BookPart[];
}

const book: Book = {
  title: 'Inbound-маркетинг для IT-сервісних та SaaS-компаній',
  titleEnglish: 'Inbound Marketing for IT Service and SaaS Companies',
  author: 'Oleksii Andrusenko',
  description: `A practical guide for founders and marketing leaders at IT service and SaaS
    companies who want to replace scattered marketing activity with a steady system for
    winning clients through expertise and trust. Drawing on 15+ years of hands-on work, I share
    the mistakes, insights and client cases behind that system: finding a niche and an ideal
    customer profile, content that sells, SEO as an investment, distribution, visibility in
    AI search, and the founder's role in keeping inbound going for the long run.`,
  cover: '/images/book/inbound-marketing-cover.jpg',
  publisher: 'Serednyak T. K.',
  editor: 'AVELaunch Books',
  placeOfPublication: 'Dnipro, Ukraine',
  year: 2025,
  pages: 104,
  isbn: '978-617-8648-79-4',
  format: 'E-book',
  language: 'Ukrainian',
  languageCode: 'uk',
  copyright: '© 2025 Oleksii Andrusenko',
  offers: [
    {
      seller: 'Amazon',
      url: 'https://www.amazon.com/dp/6178648790',
    },
  ],
  parts: [
    {
      title: 'The old map leads off a cliff',
      chapters: [
        'A new era of marketing',
        'Marketing challenges for IT service and SaaS companies',
      ],
    },
    {
      title: 'Where to start: focus as the key to success',
      chapters: ['Niching: riches in niches', 'ICP: know who buys from you'],
    },
    {
      title: 'How inbound marketing works in 2025',
      chapters: [
        'Inbound as a system, not a toolset',
        'Inbound is not advertising',
        'Content that sells',
        'SEO as an investment, not magic',
        'Distribution: how to get seen',
        'Digital presence in the age of AI',
      ],
    },
    {
      title: 'Building inbound marketing is a team game',
      chapters: [
        'In-house team or agency?',
        'The founder as the engine of inbound',
        'How to keep momentum (and not give up)',
      ],
    },
  ],
};

export default book;
