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
        <Link href="/tt" className="support-link">Feed Publisher</Link>
        <Link href="/support" className="support-link">Support</Link>
        <Link href="/terms" className="support-link">Terms</Link>
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
            TikTok Uploading Application
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              This Privacy Policy describes how BitLion, LLC ("we", "us", or "our") collects, uses, and protects your information when you use our TikTok uploading application ("App").
            </p>
            <p style={{ fontSize: "0.9rem", color: "#ccc", marginBottom: "1.5rem" }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Information We Collect
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Video Content:</strong> We collect videos and media files that you create, edit, or upload through the App. This content is stored temporarily on our servers to facilitate editing and uploading to TikTok.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Account Information:</strong> When you connect your TikTok account, we collect basic profile information necessary for authentication and content upload, including your TikTok username and account ID.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Device Information:</strong> We may collect device-specific information such as device type, operating system, and app version to ensure compatibility and improve performance.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Usage Data:</strong> We collect information about how you interact with the App, including features used, upload history, and app preferences.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Payment Information:</strong> For premium features, payment processing is handled by third-party providers (Google Play, Apple App Store). We do not store your payment card information.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            How We Use Your Information
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              We use the information we collect to:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li>Provide and maintain the App's functionality</li>
              <li>Process and upload your content to TikTok</li>
              <li>Authenticate your TikTok account connection</li>
              <li>Improve and optimize the App's performance</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important updates about the App</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            TikTok Integration and Data Sharing
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>TikTok API:</strong> Our App integrates with TikTok's platform through their official API. When you connect your TikTok account, you authorize us to access your TikTok account for the purpose of uploading content on your behalf.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Content Upload:</strong> Videos and content you upload through our App are sent directly to TikTok's servers. TikTok's own Privacy Policy and Terms of Service govern how TikTok handles your content once uploaded.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Third-Party Services:</strong> We use the following third-party services:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li><strong>TikTok:</strong> For content upload and account authentication</li>
              <li><strong>Supabase:</strong> For user authentication and data storage</li>
              <li><strong>Google Play / Apple App Store:</strong> For payment processing</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              We do not sell your personal data to third parties. We only share data with these services as necessary to provide the App's functionality.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Data Storage and Retention
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Video Storage:</strong> Videos are stored temporarily on our servers during the editing and upload process. Once successfully uploaded to TikTok, videos are automatically deleted from our servers within 30 days.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Account Data:</strong> Your account information and preferences are stored securely in our database. You can delete your account and all associated data at any time through the App settings.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Data Security:</strong> All data is encrypted in transit using SSL/TLS and encrypted at rest. We implement industry-standard security measures to protect your information.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Your Rights and Choices
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              You have the right to:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li>Access your personal data stored in our systems</li>
              <li>Modify or update your account information</li>
              <li>Delete your account and all associated data</li>
              <li>Disconnect your TikTok account at any time</li>
              <li>Request a copy of your data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              To exercise these rights, please contact us at <a href="mailto:grant@thebitlion.com" style={{ color: "#33F0CE" }}>grant@thebitlion.com</a> or use the settings within the App.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Children's Privacy
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              Our App is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately so we can delete the information.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Users between 13 and 18 should have parental consent before using our App and connecting their TikTok account.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Changes to This Privacy Policy
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Your continued use of the App after any changes constitutes acceptance of the updated Privacy Policy.
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
            Contact Us
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
            <a href="mailto:grant@thebitlion.com" style={{ color: "#33F0CE" }}>grant@thebitlion.com</a>
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <strong>BitLion, LLC</strong><br />
            For privacy-related inquiries or to exercise your rights, please reach out to us using the contact information above.
          </p>
        </div>
      </div>
    </div>
  );
} 