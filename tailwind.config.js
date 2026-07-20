/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#fff8ed',
          100: '#ffefd3',
          200: '#ffdba5',
          300: '#ffc06d',
          400: '#ff9a32',
          500: '#ff7d0a',
          600: '#f06000',
          700: '#c74600',
          800: '#9e3800',
          900: '#7e2f00',
        },
        gold: {
          50:  '#fdfaec',
          100: '#faf2cc',
          200: '#f5e394',
          300: '#eecf52',
          400: '#e6b830',
          500: '#d49a18',
          600: '#b87a12',
          700: '#8f5812',
          800: '#764715',
          900: '#643c17',
        },
        charcoal: {
          50:  '#f5f5f4',
          100: '#e7e5e2',
          200: '#d2cec8',
          300: '#b4aea6',
          400: '#908882',
          500: '#766e67',
          600: '#635b54',
          700: '#524a44',
          800: '#45403b',
          900: '#1a1614',
          950: '#0d0b09',
        },
        cream: {
          50:  '#fdfcf8',
          100: '#f9f6ee',
          200: '#f3ebda',
          300: '#eaddc2',
          400: '#dfcba4',
          500: '#d2b884',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        display:['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e6b830 0%, #d49a18 50%, #eecf52 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(13,11,9,0) 0%, rgba(13,11,9,0.85) 100%)',
      },
    },
  },
  plugins: [],
};
