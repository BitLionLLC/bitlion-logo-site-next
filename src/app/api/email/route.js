import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { NextResponse } from 'next/server';
import { clientIpFrom, verifyRecaptcha } from '../../lib/recaptcha';

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

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender("noreply@thebitlion.com", name);
    const recipients = [
      new Recipient("grant@thebitlion.com", "BitLion Support")
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(email, name))
      .setSubject(`Support Request: ${subject}`)
      .setHtml(`
        <h2>New Support Request</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `)
      .setText(`
        New Support Request
        From: ${name} (${email})
        Subject: ${subject}
        Message: ${message}
      `);

    await mailerSend.email.send(emailParams);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
