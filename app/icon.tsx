import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: '#1a2b4a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 800,
            fontSize: 13,
            color: '#3b82f6',
            letterSpacing: '-0.02em'
          }}
        >
          AX
        </span>
      </div>
    ),
    { ...size }
  );
}
