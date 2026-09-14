import { SITE_URL } from './lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Nothing under /api is a page; keep it out of the index.
        disallow: '/api/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
