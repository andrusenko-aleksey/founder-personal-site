/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'GrowPad',
    position: 'Founder & CEO',
    url: 'https://growpad.pro',
    startDate: '2020-09-01',
    summary: `GrowPad is an inbound growth agency for SaaS and B2B tech companies scaling across EU
    and US markets. We build and run SEO and AI-search strategies that help software brands get
    found and cited wherever buyers search, from Google to ChatGPT, Perplexity and Gemini.`,
    highlights: [
      'Founded GrowPad and built it into a team trusted by 20+ active clients, with 37+ five-star reviews on Clutch.',
      'Helped 50+ SaaS and B2B tech companies turn organic search into predictable pipeline.',
      'Personally lead client strategy and business development.',
      'Built a service stack spanning technical SEO audits, content architecture, AI-optimized content, link building and LLMO/GEO/AEO.',
      'Opened GrowPad’s European headquarters in Alicante, Spain in April 2026.',
      'Recognized on Clutch as a Top SEO Company and Top Link Building Company in Spain (2026).',
    ],
  },
  {
    name: 'Livepage',
    position: 'CEO',
    url: 'https://livepage.net',
    startDate: '2018-12-31',
    endDate: '2020-09-07',
    summary: `Livepage is a digital marketing agency in Dnipro, Ukraine, offering SEO, paid media,
    content marketing and web development.`,
    highlights: [
      'Led the agency while growing 70+ client businesses at the same time across B2B and e-commerce.',
    ],
  },
  {
    name: 'Livepage',
    position: 'Head of SEO Department',
    url: 'https://livepage.net',
    startDate: '2013-02-09',
    endDate: '2018-12-31',
    summary: 'Built and led the SEO department at Livepage.',
  },
];

export default work;
