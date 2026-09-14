'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const SCRIPT_ID = 'recaptcha-v2-api';
// Google calls this global once its API is ready. The name is namespaced
// because it has to live on `window`.
const ON_LOAD_CALLBACK = 'onBitLionRecaptchaLoad';

/**
 * The reCAPTCHA v2 checkbox, rendered explicitly.
 *
 * The script is injected by hand rather than through next/script so that the
 * `onload` global is registered *before* Google's code runs -- with
 * `render=explicit` that callback is the only reliable "API is ready" signal,
 * and next/script gives no ordering guarantee against it.
 *
 * Exposes `reset()` to the parent: v2 tokens are single-use, so the widget has
 * to be cleared after every submit attempt, successful or not.
 */
const Recaptcha = forwardRef(function Recaptcha({ onChange }, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const [loadFailed, setLoadFailed] = useState(false);

  // Keep the latest callback without making it an effect dependency, so the
  // widget is never torn down and re-rendered mid-typing.
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
      onChangeRef.current?.('');
    },
  }), []);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return undefined;

    const renderWidget = () => {
      // Guards a second render from React's development double-effect and from
      // any other component that already loaded the API.
      if (widgetIdRef.current !== null) return;
      if (!containerRef.current || !window.grecaptcha?.render) return;

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        theme: 'dark',
        callback: (token) => onChangeRef.current?.(token),
        'expired-callback': () => onChangeRef.current?.(''),
        'error-callback': () => onChangeRef.current?.(''),
      });
    };

    if (window.grecaptcha?.render) {
      renderWidget();
      return undefined;
    }

    window[ON_LOAD_CALLBACK] = renderWidget;

    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src =
        `https://www.google.com/recaptcha/api.js?onload=${ON_LOAD_CALLBACK}&render=explicit`;
      script.async = true;
      script.defer = true;
      script.addEventListener('error', () => setLoadFailed(true));
      document.head.appendChild(script);
    }

    return undefined;
  }, []);

  if (!RECAPTCHA_SITE_KEY) {
    return (
      <p className="rounded border border-yellow-700 bg-yellow-900/40 p-3 text-sm text-yellow-200">
        Spam protection is not configured, so this form cannot be submitted.
        Please email us directly instead.
      </p>
    );
  }

  return (
    <div>
      <div ref={containerRef} />
      {loadFailed && (
        <p className="mt-2 text-sm text-red-300">
          The spam-protection check could not load. Please disable any content
          blocker for this page, or email us directly.
        </p>
      )}
    </div>
  );
});

export default Recaptcha;
