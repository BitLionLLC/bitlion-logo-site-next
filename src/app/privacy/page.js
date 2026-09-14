import SiteNav from '../components/SiteNav';
import { buildMetadata } from '../lib/site';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How BitLion, LLC collects, uses, and protects your information ' +
    'across our mobile apps, browser extensions, and web services, ' +
    'with app-specific disclosures for each product.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="App">
      <SiteNav current="/privacy" />
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
              This Privacy Policy describes how BitLion, LLC ("we", "us", or "our") collects, uses, and protects your information when you use our mobile applications, browser extensions, and web services (each, an "App").
            </p>
            <p style={{ marginBottom: "1rem" }}>
              It applies to everything we publish — our mobile apps, our browser extensions, and our web services — including Auto Dark Mode, Budget Plant ID, Med Minder, Mostlink, and SlowPulse. Where a particular App handles data differently, that difference is called out in the <strong>App-Specific Disclosures</strong> section below.
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
              <li><strong>Clerk:</strong> Optional account sign-in and authentication (SlowPulse and Med Minder)</li>
              <li><strong>Convex:</strong> Storage, backup, and cross-device sync of your data (SlowPulse and Med Minder for signed-in users; Mostlink for your account and pages)</li>
              <li><strong>Google AdMob:</strong> Serving banner ads in the free, ad-supported tier (Med Minder only)</li>
              <li><strong>RevenueCat:</strong> Managing purchases, subscriptions, and restoring entitlements</li>
              <li><strong>Stripe:</strong> Subscription billing and payment processing (Mostlink only)</li>
              <li><strong>ExtensionPay:</strong> Subscription billing and payment processing for our browser extensions (Auto Dark Mode only)</li>
              <li><strong>Apple App Store / Google Play:</strong> Payment processing and billing for our mobile apps</li>
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
              Auto Dark Mode (Browser Extension)
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Access to the Pages You Visit:</strong> Auto Dark Mode needs permission to run on the sites you browse so it can tell whether a page is already dark and, if it is not, restyle its colors. All of that work happens inside your browser, on the page in front of you. The extension does not read, log, or transmit the contents of the pages you visit, anything you type into them, or your browsing history.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Your Settings:</strong> Your on/off switch, the list of sites you have enabled dark mode for, and the count of sites used on the free tier are saved in your browser&apos;s own extension storage. If you are signed into your browser, they sync between your devices through your browser account; they are not sent to us.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Subscription:</strong> Payment is handled by ExtensionPay, a third-party payment service for browser extensions. Your email address and payment details go to ExtensionPay and its payment processor, not to us, and we never see or store your payment card information. The extension itself stores only whether your subscription is active.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>No Account, No Analytics:</strong> Auto Dark Mode does not require you to create an account with us, and it contains no analytics or advertising trackers.
            </p>

            <h3 style={{ color: "#33F0CE", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "0.75rem" }}>
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
              Med Minder
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Health Information You Enter:</strong> Med Minder stores what you choose to enter about your medications — name, dosage, any notes, the times and days you take them — along with a log of the doses you mark as taken or skipped. We treat this as sensitive information. It is used only to show you your own schedule, reminders, and adherence statistics.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Using It Without an Account:</strong> You can use Med Minder without signing in. In that case your medications and dose history are stored only on your device. If you later sign in, the data already on your device is moved into your account so you do not lose it.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Accounts and Sync:</strong> Signing in is optional and is handled by Clerk (with Apple, Google, or an email address). Your medications and dose history are then stored in our Convex backend against your account so they follow you to a new device. We receive the basic profile information your sign-in method provides — typically an email address, a user identifier, and, where you have one, a name and profile image.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Reminders:</strong> Dose reminders are local notifications scheduled by your own device, so they arrive on time without a connection. Scheduling them does not send anything to us, and the notification content stays on your device.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Advertising:</strong> The free version of Med Minder shows banner ads served by Google AdMob. AdMob may use a device advertising identifier and similar ad-serving information, subject to the advertising and tracking settings on your device. We never share your medications, dose history, or any other health information with AdMob or any other advertiser. A one-time in-app purchase removes ads; purchases and ad-performance reporting are managed through RevenueCat, which receives no health information.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Deleting Your Data:</strong> You can delete your account from within the App&apos;s settings, which removes your medications and dose history from our backend. Deleting the App removes anything held only on your device.
            </p>

            <h3 style={{ color: "#33F0CE", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "0.75rem" }}>
              Mostlink (Web Service)
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Your Account:</strong> Mostlink requires an account. We store your username, email address, and optionally your name, plus a securely hashed version of your password — we never store your password itself. If you sign in with Google, we store the account identity Google provides instead.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>The Pages You Publish:</strong> The content of the link pages you build — titles, links, colors, and any images you upload — is stored in our backend and is published publicly at the address you choose. Please do not put anything on a page that you do not want to be publicly visible. If you connect a custom domain, we also store that domain name and its DNS configuration status.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Visitor Analytics:</strong> When someone views one of your published pages or clicks one of its links, we record the event so we can show you your own page statistics. We record the page or link involved, a time, the broad device category (desktop, mobile, or tablet), and the referring site where the browser reports one. We do not store visitors&apos; IP addresses, we do not set tracking cookies on visitors, and these events are not used to identify individual visitors or to build advertising profiles.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Cookies:</strong> Mostlink sets a cookie when you sign in, so your session is remembered, and uses a security token to protect forms against cross-site request forgery. These are necessary for the service to work and are not used for advertising.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Payments:</strong> Paid plans and additional sites are billed through Stripe. Stripe handles your payment details directly; we store only your Stripe customer and subscription identifiers and whether your subscription is active. We never see or store your payment card information.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Email:</strong> We send transactional email — address verification, password resets, and support replies — to the address on your account.
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
