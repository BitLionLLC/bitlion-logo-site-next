import Image from 'next/image';
import Link from 'next/link';
import logoGif from './assets/logo.gif';
import ScrollLine from './components/ScrollLine';
import SiteNav from './components/SiteNav';
import {
  CONTACT_EMAIL,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  buildMetadata,
} from './lib/site';

export const metadata = {
  ...buildMetadata({
    title: `${SITE_NAME} — App, Web, and Browser Extension Developers`,
    description: SITE_DESCRIPTION,
    path: '/',
  }),
  // The home page carries the full brand name, so opt out of the layout's
  // "%s | BitLion" title template.
  title: {
    absolute: `${SITE_NAME} — App, Web, and Browser Extension Developers`,
  },
};

export default function Home() {
  return (
    <div className="App">
      <SiteNav current="/" />
      <ScrollLine />

      <main className="relative z-10">
        {/* ============================ Hero ============================ */}
        <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24">
          <Image
            src={logoGif}
            alt="BitLion"
            priority
            sizes="(max-width: 768px) 88vw, 640px"
            className="mx-auto h-auto w-full max-w-[640px]"
          />

          <h1 className="mt-10 text-3xl font-bold leading-tight text-white md:text-5xl">
            BitLion builds mobile apps, web services, and browser extensions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            {SITE_DESCRIPTION}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apps"
              className="rounded-lg bg-[#33F0CE] px-6 py-3 font-semibold text-black transition-colors duration-200 hover:bg-[#2cd9b9]"
            >
              See our apps
            </Link>
            <Link
              href="/support"
              className="rounded-lg border border-[#33F0CE] px-6 py-3 font-semibold text-[#33F0CE] transition-colors duration-200 hover:bg-[#33F0CE] hover:text-black"
            >
              Get in touch
            </Link>
          </div>
        </section>

        {/* ========================== What we make ========================== */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="mx-auto max-w-6xl px-6 py-24"
        >
          <h2
            id="services-heading"
            className="text-center text-3xl font-bold text-[#33F0CE] md:text-4xl"
          >
            What we make
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
            Three kinds of product, all designed, built, and supported in house.
          </p>

          <ul className="mt-12 grid list-none gap-8 p-0 md:grid-cols-3">
            {SERVICES.map((service) => (
              <li
                key={service.id}
                className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900 p-8 text-left"
              >
                <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#33F0CE]">
                  {service.tagline}
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-gray-300">
                  {service.description}
                </p>
                <p className="mt-6 text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Includes: </span>
                  {service.products.join(', ')}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link href="/apps" className="text-[#33F0CE] hover:underline">
              Browse everything we ship &rarr;
            </Link>
          </div>
        </section>

        {/* =========================== Contact =========================== */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mx-auto max-w-3xl px-6 py-24 text-center"
        >
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-[#33F0CE] md:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Questions about one of our apps, a bug to report, or a privacy
            request? Send us a message and we will get back to you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/support"
              className="rounded-lg bg-[#33F0CE] px-6 py-3 font-semibold text-black transition-colors duration-200 hover:bg-[#2cd9b9]"
            >
              Contact support
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-lg border border-[#33F0CE] px-6 py-3 font-semibold text-[#33F0CE] transition-colors duration-200 hover:bg-[#33F0CE] hover:text-black"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>

        {/* ============================ Footer ============================ */}
        <footer className="border-t border-gray-800 px-6 py-10 text-sm text-gray-400">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
            <Link href="/apps" className="hover:text-[#33F0CE]">
              Our Apps
            </Link>
            <Link href="/support" className="hover:text-[#33F0CE]">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-[#33F0CE]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#33F0CE]">
              Terms
            </Link>
          </nav>
          <p className="mt-6">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
