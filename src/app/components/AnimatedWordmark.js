/**
 * The animated BITLION wordmark.
 *
 * Ships as a ~400 KB H.264 clip rather than the 7.6 MB source GIF it replaced.
 * A GIF that large is painted scanline by scanline as it streams, so in
 * production the wordmark appeared to wipe down the page over and over instead
 * of sitting still and playing -- the browser never had a whole frame in hand
 * before the next one started arriving. A video decodes a frame at a time and
 * is never drawn half-finished, and at this size it lands almost immediately.
 *
 * The intrinsic `width`/`height` reserve the right box before the clip loads,
 * and `poster` covers the cases where a browser refuses to autoplay (iOS Low
 * Power Mode, say): the wordmark still renders, it just holds one frame.
 */
export default function AnimatedWordmark({ className = '' }) {
  return (
    <video
      src="/logo.mp4"
      poster="/logo-poster.jpg"
      width={1100}
      height={236}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      role="img"
      aria-label="BitLion"
      className={`h-auto ${className}`}
    />
  );
}
