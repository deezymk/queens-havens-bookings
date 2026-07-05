/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E0C09',
          soft: '#171310',
          line: '#2A241B',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E9D9AE',
          dim: '#8C723A',
        },
        wine: {
          DEFAULT: '#7A1F2B',
          light: '#9C3040',
        },
        blush: '#F1DCD3',
        cream: '#F7F2E9',
        muted: '#B7AC94',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #8C723A 0%, #E9D9AE 28%, #C9A24B 52%, #FFF3D6 68%, #8C723A 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
