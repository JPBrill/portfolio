import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#05060A',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#15F4D1',
          fontSize: 18,
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        J
      </div>
    ),
    { ...size }
  )
}
