import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

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
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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