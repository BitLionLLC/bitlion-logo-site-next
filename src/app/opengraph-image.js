import { ImageResponse } from 'next/og';
import { SITE_NAME } from './lib/site';

export const alt = `${SITE_NAME} — App, Web, and Browser Extension Developers`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Generated at build time so Open Graph and Twitter cards have a real image
// without committing a binary asset that has to be kept in sync by hand.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: '#33F0CE',
            letterSpacing: '-0.03em',
          }}
        >
          BitLion
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 40,
            color: '#ededed',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          Mobile apps, web services, and browser extensions
        </div>
        <div
          style={{
            marginTop: 48,
            height: 6,
            width: 220,
            backgroundColor: '#33F0CE',
          }}
        />
      </div>
    ),
    size,
  );
}
