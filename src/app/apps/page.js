import Image from 'next/image';
import Link from 'next/link';
import AnimatedWordmark from '../components/AnimatedWordmark';
import SiteNav from '../components/SiteNav';
import { buildMetadata } from '../lib/site';
import plantIdImage from '../assets/plantId.png';
import slowpulseImage from '../assets/slowpulse.png';
import medMinderImage from '../assets/medminder.png';
import mostlinkImage from '../assets/mostlink.png';
import autoDarkModeImage from '../assets/autodarkmode.png';
import appStoreBadge from '../assets/app_store.svg';
import googlePlayBadge from '../assets/google_play.png';

export const metadata = buildMetadata({
  title: 'Our Apps',
  description:
    'Every product BitLion ships: Budget Plant ID, SlowPulse, and Med Minder ' +
    'for iPhone and Android, the Mostlink web service, and the Auto Dark Mode ' +
    'Chrome extension.',
  path: '/apps',
});

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#33F0CE]">{title}</h2>
      <p className="mt-2 text-gray-400">{subtitle}</p>
    </div>
  );
}

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav current="/apps" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <AnimatedWordmark className="mx-auto w-full max-w-[240px]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Our Apps
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Mobile apps, web services, and browser extensions for every aspect of your life
          </p>
        </div>

        {/* App Showcase */}
        <div className="max-w-6xl mx-auto">
          {/* ============================ Apps ============================ */}
          <SectionHeading title="Apps" subtitle="For iPhone and Android" />

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* App Screenshot */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto max-w-sm">
                    <a href="https://apps.apple.com/us/app/budget-plant-id/id6747782540" target="_blank">
                        <Image 
                            src={plantIdImage} 
                            alt="Budget Plant ID App Screenshot" 
                            className="rounded-2xl shadow-2xl"
                            width={300}
                            height={600}
                        />
                    </a>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
                </div>
              </div>

              {/* App Info */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  <a href="https://www.budgetplantid.com/" target="_blank" className="hover:text-[#33F0CE] transition-colors duration-200">
                    Budget Plant ID
                  </a>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Your pocket-sized plant identification companion! Snap a photo of any plant and get instant, accurate identification powered by advanced AI technology.
                </p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#33F0CE]">Features:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Quick plant identification
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      High accuracy AI recognition
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Plant care tips and toxicity information
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      User-friendly interface
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      No expensive subscription!
                    </li>
                  </ul>
                </div>

                {/* App Store Badge */}
                <div className="flex justify-center md:justify-start">
                  <a href="https://apps.apple.com/us/app/budget-plant-id/id6747782540" className="inline-block transform hover:scale-105 transition-transform duration-200">
                    <Image 
                      src={appStoreBadge} 
                      alt="Download on the App Store" 
                      width={150} 
                      height={50}
                      className="h-12 w-auto"
                    />
                  </a>
                  {/*
                  <a href="https://play.google.com/store/apps/details?id=com.thebitlion.plantidentifierflutter" className="inline-block transform hover:scale-105 transition-transform duration-200">
                    <Image
                      src={googlePlayBadge}
                      alt="Get it on Google Play"
                      width={150}
                      height={50}
                      className="h-12 w-auto ml-4"
                    />
                  </a>
                  */}
                </div>
                <p className="text-gray-400 mt-4">
                  Learn more at{' '}
                  <a href="https://www.budgetplantid.com/" target="_blank" className="text-[#33F0CE] hover:underline">
                    budgetplantid.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mt-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* App Screenshot */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto max-w-sm">
                    <a href="https://www.slowpulse.app" target="_blank">
                        <Image 
                            src={slowpulseImage} 
                            alt="SlowPulse App Screenshot" 
                            className="rounded-2xl shadow-2xl"
                            width={300}
                            height={600}
                        />
                    </a>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
                </div>
              </div>

              {/* App Info */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  <a href="https://www.slowpulse.app" target="_blank" className="hover:text-[#33F0CE] transition-colors duration-200">
                    SlowPulse
                  </a>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Impulse buys and endless scrolling start with a single tap. SlowPulse steps in right before it — a short pause, a question worth answering, and a record of every time you chose differently.
                </p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#33F0CE]">Features:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      A pause screen before you open the apps you choose to guard
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Tailored prompts for shopping, food delivery, and social
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      See purchases paused, opens avoided, and money not spent
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Your data stays on your device — syncing is optional
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Available on iOS, with Android coming soon
                    </li>
                  </ul>
                </div>

                {/* App Store Badge */}
                <div className="flex justify-center md:justify-start">
                  <a href="https://apps.apple.com/us/app/slowpulse/id6804510242" target="_blank" className="inline-block transform hover:scale-105 transition-transform duration-200">
                    <Image 
                      src={appStoreBadge} 
                      alt="Download on the App Store" 
                      width={150} 
                      height={50}
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  Learn more at{' '}
                  <a href="https://www.slowpulse.app" target="_blank" className="text-[#33F0CE] hover:underline">
                    slowpulse.app
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mt-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* App Screenshot */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto max-w-sm">
                    <a href="https://getmedminder.app" target="_blank">
                        <Image 
                            src={medMinderImage} 
                            alt="Med Minder App Screenshot" 
                            className="rounded-2xl shadow-2xl"
                            width={300}
                            height={600}
                        />
                    </a>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
                </div>
              </div>

              {/* App Info */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  <a href="https://getmedminder.app" target="_blank" className="hover:text-[#33F0CE] transition-colors duration-200">
                    Med Minder
                  </a>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Never miss a dose. Add what you take and when, get a reminder at every scheduled time, and tap once to log it. Free and ad-supported, with a one-off $0.99 purchase to remove the ads.
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#33F0CE]">Features:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Unlimited medications, any number of times a day
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Reminders scheduled on your device, so they fire offline
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Tap to mark a dose taken or skipped, with 7-day adherence
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Optional sign-in syncs your schedule to a new phone
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      No subscription, and nothing held back behind one
                    </li>
                  </ul>
                </div>

                {/* Store badges — Med Minder has not shipped yet */}
                <div className="flex justify-center md:justify-start">
                  <span className="inline-block rounded-lg border border-[#33F0CE]/40 px-4 py-2 text-sm text-[#33F0CE]">
                    Coming soon to the App Store and Google Play
                  </span>
                </div>
                <p className="text-gray-400 mt-4">
                  Learn more at{' '}
                  <a href="https://getmedminder.app" target="_blank" className="text-[#33F0CE] hover:underline">
                    getmedminder.app
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* ============================ SaaS ============================ */}
          <div className="mt-20">
            <SectionHeading title="SaaS" subtitle="Web services you can sign up for today" />
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Product Screenshot */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto w-full">
                    <a href="https://mostlink.co" target="_blank">
                        <Image 
                            src={mostlinkImage} 
                            alt="Mostlink Screenshot" 
                            className="rounded-2xl shadow-2xl w-full h-auto"
                            width={953}
                            height={463}
                        />
                    </a>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  <a href="https://mostlink.co" target="_blank" className="hover:text-[#33F0CE] transition-colors duration-200">
                    Mostlink
                  </a>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  One link for everything you do. Build a link page that actually looks like you — your colors, your gradients, your header — and put it in every bio you have.
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#33F0CE]">Features:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Unlimited links on a page you design yourself
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Custom colors, gradients, and animated backgrounds
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      A free mostl.ink address, or bring your own domain
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Built-in analytics for page views and link clicks
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Run more than one page from a single account
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center md:justify-start">
                  <a href="https://mostlink.co" target="_blank" className="inline-block px-6 py-3 bg-[#33F0CE] text-black font-semibold rounded-lg hover:bg-[#2cd9b9] transition-colors duration-200">
                    Build your page
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  Learn more at{' '}
                  <a href="https://mostlink.co" target="_blank" className="text-[#33F0CE] hover:underline">
                    mostlink.co
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* ====================== Chrome Extensions ====================== */}
          <div className="mt-20">
            <SectionHeading title="Chrome Extensions" subtitle="Small tools that live in your browser" />
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Extension Screenshot */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto w-full">
                    <a href="https://chromewebstore.google.com/detail/auto-dark-mode/ececpikikiadgencgepkdkafekilbakj" target="_blank">
                        <Image 
                            src={autoDarkModeImage} 
                            alt="A website turned dark by the Auto Dark Mode extension" 
                            className="rounded-2xl shadow-2xl w-full h-auto"
                            width={952}
                            height={464}
                        />
                    </a>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
                </div>
              </div>

              {/* Extension Info */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  <a href="https://autodarkmode.com" target="_blank" className="hover:text-[#33F0CE] transition-colors duration-200">
                    Auto Dark Mode
                  </a>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Plenty of sites still have no dark mode. Auto Dark Mode gives them one — it spots a page that is still blinding white and turns it dark, while leaving the sites that already got it right alone.
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#33F0CE]">Features:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Turns light websites dark automatically
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Leaves sites that are already dark untouched
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Photos and videos keep their true colors
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Switch it on or off per site, from the toolbar
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Free for up to 10 sites — $0.99/month or $4.99/year for unlimited
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center md:justify-start">
                  <a href="https://chromewebstore.google.com/detail/auto-dark-mode/ececpikikiadgencgepkdkafekilbakj" target="_blank" className="inline-block px-6 py-3 bg-[#33F0CE] text-black font-semibold rounded-lg hover:bg-[#2cd9b9] transition-colors duration-200">
                    Add to Chrome
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  Learn more at{' '}
                  <a href="https://autodarkmode.com" target="_blank" className="text-[#33F0CE] hover:underline">
                    autodarkmode.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            More amazing apps coming soon!
          </p>
          <Link href="/support" className="inline-block px-6 py-3 bg-[#33F0CE] text-black font-semibold rounded-lg hover:bg-[#2cd9b9] transition-colors duration-200">
            Get Support
          </Link>
        </div>
      </div>
    </div>
  );
}
