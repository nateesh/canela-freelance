/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      transitionProperty: {
        'fontSize': 'font-size',
        'height': 'height',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'serif': ['Georgia'],
        'palatino': ['Palatino', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'blue': '#02475E',
        // 'background': '#48656c',
        'background': '#F5F0BB',
        'background-secondary': '#CCD6A6',
        'service-card': '#94A684',
        'outer_space': { DEFAULT: '#3D4844', 100: '#0c0e0e', 200: '#181d1b', 300: '#252b29', 400: '#313936', 
                          500: '#3d4844', 600: '#60706a', 700: '#859790', 800: '#adbab5', 900: '#d6dcda' }, 
        'outer_space_2': { DEFAULT: '#38403E', 100: '#0b0d0d', 200: '#171a19', 300: '#222726', 400: '#2e3433', 
                          500: '#38403e', 600: '#5d6b67', 700: '#83938f', 800: '#acb7b4', 900: '#d6dbda' }, 
        'dark_moss_green': { DEFAULT: '#50672E', 100: '#101409', 200: '#202912', 300: '#303d1c', 400: '#405225', 
                          500: '#50672e', 600: '#779844', 700: '#9bbc69', 800: '#bcd29b', 900: '#dee9cd' }, 
        'olivine': { DEFAULT: '#95B277', 100: '#1e2615', 200: '#3c4c2b', 300: '#5a7240', 400: '#779755', 
                          500: '#95b277', 600: '#aac191', 700: '#bfd1ad', 800: '#d5e0c8', 900: '#eaf0e4' }, 
        'gunmetal': { DEFAULT: '#27373B', 100: '#080b0c', 200: '#101617', 300: '#172123', 400: '#1f2b2f', 
                          500: '#27373b', 600: '#48656c', 700: '#6a929c', 800: '#9cb6bd', 900: '#cddbde' }
      },
    },
  },
  plugins: [],
}
