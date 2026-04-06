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
    name: 'Growpad.pro',
    position: 'Founder & CEO',
    url: 'https://growpad.pro',
    startDate: '2022-01-01',
    summary: `Growpad is a B2B SaaS platform that helps startups and growing teams automate their
    outreach, manage leads, and accelerate revenue. Built from zero to a product used by hundreds
    of teams across Europe and beyond.`,
    highlights: [
      'Defined product vision, go-to-market strategy, and company roadmap from day one.',
      'Grew the platform to hundreds of paying customers across Europe and the US.',
      'Led all engineering, product, and growth functions as a solo technical founder.',
      'Built and managed a cross-functional team of engineers, marketers, and customer success.',
      'Raised pre-seed funding and established key partnerships in the Ukrainian tech ecosystem.',
      'Integrated AI-powered features for personalized outreach at scale using LLM APIs.',
    ],
  },
  {
    name: 'Ukrainian Startup Fund',
    position: 'Advisor & Mentor',
    url: 'https://usf.com.ua',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    summary: `Mentored early-stage Ukrainian startups on product development, go-to-market strategy,
    and fundraising. Provided hands-on guidance to teams across B2B SaaS, marketplace, and deep tech verticals.`,
    highlights: [
      'Mentored 10+ early-stage startups through the USF acceleration program.',
      'Conducted product reviews and go-to-market workshops for founding teams.',
      'Helped portfolio companies define pricing, positioning, and initial sales motion.',
    ],
  },
  {
    name: 'Looksery (acquired by Snap Inc.)',
    position: 'Senior Product Manager',
    url: 'https://snap.com',
    startDate: '2018-06-01',
    endDate: '2021-01-01',
    summary: `Looksery was a pioneering computer vision and augmented reality company acquired by
    Snap Inc. in 2015 for $150M. Led product for the AR filters and face-tracking SDK used in Snapchat
    and licensed to third-party developers worldwide.`,
    highlights: [
      'Owned the product roadmap for Snap Camera SDK, used by millions of developers globally.',
      'Led cross-functional teams of engineers, designers, and researchers across Odesa and San Francisco.',
      'Defined and shipped real-time AR effects powering tens of billions of Snaps per day.',
      'Coordinated with Snap HQ to align feature launches with major platform releases.',
    ],
  },
  {
    name: 'Preply',
    position: 'Product Manager',
    url: 'https://preply.com',
    startDate: '2016-03-01',
    endDate: '2018-06-01',
    summary: `Preply is a global language-learning marketplace connecting tutors and students,
    headquartered in New York and Kyiv. Drove growth initiatives across tutor onboarding,
    search and matching, and subscription monetization.`,
    highlights: [
      'Led growth experiments that increased tutor activation rate by 35%.',
      'Redesigned the booking and payment flow, reducing checkout friction and increasing conversion.',
      'Collaborated with data science to build recommendation algorithms for tutor-student matching.',
    ],
  },
  {
    name: 'MacPaw',
    position: 'Growth & Marketing Specialist',
    url: 'https://macpaw.com',
    startDate: '2014-01-01',
    endDate: '2016-03-01',
    summary: `MacPaw is a leading developer of Mac software, including CleanMyMac X and Setapp,
    with over 30 million users worldwide. Drove digital marketing and growth campaigns across
    key product lines.`,
    highlights: [
      'Managed paid acquisition campaigns across Google, Facebook, and Apple Search Ads.',
      'Built and optimized email marketing funnels for onboarding and lifecycle engagement.',
      'Conducted A/B tests on landing pages and in-app upgrade flows to improve conversion.',
    ],
  },
];

export default work;
