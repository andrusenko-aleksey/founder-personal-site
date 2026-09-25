/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL =
  'https://andrusenko-aleksey.github.io/founder-personal-site';
export const AUTHOR_NAME = 'Oleksii Andrusenko';
export const TWITTER_HANDLE = '@Shiversok';

// Next.js prefixes <Link> and _next assets, but not raw <img>/<a> paths.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
