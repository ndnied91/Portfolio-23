/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    dark: 'class',
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          '.text-hiVis': {
            color: '#FBFAF5',
          },
          '.text-cta': {
            color: '#FBFAF5',
          },
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          '.text-hiVis': {
            color: '#FBFAF5',
          },
        },
      },
      {
        emerald: {
          ...require('daisyui/src/theming/themes')['[data-theme=emerald]'],
          '.text-hiVis': {
            color: '#FBFAF5',
          },
        },
      },

      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'forest',
      'aqua',
      'lofi',
      {
        pastel: {
          ...require('daisyui/src/theming/themes')['[data-theme=pastel]'],
          '.text-hiVis': {
            color: 'black',
          },
          '.text-cta': {
            color: 'black',
          },
          '.text-accented': {
            color: 'blue ',
          },
        },
      },
      'fantasy',
      {
        wireframe: {
          ...require('daisyui/src/theming/themes')['[data-theme=wireframe]'],
          '.text-hiVis': {
            color: 'black',
          },
        },
      },
      {
        black: {
          ...require('daisyui/src/theming/themes')['[data-theme=black]'],
          '.text-accent': {
            color: 'grey',
          },
        },
      },

      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
};
