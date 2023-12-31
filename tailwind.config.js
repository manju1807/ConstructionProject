/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      primary: 'Poppins',
      secondary: ['inter', 'sans'],
      headingcursive: ['Allura', 'serif'],
      secondary2: ['Italianno', 'cursive'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#d9e1e4',
        secondary2: '#d9e1e4',
        actionColor: '#06c39d',
        black: '#1A1A1A',
      },
    },
  },
  plugins: [],
};
