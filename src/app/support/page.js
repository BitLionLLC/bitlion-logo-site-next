'use client'

import Support from '../components/Support';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="App">
      <nav className="support-nav" style={{ position: "fixed", display: "flex", gap: "0.5rem"}}>
        <Link href="/" className="support-link">Home</Link>
        <Link href="/apps" className="support-link">Our Apps</Link>
        <Link href="/privacy" className="support-link">Privacy</Link>
      </nav>
      <Support />
    </div>
  );
} 