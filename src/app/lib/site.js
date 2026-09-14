// Single source of truth for the things that have to agree across every route:
// canonical URLs, metadata defaults, JSON-LD, the sitemap and robots.txt.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://thebitlion.com'
).replace(/\/$/, '');

export const SITE_NAME = 'BitLion, LLC';
export const SITE_SHORT_NAME = 'BitLion';
export const CONTACT_EMAIL = 'grant@thebitlion.com';

export const SITE_DESCRIPTION =
  'BitLion, LLC is an app development studio. We design and ship our own ' +
  'mobile apps for iPhone and Android, web services you can sign up for ' +
  'today, and small tools that live in your browser.';

export function absoluteUrl(path = '/') {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Rendered by app/opengraph-image.js. Declared explicitly rather than left to
// the file convention: a route that defines its own `openGraph` block replaces
// the inherited one wholesale, and the image goes with it.
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — App, Web, and Browser Extension Developers`,
};

/**
 * Builds a complete per-route metadata object: title, description, canonical
 * URL, Open Graph and Twitter card.
 */
export function buildMetadata({ title, description, path, type = 'website' }) {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

// What we make. Mirrors the sections on /apps so the two pages cannot drift.
export const SERVICES = [
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    tagline: 'For iPhone and Android',
    description:
      'Consumer apps we build end to end — design, development, and support. ' +
      'No expensive subscriptions, no data resale.',
    products: ['Budget Plant ID', 'SlowPulse', 'Med Minder'],
  },
  {
    id: 'web-services',
    name: 'Web Services',
    tagline: 'SaaS you can sign up for today',
    description:
      'Hosted products that run in any browser, with the accounts, billing, ' +
      'and infrastructure already taken care of.',
    products: ['Mostlink'],
  },
  {
    id: 'browser-extensions',
    name: 'Browser Extensions',
    tagline: 'Small tools that live in your browser',
    description:
      'Focused Chrome extensions that fix one annoyance properly and then ' +
      'get out of the way.',
    products: ['Auto Dark Mode'],
  },
];

// Every indexable route, used by both the sitemap and internal navigation.
export const ROUTES = [
  { path: '/', label: 'Home', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/apps', label: 'Our Apps', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/support', label: 'Support', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacy', label: 'Privacy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms', label: 'Terms', priority: 0.4, changeFrequency: 'yearly' },
];
