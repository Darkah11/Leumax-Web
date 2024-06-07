/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange: {
          10: "rgba(243, 115, 53)"
        },
        white: {
          10: "rgba(255, 255, 255)"
        },
        lightGray: {
          10: "rgba(204, 204, 204, 0.32)"
        },
        gray: {
          10: "rgba(221, 221, 221)"
        },
        darkgray: {
          10: "rgba(146, 146, 146)"
        },
        black: {
          10: "rgba(33, 33, 33)"
        }
      }
    },
  },
  plugins: [],
}
