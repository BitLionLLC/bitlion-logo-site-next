import Link from 'next/link';
import { ROUTES } from '../lib/site';

/**
 * Server-rendered site navigation. Takes the current route as a prop rather
 * than reading `usePathname()`, so no page has to become a client component
 * just to hide its own link.
 */
export default function SiteNav({ current }) {
  return (
    <nav className="support-nav" aria-label="Main">
      {ROUTES.filter((route) => route.path !== current).map((route) => (
        <Link key={route.path} href={route.path} className="support-link">
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
