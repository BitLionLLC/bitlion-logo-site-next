import nodemailer from 'nodemailer';

// Where support mail is sent from and to. Overridable, but defaulted to the
// addresses the form has always used so nothing changes without being asked.
export const MAIL_FROM = process.env.MAIL_FROM || 'noreply@thebitlion.com';
export const MAIL_TO = process.env.MAIL_TO || 'grant@thebitlion.com';

let cachedTransport = null;

/**
 * Reads SMTP settings from the environment.
 *
 * @returns {{ ok: true, config: object } | { ok: false, missing: string[] }}
 */
export function readSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const missing = [];
  if (!host) missing.push('SMTP_HOST');
  if (!user) missing.push('SMTP_USER');
  if (!pass) missing.push('SMTP_PASS');
  if (missing.length) return { ok: false, missing };

  const port = Number(process.env.SMTP_PORT || 587);

  // Port 465 is implicit TLS; 587 and 25 start plaintext and upgrade via
  // STARTTLS. SMTP_SECURE overrides for the rare host that disagrees.
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === 'true'
      : port === 465;

  return { ok: true, config: { host, port, secure, auth: { user, pass } } };
}

/**
 * The shared transporter. Built once per server instance: constructing one per
 * request would renegotiate TLS on every form submission.
 */
export function getTransport() {
  if (cachedTransport) return { ok: true, transport: cachedTransport };

  const result = readSmtpConfig();
  if (!result.ok) return result;

  cachedTransport = nodemailer.createTransport(result.config);
  return { ok: true, transport: cachedTransport };
}

/** Test seam: drops the memoised transporter so the next call rebuilds it. */
export function resetTransport() {
  cachedTransport = null;
}
