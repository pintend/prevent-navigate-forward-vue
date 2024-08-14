import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [forms],
}

