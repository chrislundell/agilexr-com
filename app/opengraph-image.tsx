import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0a142a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          position: 'relative'
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 60,
            bottom: 60,
            width: 6,
            background: '#3b82f6',
            borderRadius: '0 4px 4px 0'
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 36,
            fontWeight: 800,
            color: '#fafaf7',
            letterSpacing: '-0.02em',
            marginBottom: 36
          }}
        >
          <span>Agile</span>
          <span style={{ color: '#3b82f6', margin: '0 6px', fontSize: 28 }}>^</span>
          <span>XR</span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#c9a961',
            marginBottom: 20
          }}
        >
          OFFSHORE DEVELOPMENT · OUTSOURCING
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#fafaf7',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: 900,
            marginBottom: 28
          }}
        >
          World-class engineering teams.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 24,
            color: 'rgba(250,250,247,0.75)',
            maxWidth: 700,
            lineHeight: 1.5
          }}
        >
          Mobile apps · API development · QA · Cloud · SAP
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            right: 80,
            fontSize: 18,
            fontWeight: 600,
            color: '#c9a961',
            letterSpacing: '0.04em'
          }}
        >
          agilexr.com
        </div>
      </div>
    ),
    { ...size }
  );
}
