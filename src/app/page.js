'use client'

import logoGif from './assets/logo.gif';
import { useRef, useEffect, useState } from 'react';
import Support from './components/Support';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const onScroll = () => {
      const path = pathRef.current;
      if (!path) return;

      // Only show the path when scrolling has started
      if (window.scrollY > 0) {
        pathRef.current.style.visibility = 'visible';
      } else {
        pathRef.current.style.visibility = 'hidden';
      }

      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path.style.strokeDashoffset = pathLength;

      // Calculate scroll percentage using window properties
      const scrollTop = window.scrollY;
      const scrollHeight = window.document.documentElement.scrollHeight;
      const clientHeight = window.document.documentElement.clientHeight;
      
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const drawLength = pathLength * scrollPercentage;

      path.style.strokeDashoffset = pathLength - drawLength;
    };

    // Initially hide the path
    if (pathRef.current) {
      pathRef.current.style.visibility = 'hidden';
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const MainContent = () => (
    <>
      <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "fixed"}}>
        <Image src={logoGif} alt='logo' />
      </div>
      <div className="line-container">
        <svg viewBox="0 0 112 1211" fill="none" preserveAspectRatio="xMidYMax meet">
          <path 
            ref={pathRef} 
            style={{ visibility: 'hidden' }}
            d="M56.5 0.5V555.5C59.8333 551.667 66.8 544.2 68 545C69.2 545.8 66.8333 550 65.5 552C73.3333 549 88.5 543.9 86.5 547.5C84.5 551.1 80.3333 558 78.5 561C84.3333 557.833 96.1 551.8 96.5 553C96.9 554.2 93 560.833 91 564C91 564 102 556 103.5 557C105 558 99 570 99 570C103.167 571.833 111.4 578.5 111 590.5C111 592.1 104.667 591.167 101.5 590.5L111 606C109.167 605.833 105.4 605.2 105 604C104.5 602.5 107 628.5 103.5 626.5C100.7 624.9 100 623.167 100 622.5C98.6667 630.667 95.4 646.7 93 645.5C90.6 644.3 89.6667 641 89.5 639.5C86 646.833 78 660.6 74 657C72.8 656.2 73.5 653.333 74 652L62.5 660.5C61.8333 662.333 60.2 665.9 59 665.5C57.8 665.1 49.1667 658 45 654.5C45.3333 656 45.5 658.8 43.5 658C41 657 32.5 647.5 32 646.5C31.6667 648.167 30.5 651 28.5 649C26 646.5 16.5 637 17.5 633.5C17.5 632 11 637.5 10.5 634.5C10 631.5 10 613 11 612C12 611 3.5 621 4 616C4.5 611 5.5 593.5 9 592.5C9.5 592 1 594 2.5 591.5C4 589 5.5 571 14 572.5C15 572.5 6 560.5 9 559.5C13.5 560.667 22.7 562.8 23.5 562C24.5 561 16 553 19.5 552C23 551 30.5 556.5 32 555.5C33.5 554.5 50.5 555 56.5 562.5V658V821V1211" 
            stroke="#33F0CE" 
            strokeWidth="3"
          />
        </svg>       
      </div>
    </>
  );

  const Navigation = () => {
    const pathname = usePathname();
    return (
      <nav className="support-nav" style={{ position: "fixed", display: "flex", gap: "0.5rem"}}>
        {pathname === '/' ? (
          <>
            <Link href="/apps" className="support-link">Our Apps</Link>
            <Link href="/support" className="support-link">Support</Link>
            <Link href="/privacy" className="support-link">Privacy</Link>
          </>
        ) : pathname === '/support' ? (
          <>
            <Link href="/" className="support-link">Home</Link>
            <Link href="/apps" className="support-link">Our Apps</Link>
            <Link href="/privacy" className="support-link">Privacy</Link>
          </>
        ) : pathname === '/privacy' ? (
          <>
            <Link href="/" className="support-link">Home</Link>
            <Link href="/apps" className="support-link">Our Apps</Link>
            <Link href="/support" className="support-link">Support</Link>
          </>
        ) : (
          <>
            <Link href="/" className="support-link">Home</Link>
            <Link href="/support" className="support-link">Support</Link>
            <Link href="/privacy" className="support-link">Privacy</Link>
          </>
        )}
      </nav>
    );
  };

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <div className="App">
      <Navigation />
      <MainContent />
    </div>
  );
}
