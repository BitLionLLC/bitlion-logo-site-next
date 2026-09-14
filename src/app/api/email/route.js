import { NextResponse } from 'next/server';
import { clientIpFrom, verifyRecaptcha } from '../../lib/recaptcha';
import { MAIL_FROM, MAIL_TO, getTransport } from '../../lib/mailer';

// nodemailer opens raw TCP sockets, which the Edge runtime cannot do. Next
// already defaults route handlers to Node, but pin it so a future default
// change cannot silently break sending.
export const runtime = 'nodejs';

// Everything in the payload is attacker-controlled, so escape it before it
// goes anywhere near the HTML body of the email.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// A newline in a header value lets a submitter append headers of their own
// (Bcc, say). Subject and the reply-to display name are the fields that
// reach headers, so strip line breaks from both.
function singleLine(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message, recaptchaToken } = formData;

    // The checkbox is only meaningful once Google has confirmed the token;
    // a bot can post straight to this route without ever loading the page.
    const captcha = await verifyRecaptcha(recaptchaToken, clientIpFrom(request));
    if (!captcha.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            captcha.reason === 'not-configured'
              ? 'Spam protection is unavailable. Please email us directly.'
              : 'Spam protection check failed. Please try again.',
        },
        { status: 400 }
      );
    }

    const isBlank = (value) => typeof value !== 'string' || value.trim() === '';
    if ([name, email, subject, message].some(isBlank)) {
      return NextResponse.json(
        { success: false, message: 'Please fill in every field.' },
        { status: 400 }
      );
    }

    const transportResult = getTransport();
    if (!transportResult.ok) {
      console.error(
        `SMTP is not configured; missing ${transportResult.missing.join(', ')}.`
      );
      return NextResponse.json(
        { success: false, message: 'Email is not configured. Please email us directly.' },
        { status: 500 }
      );
    }

    await transportResult.transport.sendMail({
      from: { name: 'BitLion Support Form', address: MAIL_FROM },
      to: MAIL_TO,
      // Send from our own domain and put the submitter in Reply-To: mail sent
      // as them would fail the sender domain's SPF/DKIM and land in spam.
      replyTo: { name: singleLine(name), address: email },
      subject: `Support Request: ${singleLine(subject)}`,
      text: [
        'New Support Request',
        `From: ${name} (${email})`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h2>New Support Request</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
