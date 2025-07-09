'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PrivacyPage() {
  const Navigation = () => {
    const pathname = usePathname();
    return (
      <nav className="support-nav" style={{ position: "fixed", display: "flex", gap: "0.5rem"}}>
        <Link href="/" className="support-link">Home</Link>
        <Link href="/apps" className="support-link">Our Apps</Link>
        <Link href="/support" className="support-link">Support</Link>
      </nav>
    );
  };

  return (
    <div className="App">
      <Navigation />
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "6rem 2rem 2rem 2rem", 
        color: "#ededed",
        lineHeight: "1.6"
      }}>
        <h1 style={{ 
          color: "#33F0CE", 
          fontSize: "2.5rem", 
          marginBottom: "2rem",
          textAlign: "center"
        }}>
          Privacy Policy
        </h1>
        
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Budget Plant ID
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              We collect camera images solely for plant identification purposes.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Images are processed by the OpenAI API and are stored in our database; you can remove them individually, all at once, or upon account deletion. We use Supabase for user authentication and Google and Apple for payment processing. No personal data is shared with third parties beyond these essential services.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Contact:</strong> <a href="mailto:grant@thebitlion.com" style={{ color: "#33F0CE" }}>grant@thebitlion.com</a>
            </p>
            <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
              Last updated: 7/8/2025
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Astral Tarot Reader
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              We collect minimal data necessary to provide personalized tarot readings and app functionality.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Reading data and user preferences are stored securely in our database; you can remove them individually, all at once, or upon account deletion. We use Supabase for user authentication and Google and Apple for payment processing. No personal data is shared with third parties beyond these essential services.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Contact:</strong> <a href="mailto:grant@thebitlion.com" style={{ color: "#33F0CE" }}>grant@thebitlion.com</a>
            </p>
            <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
              Last updated: 7/8/2025
            </p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: "#111", 
          padding: "1.5rem", 
          borderRadius: "8px",
          border: "1px solid #333",
          marginTop: "3rem"
        }}>
          <h3 style={{ 
            color: "#33F0CE", 
            fontSize: "1.3rem", 
            marginBottom: "1rem"
          }}>
            General Information
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            Both apps are developed by BitLion, LLC. We are committed to protecting your privacy and ensuring your data is handled responsibly.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <strong>Data Security:</strong> All data is encrypted in transit and at rest. We implement industry-standard security measures to protect your information.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <strong>Your Rights:</strong> You have the right to access, modify, or delete your data at any time through the app settings or by contacting us directly.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <strong>Changes to This Policy:</strong> We may update this privacy policy from time to time. Any changes will be reflected in the "Last updated" date above.
          </p>
          <p>
            For questions about this privacy policy or our data practices, please contact us at{' '}
            <a href="mailto:grant@thebitlion.com" style={{ color: "#33F0CE" }}>grant@thebitlion.com</a>
          </p>
        </div>
      </div>
    </div>
  );
} 