'use client'

import Link from 'next/link';
import Image from 'next/image';
import logoGif from '../assets/logo.gif';

export default function BitLionFeedPublisherPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="support-nav" style={{ position: "fixed", display: "flex", gap: "0.5rem"}}>
        <Link href="/" className="support-link">Home</Link>
        <Link href="/apps" className="support-link">Our Apps</Link>
        <Link href="/support" className="support-link">Support</Link>
        <Link href="/privacy" className="support-link">Privacy</Link>
        <Link href="/terms" className="support-link">Terms</Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image src={logoGif} alt="BitLion Logo" className="mx-auto" width={120} height={120} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            BitLion Feed Publisher
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Upload videos to TikTok directly from your command line
          </p>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#33F0CE]">
                What is BitLion Feed Publisher?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                BitLion Feed Publisher is a powerful command-line tool that allows you to upload videos to TikTok quickly and efficiently. Perfect for content creators, developers, and automation enthusiasts who want to streamline their TikTok workflow.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#33F0CE]">
              Key Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-white">Command Line Interface:</strong> Upload videos directly from your terminal or scripts
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-white">Batch Upload Support:</strong> Upload multiple videos in a single command
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-white">Automation Ready:</strong> Integrate seamlessly into your existing workflows and automation pipelines
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-white">Video Metadata:</strong> Set captions, hashtags, and other video properties via command-line arguments
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-white">Secure Authentication:</strong> Safe and secure TikTok account connection
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#33F0CE] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-white">Cross-Platform:</strong> Works on Windows, macOS, and Linux
                </div>
              </li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#33F0CE]">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Content Creators</h3>
                <p className="text-gray-300">
                  Automate your TikTok uploads and focus on creating great content instead of manual posting.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Developers</h3>
                <p className="text-gray-300">
                  Integrate TikTok uploads into your applications, scripts, and automated workflows.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Social Media Managers</h3>
                <p className="text-gray-300">
                  Schedule and batch upload content efficiently using your existing command-line tools.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Power Users</h3>
                <p className="text-gray-300">
                  Take full control of your TikTok uploads with a flexible, scriptable tool.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Details Section */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#33F0CE]">
              How It Works
            </h2>
            <div className="bg-gray-800 rounded-lg p-6 mb-4">
              <p className="text-gray-300 mb-4">
                BitLion Feed Publisher connects to your TikTok account securely and provides a simple command-line interface for uploading videos. Once configured, you can upload videos with commands like:
              </p>
              <div className="bg-black rounded p-4 font-mono text-sm text-[#33F0CE] border border-gray-700">
                <code>
                  bitlion-feed-publisher upload --video path/to/video.mp4 --caption "Your caption here" --hashtags "#tiktok #viral"
                </code>
              </div>
            </div>
            <p className="text-gray-300">
              The tool handles authentication, video processing, and upload to TikTok's platform, making it easy to automate your content distribution workflow.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6 text-lg">
              Ready to streamline your TikTok workflow?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="inline-block px-6 py-3 bg-[#33F0CE] text-black font-semibold rounded-lg hover:bg-[#2cd9b9] transition-colors duration-200">
                Get Support
              </Link>
              <Link href="/apps" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
                View Our Apps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
