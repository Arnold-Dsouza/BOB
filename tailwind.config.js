/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#111111',
          accent: '#0a66c2',
        },
      },
      blur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      keyframes: {
        clockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        counter: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        clockwise: 'clockwise 40s linear infinite',
        counter: 'counter 60s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
