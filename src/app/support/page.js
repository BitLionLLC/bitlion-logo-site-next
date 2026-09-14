import SupportForm from '../components/Support';
import SiteNav from '../components/SiteNav';
import { CONTACT_EMAIL, buildMetadata } from '../lib/site';

export const metadata = buildMetadata({
  title: 'Support',
  description:
    'Get help with a BitLion app. Send us a message about a bug, a ' +
    'question, or a privacy request, or email us directly.',
  path: '/support',
});

export default function SupportPage() {
  return (
    <div className="App">
      <SiteNav current="/support" />

      <main className="relative z-10 mx-auto max-w-[600px] px-6 pb-16 pt-24 text-left">
        <h1 className="text-center text-4xl font-bold text-[#33F0CE]">
          Support
        </h1>
        <p className="mt-6 text-center leading-relaxed text-gray-300">
          Questions about one of our apps, a bug to report, or a privacy
          request? Fill in the form below and we will get back to you. You can
          also email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#33F0CE] hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <SupportForm />
      </main>
    </div>
  );
}
