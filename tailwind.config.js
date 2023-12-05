/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'serif': ['Georgia'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'blue': '#02475E',
        'background': '#F5F0BB',
        'background-secondary': '#CCD6A6',
      },
    },
  },
  plugins: [],
}