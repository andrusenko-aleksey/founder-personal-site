export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  {
    title: 'SaaS SEO',
    competency: 5,
    category: ['SEO'],
  },
  {
    title: 'Technical SEO Audits',
    competency: 5,
    category: ['SEO'],
  },
  {
    title: 'Link Building',
    competency: 5,
    category: ['SEO'],
  },
  {
    title: 'Keyword & Content Architecture',
    competency: 5,
    category: ['SEO', 'Content'],
  },
  {
    title: 'LLMO',
    competency: 5,
    category: ['AI Search'],
  },
  {
    title: 'GEO / AEO',
    competency: 5,
    category: ['AI Search'],
  },
  {
    title: 'Google AI Overviews',
    competency: 4,
    category: ['AI Search'],
  },
  {
    title: 'AI-Optimized Content',
    competency: 5,
    category: ['AI Search', 'Content'],
  },
  {
    title: 'Content Strategy',
    competency: 5,
    category: ['Content'],
  },
  {
    title: 'B2B Content Marketing',
    competency: 5,
    category: ['Content'],
  },
  {
    title: 'Inbound Marketing',
    competency: 5,
    category: ['Growth'],
  },
  {
    title: 'Organic Pipeline & MQL/SQL Growth',
    competency: 5,
    category: ['Growth'],
  },
  {
    title: 'Go-to-Market for EU & US',
    competency: 4,
    category: ['Growth'],
  },
  {
    title: 'Agency Leadership',
    competency: 5,
    category: ['Leadership'],
  },
  {
    title: 'Client Strategy',
    competency: 5,
    category: ['Leadership'],
  },
  {
    title: 'Business Development',
    competency: 5,
    category: ['Leadership'],
  },
  {
    title: 'Team Building',
    competency: 4,
    category: ['Leadership'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from app/styles/tokens/colors.css (GrowPad brand palette):
 * --color-skill-1: #23139d, --color-skill-2: #0051f3, --color-skill-3: #4bd8f9
 * --color-skill-4: #ffa300, --color-skill-5: #ff7d64, --color-skill-6: #142b4d
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #23139d indigo
  { color: 'var(--color-skill-2)', textColor: 'light' }, // #0051f3 blue
  { color: 'var(--color-skill-3)', textColor: 'dark' }, // #4bd8f9 cyan
  { color: 'var(--color-skill-4)', textColor: 'dark' }, // #ffa300 amber
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #ff7d64 coral
  { color: 'var(--color-skill-6)', textColor: 'light' }, // #142b4d navy
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
