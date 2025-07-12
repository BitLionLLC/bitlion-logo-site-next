'use client'

import Image from 'next/image';
import Link from 'next/link';
import plantIdImage from '../assets/plantId.png';
import astralTarotImage from '../assets/astralTarot.png';
import appStoreBadge from '../assets/app_store.svg';
import googlePlayBadge from '../assets/google_play.png';
import logoGif from '../assets/logo.gif';

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="support-nav" style={{ position: "fixed", display: "flex", gap: "0.5rem"}}>
        <Link href="/" className="support-link">Home</Link>
        <Link href="/support" className="support-link">Support</Link>
        <Link href="/privacy" className="support-link">Privacy</Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image src={logoGif} alt="BitLion Logo" className="mx-auto" width={120} height={120} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Our Apps
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover innovative mobile applications for every aspect of your life
          </p>
        </div>

        {/* App Showcase */}
        <div className="max-w-6xl mx-auto">
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
                  Budget Plant ID
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
                  <a href="https://play.google.com/store/apps/details?id=com.thebitlion.plantidentifierflutter" className="inline-block transform hover:scale-105 transition-transform duration-200">
                    <Image 
                      src={googlePlayBadge} 
                      alt="Get it on Google Play" 
                      width={150} 
                      height={50}
                      className="h-12 w-auto ml-4"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mt-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* App Screenshot */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto max-w-sm">
                    <a href="https://apps.apple.com/us/app/budget-plant-id/id6747782540" target="_blank">
                        <Image 
                            src={astralTarotImage} 
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
                  Astral Tarot Reader
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Receive guidance from the Universe with the help of the Tarot!
                </p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#33F0CE]">Features:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Upload a photo from your gallery or camera for a reading
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Or do a random reading
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      Deep insights into your questions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      1, 3, 4, and 10 card spreads
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3"></span>
                      No expensive subscription!
                    </li>
                  </ul>
                </div>

                {/* App Store Badge */}
                <div className="flex justify-center md:justify-start">
                  <a href="https://play.google.com/store/apps/details?id=com.thebitlion.astraltarotreader" className="inline-block transform hover:scale-105 transition-transform duration-200">
                    <Image 
                      src={googlePlayBadge} 
                      alt="Get it on Google Play" 
                      width={150} 
                      height={50}
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
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