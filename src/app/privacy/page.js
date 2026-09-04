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
            Our Mobile Applications
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              This Privacy Policy describes how BitLion, LLC ("we", "us", or "our") collects, uses, and protects your information when you use our mobile applications (each, an "App").
            </p>
            <p style={{ marginBottom: "1rem" }}>
              It applies to all of the apps we publish, including Budget Plant ID and SlowPulse. Where a particular App handles data differently, that difference is called out in the <strong>App-Specific Disclosures</strong> section below.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Our general approach is to keep your data on your device wherever we can, to send it off the device only when a feature you asked for requires it, and never to sell it.
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
              <strong>Content You Provide:</strong> Some of our Apps ask you for content in order to work — for example, a photo you take or choose, or a note you type. We only use this content to deliver the feature you requested.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Account Information:</strong> Most of our Apps work without an account. Where an App offers optional sign-in (for backup or syncing between devices), we collect the basic profile information provided by the sign-in method you choose — typically your email address and a user identifier from Apple, Google, or email sign-in.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Device Information:</strong> We may collect device-specific information such as device type, operating system, and app version to ensure compatibility and improve performance. Some Apps generate a random on-device identifier so your history stays associated with your device; it is not tied to your real-world identity.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Usage Data:</strong> We collect information about how you interact with the App, such as which features you use and your in-app preferences. In most of our Apps this information stays on your device.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Payment Information:</strong> Purchases and subscriptions are processed by third-party providers (Apple App Store, Google Play, and their payment partners). We receive confirmation that a purchase succeeded and what was purchased. We never see or store your payment card information.
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
              <li>Provide and maintain the App&apos;s functionality</li>
              <li>Deliver the specific result you asked for, such as identifying a plant from a photo</li>
              <li>Authenticate you and sync your data between your devices, where you have enabled that</li>
              <li>Unlock and restore paid features and purchases</li>
              <li>Improve and optimize the App&apos;s performance</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important updates about the App</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              We do not use your content to build advertising profiles, and we do not sell your personal data.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            Third-Party Services
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              Depending on the App and the features you use, we rely on the following third-party services:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li><strong>Plant.id:</strong> Image recognition for plant identification and plant health diagnosis (Budget Plant ID only)</li>
              <li><strong>Clerk:</strong> Optional account sign-in and authentication (SlowPulse only)</li>
              <li><strong>Convex:</strong> Backup and cross-device sync of your data for signed-in users (SlowPulse only)</li>
              <li><strong>RevenueCat:</strong> Managing purchases, subscriptions, and restoring entitlements</li>
              <li><strong>Apple App Store / Google Play:</strong> Payment processing and billing</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              We share data with these services only as necessary to provide the App&apos;s functionality. Each service handles the data it receives under its own privacy policy. We do not sell your personal data to third parties.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ 
            color: "#33F0CE", 
            fontSize: "1.8rem", 
            marginBottom: "1rem"
          }}>
            App-Specific Disclosures
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <h3 style={{ color: "#33F0CE", fontSize: "1.3rem", marginBottom: "0.75rem" }}>
              Budget Plant ID
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Camera and Photos:</strong> The App requests access to your camera and photo library so you can take or select a photo of a plant. Photos are only accessed when you actively choose one; we do not scan or browse your photo library.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Image Processing:</strong> When you request an identification or a health diagnosis, the selected image is transmitted to our identification provider (Plant.id) for analysis, and the results are returned to your device. We do not maintain our own copy of your photos on our servers.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Identification History and Credits:</strong> Your identification history and your remaining identification credits are stored locally on your device. Deleting the App removes them.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>No Account Required:</strong> Budget Plant ID does not require you to create an account, and we do not collect your name or email address to use it.
            </p>

            <h3 style={{ color: "#33F0CE", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "0.75rem" }}>
              SlowPulse
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Guarded Apps:</strong> You choose which apps on your device SlowPulse pauses you before opening. On iOS this selection is made through Apple&apos;s Screen Time (Family Controls) picker, and the selection is held in a form that stays on your device — we never receive the list of apps you selected. On Android, SlowPulse uses an Accessibility Service solely to detect when a guarded app comes to the foreground so it can show the pause screen. It does not read, log, or transmit the contents of your screen, your keystrokes, or your activity in other apps.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Your Entries:</strong> When SlowPulse pauses you, it records what happened — the category of app, the time, whether you continued or stopped, and any amount, label, or note you choose to enter. This is stored in a database on your device and is used to show you your own statistics and insights.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Optional Sync:</strong> If you sign in (via email, Apple, or Google), these entries are also backed up to our sync backend so they are available on your other devices. Sync is optional; if you never sign in, your data never leaves your device. Your list of guarded apps is never synced.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Notifications:</strong> SlowPulse may send you local notifications from your own device. These are generated on-device and do not involve sending your data to us.
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
              <strong>On-Device Data:</strong> Most of the data our Apps create — your history, entries, preferences, and credits — is stored locally on your device and is retained until you delete it in the App or uninstall the App.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Synced Data:</strong> Where you have signed in and enabled sync, your data is stored securely in our backend for as long as your account exists. You can delete your account and all associated data at any time through the App&apos;s settings, or by contacting us.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Content Sent for Processing:</strong> Content sent to a processing provider (such as an image sent for plant identification) is retained by that provider under its own retention policy, and is not stored on our own servers.
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
              <li>Delete your on-device history at any time from within the App</li>
              <li>Revoke camera, photo, notification, or accessibility permissions in your device settings</li>
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
            Children&apos;s Privacy
          </h2>
          <div style={{ 
            backgroundColor: "#111", 
            padding: "1.5rem", 
            borderRadius: "8px",
            border: "1px solid #333"
          }}>
            <p style={{ marginBottom: "1rem" }}>
              Our Apps are not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately so we can delete the information.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Users between 13 and 18 should have parental consent before using our Apps and before making any purchase.
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
              Your continued use of our Apps after any changes constitutes acceptance of the updated Privacy Policy.
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
