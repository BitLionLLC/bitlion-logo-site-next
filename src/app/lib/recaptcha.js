// Server-side verification for reCAPTCHA v2 ("I'm not a robot" checkbox).
// The browser only ever produces a token; it proves nothing until Google has
// confirmed it here, so every submission has to come through this function.

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

/**
 * Checks a reCAPTCHA token with Google.
 *
 * Fails closed: a missing secret, a missing token, or an unreachable Google
 * all return `ok: false`. A captcha that cannot be checked is not a captcha
 * that passed.
 *
 * @param {string} token   The `g-recaptcha-response` value from the browser.
 * @param {string} [remoteIp] The end user's IP, if the platform exposes one.
 * @returns {Promise<{ ok: boolean, reason?: string }>}
 */
export async function verifyRecaptcha(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    // A deploy without the secret would otherwise silently accept everything.
    console.error('RECAPTCHA_SECRET_KEY is not set; rejecting submission.');
    return { ok: false, reason: 'not-configured' };
  }

  if (typeof token !== 'string' || token.length === 0) {
    return { ok: false, reason: 'missing-token' };
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);

  let result;
  try {
    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('reCAPTCHA verification HTTP error:', response.status);
      return { ok: false, reason: 'verify-unavailable' };
    }

    result = await response.json();
  } catch (error) {
    console.error('reCAPTCHA verification request failed:', error);
    return { ok: false, reason: 'verify-unavailable' };
  }

  if (!result.success) {
    const codes = result['error-codes'] || [];
    console.warn('reCAPTCHA rejected a submission:', codes);
    return { ok: false, reason: codes.join(',') || 'rejected' };
  }

  return { ok: true };
}

/**
 * Best-effort client IP. `x-forwarded-for` is a comma-separated chain; the
 * left-most entry is the original client. It is passed to Google only as an
 * extra signal -- it is spoofable, so nothing is gated on it.
 */
export function clientIpFrom(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || undefined;
}
