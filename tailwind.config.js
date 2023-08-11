/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Share Tech Mono', 'monospace'],
        major: ['Major Mono Display', 'monospace'],
      },
      colors: {
        primary: "#ff0a78",
        background: "#0e141b",
        text: "#f2f5f7",
        textGrey: "#9ca8b4",
        dark: "#0e0e0e",
        light: "#182635",
        accentPink: "#e60067",
        accentGrey: "#2b333b",
        accentDark: "#ffe100",
        accentDark2: "#4a67f7",
        blueDark: "#182635",
        blueLight: "#4a67f7",
        tinted: "#151f28",
        link: "#ffe100",
      },
      animation: {
        brand: 'glitch1 0.8s ease-out',
        nav: 'glitch2 1s infinite',
      },
      keyframes: {
        glitch1: {
          '0%': {
            textShadow: 'none',
          },
          '10%': {
            transform: 'skew(10deg)',
            fontStretch: 'ultra-expanded',
          },
          '20%': {
            transform: 'skew(-10deg)',
          },
          '25%': {
            textShadow: '0.125rem 0.125rem #ff0a78',
          },
          '50%': {
            textShadow: '-0.5rem -0.25rem #ff0a78, -0.5rem -0.5rem #4a67f7',
          }
        },

        glitch2: {
          '0%': {
            textShadow: 'none',
            color: '#f2f5f7 !importante',
          },
          '10%': {
            transform: 'skew(10deg)',
            fontStretch: 'ultra-expanded',
            color: '#f2f5f7 !importante',
          },
          '20%': {
            transform: 'skew(-10deg)',
            color: '#f2f5f7 !importante',
          },
          '25%': {
            textShadow: '0.125rem 0.125rem #ff0a78',
            color: '#f2f5f7 !importante',
          },
          '50%': {
            textShadow: '0.5rem 0.125rem #ff0a78, -1rem -0.5rem #4a67f7',
            color: '#f2f5f7 !importante',
          }
        }
      },
    },
  },
  plugins: [],
}

