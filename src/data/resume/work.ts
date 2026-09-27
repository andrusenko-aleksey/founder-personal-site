/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  /** Omit for roles without a company website. */
  url?: string;
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
    startDate: '2020-08-01',
    summary: `An inbound growth agency for SaaS and B2B tech. We help clients become the first
    click when buyers look for a vendor, whether they search on Google or ask ChatGPT, and we
    measure success in MQLs, SQLs, trials and demos rather than impressions. Remote team, based
    in Spain.`,
    highlights: [
      'Manage a team of 10 specialists who work with 20+ active clients every month.',
      'Designed the SEO and LLMO frameworks we use to map content to each stage of the funnel.',
      'Built monitoring for AI citations, tracking how often clients appear in ChatGPT and Perplexity answers.',
      'Run strategic audits, set team direction and support clients through implementation.',
      'Advise SaaS and B2B tech founders and marketing leaders on organic growth strategy.',
      'Speak at industry conferences about SEO, LLMO and staying visible in AI-driven search.',
    ],
  },
  {
    name: 'Livepage',
    position: 'Acting CEO',
    url: 'https://livepage.net',
    startDate: '2019-01-01',
    endDate: '2020-09-01',
    summary: `Ran the Dnipro-based digital marketing agency day to day, leading the team and a
    portfolio of 70+ B2B clients.`,
  },
  {
    name: 'Livepage',
    position: 'Head of Marketing',
    url: 'https://livepage.net',
    startDate: '2017-08-01',
    endDate: '2018-12-31',
    highlights: [
      'Took the agency’s own site from about 150 to 2,300 daily visitors with Russian-language content.',
      'Owned the content plan, research, client communication and distribution.',
      'Got Livepage listed among the top 30 SEO firms worldwide on Clutch.',
    ],
  },
  {
    name: 'Livepage',
    position: 'Head of SEO Department',
    url: 'https://livepage.net',
    startDate: '2013-10-01',
    endDate: '2018-12-31',
    highlights: [
      'Led a team of 18+ SEO specialists serving clients in Russian, Ukrainian and English.',
      'Set up a dedicated link-building department.',
      'Wrote the department’s standard operating procedures and introduced a learning management system for training.',
      'Shaped SEO strategies for clients and supported sales.',
    ],
  },
  {
    name: 'Livepage',
    position: 'SEO Specialist',
    url: 'https://livepage.net',
    startDate: '2013-02-01',
    endDate: '2013-10-01',
    summary: `Ran client SEO projects end to end: strategy, on-site work, keyword research,
    content optimization and link building. The largest sites had over a million pages and
    50,000 daily visits, and some grew search traffic up to 10× in six months.`,
  },
  {
    name: 'Independent web projects',
    position: 'Founder',
    startDate: '2012-01-01',
    endDate: '2020-08-01',
    highlights: [
      'Planned content strategies for English and Russian-language sites.',
      'Grew niche websites from zero to 30,000 daily visitors.',
    ],
  },
  {
    name: 'Softcon (ForexEASystems)',
    position: 'In-house SEO Specialist',
    startDate: '2010-09-01',
    endDate: '2013-01-01',
    summary: `My first SEO role, at a garage-based startup in Dnipro run by an Austrian founder
    selling Forex trading systems. It's where I learned SEO and inbound marketing, and English
    along the way.`,
  },
  {
    name: 'Dialog',
    position: 'Online Chat Administrator',
    startDate: '2008-06-01',
    endDate: '2010-12-01',
    summary: `Ran online chat for visitors and handled client communication, and became one of
    the team's most productive members.`,
  },
];

export default work;
