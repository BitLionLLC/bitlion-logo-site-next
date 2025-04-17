'use client'

import Support from '../components/Support';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="App">
      <nav className="support-nav" style={{ position: "fixed"}}>
        <Link href="/" className="support-link">Home</Link>
      </nav>
      <Support />
    </div>
  );
} 