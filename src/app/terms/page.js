'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TermsPage() {
  const Navigation = () => {
    const pathname = usePathname();
    return (
      <nav className="support-nav" style={{ position: "fixed", display: "flex", gap: "0.5rem"}}>
        <Link href="/" className="support-link">Home</Link>
        <Link href="/apps" className="support-link">Our Apps</Link>
        <Link href="/tt" className="support-link">Feed Publisher</Link>
        <Link href="/support" className="support-link">Support</Link>
        <Link href="/privacy" className="support-link">Privacy</Link>
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
          Terms of Service
        </h1>
        
        <div style={{ 
          backgroundColor: "#111", 
          padding: "1.5rem", 
          borderRadius: "8px",
          border: "1px solid #333",
          marginBottom: "2rem"
        }}>
          <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#ccc" }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Please read these Terms of Service ("Terms") carefully before using our TikTok uploading application ("Service") operated by BitLion, LLC ("us", "we", or "our").
          </p>
          <p style={{ marginBottom: "1rem" }}>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            1. Acceptance of Terms
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              By downloading, installing, or using our TikTok uploading application, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            2. Description of Service
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              Our Service provides tools and features to help you create, edit, and upload content to TikTok. The Service may include video editing capabilities, content management features, and integration with TikTok's platform.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            3. User Accounts
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Account Creation:</strong> You may be required to create an account to use certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Account Security:</strong> You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account information.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Account Termination:</strong> We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason we deem necessary.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            4. User Content and Conduct
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Your Content:</strong> You retain ownership of any content you create, upload, or share through the Service. By using the Service, you grant us a limited license to process, store, and transmit your content solely for the purpose of providing the Service.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Prohibited Content:</strong> You agree not to upload, post, or transmit any content that:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li>Violates any laws or regulations</li>
              <li>Infringes on intellectual property rights of others</li>
              <li>Contains hate speech, harassment, or threats</li>
              <li>Is pornographic, obscene, or sexually explicit</li>
              <li>Promotes violence or illegal activities</li>
              <li>Contains malware, viruses, or harmful code</li>
              <li>Violates TikTok's Community Guidelines</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Compliance:</strong> You are solely responsible for ensuring your content complies with TikTok's Terms of Service and Community Guidelines. We are not responsible for content that violates TikTok's policies.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            5. TikTok Integration
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              Our Service integrates with TikTok's platform. By using our Service, you also agree to comply with TikTok's Terms of Service and Community Guidelines. We are not affiliated with, endorsed by, or sponsored by TikTok.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              TikTok may change their API, terms, or policies at any time, which may affect the functionality of our Service. We are not responsible for any disruptions caused by changes to TikTok's platform.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            6. Intellectual Property
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              The Service, including its original content, features, and functionality, is owned by BitLion, LLC and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            7. Payment and Subscriptions
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Fees:</strong> Some features of the Service may require payment. All fees are non-refundable unless required by law or as otherwise stated.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Subscriptions:</strong> If you purchase a subscription, it will automatically renew unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings or app store settings.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Price Changes:</strong> We reserve the right to change our pricing at any time. Price changes will not affect your current subscription period but will apply to renewals.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            8. Disclaimer of Warranties
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              We do not guarantee that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            9. Limitation of Liability
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BITLION, LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            10. Indemnification
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              You agree to indemnify, defend, and hold harmless BitLion, LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of or relating to your use of the Service, your content, or your violation of these Terms.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            11. Termination
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including if you breach these Terms.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Upon termination, your right to use the Service will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            12. Changes to Terms
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            13. Governing Law
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which BitLion, LLC operates, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            14. Contact Information
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:grant@thebitlion.com" style={{ color: "#33F0CE" }}>grant@thebitlion.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
