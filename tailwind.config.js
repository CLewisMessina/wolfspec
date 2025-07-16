/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // WolfSpec brand colors based on your prototype
        wolfspec: {
          blue: {
            50: '#e8f4f8',
            100: '#d6eaf8',
            400: '#4a90e2',
            500: '#2980b9',
            600: '#1f5f8b'
          },
          green: {
            50: '#e8f5e8',
            100: '#d4edda',
            500: '#27ae60',
            600: '#219a52',
            700: '#1e7e44'
          },
          gray: {
            50: '#f8f9fa',
            100: '#f1f3f4',
            300: '#dee2e6',
            500: '#6c757d',
            600: '#495057',
            800: '#343a40'
          }
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      },
      animation: {
        'drag-enter': 'scale-105 0.2s ease-out',
        'drop-success': 'pulse 0.5s ease-out'
      },
      transitionProperty: {
        'drag': 'transform, opacity, box-shadow'
      }
    },
  },
  plugins: [],
}