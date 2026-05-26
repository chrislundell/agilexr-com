import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        coown: {
          50: '#eef1f6',
          100: '#d6dde9',
          200: '#aab8cd',
          300: '#7c8eac',
          400: '#566c8c',
          500: '#3a5074',
          600: '#283e62',
          700: '#1f3151',
          800: '#1a2b4a',
          900: '#121f37',
          950: '#0a142a'
        },
        gold: {
          50: '#faf6ec',
          100: '#f1e6c4',
          200: '#e3cf91',
          300: '#d6ba6e',
          400: '#cdaf60',
          500: '#c9a961',
          600: '#b08f45',
          700: '#8a6f32',
          800: '#5e4b22',
          900: '#3d3015'
        },
        mist: {
          50: '#f3f5f7',
          100: '#e3e7eb',
          200: '#c6cdd5',
          300: '#9aa6b3',
          400: '#7d8a99',
          500: '#6b7a8f',
          600: '#566476',
          700: '#43505f',
          800: '#2f3947',
          900: '#1f2731'
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        ink: '#0b1424',
        paper: '#fafaf7',
        warm: {
          50: '#fafaf7',
          100: '#f3f2ec',
          200: '#e7e4d8',
          300: '#cdc8b3'
        }
      },
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '1.1rem' }],
        sm: ['0.875rem', { lineHeight: '1.35rem' }],
        base: ['1.0625rem', { lineHeight: '1.6rem' }],
        lg: ['1.1875rem', { lineHeight: '1.75rem' }],
        xl: ['1.375rem', { lineHeight: '1.85rem' }],
        '2xl': ['1.625rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.35rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
        '5xl': ['3.25rem', { lineHeight: '3.5rem' }],
        '6xl': ['4rem', { lineHeight: '4.25rem' }],
        '7xl': ['5rem', { lineHeight: '5.15rem' }]
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter: '-0.025em'
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      maxWidth: {
        prose: '68ch',
        narrow: '54ch'
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem'
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,20,36,0.05), 0 4px 16px rgba(11,20,36,0.06)',
        elevated: '0 2px 4px rgba(11,20,36,0.06), 0 12px 32px rgba(11,20,36,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
