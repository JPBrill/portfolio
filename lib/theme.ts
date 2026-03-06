// lib/theme.ts
export const baseTheme = {
  colors: {
    bg: {
      base: '#05060A',
      elevated: '#101218',
      hover: '#1A1D28',
    },
    text: {
      primary: '#F5F7FF',
      secondary: '#9EA3B8',
      tertiary: '#6B7280',
    },
    border: {
      subtle: '#232633',
      medium: '#2D3142',
    },
    accent: {
      primary: '#15F4D1',
      soft: 'rgba(21, 244, 209, 0.08)',
      strong: '#35BDF8',
    },
  },
  transitions: {
    fast: '180ms ease-out',
    medium: '220ms ease-out',
    slow: '350ms ease-out',
  },
  radius: {
    sm: '4px',
    base: '8px',
    lg: '12px',
  },
} as const;
