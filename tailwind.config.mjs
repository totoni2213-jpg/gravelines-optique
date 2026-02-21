/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A961',
          50:  '#FBF7EE',
          100: '#F5EDDA',
          200: '#EAD9B2',
          300: '#DFC48A',
          400: '#D4B063',
          500: '#C9A961',
          600: '#B8924A',
          700: '#9A7A3D',
          800: '#7D6231',
          900: '#5F4A24',
          light: '#D4BC7E',
          dark:  '#B8924A',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          50:  '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#A8A8A8',
          400: '#707070',
          500: '#484848',
          600: '#2A2A2A',
          700: '#1A1A1A',
          800: '#121212',
          900: '#0A0A0A',
        },
        cream: {
          DEFAULT: '#F8F4EE',
          dark:    '#EDE8DF',
          50:  '#FDFCFA',
          100: '#F8F4EE',
          200: '#EDE8DF',
          300: '#E0D9CE',
          400: '#D0C9BC',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':      'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'scale-in':     'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-right':  'slideRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'gold-sm':    '0 0 0 1px rgba(201,169,97,0.35)',
        'gold':       '0 0 0 2px rgba(201,169,97,0.45)',
        'gold-glow':  '0 0 24px rgba(201,169,97,0.22)',
        'gold-lg':    '0 8px 32px rgba(201,169,97,0.18), 0 0 0 1px rgba(201,169,97,0.12)',
        'card':       '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.05)',
        'card-gold':  '0 12px 40px rgba(0,0,0,0.09), 0 0 0 1px rgba(201,169,97,0.22)',
        'dark':       '0 20px 60px rgba(0,0,0,0.35)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16,1,0.3,1)',
        'spring':   'cubic-bezier(0.34,1.56,0.64,1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
