/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        '18': '4.5rem', // 1rem = 16px, so 4.5rem = 72px
      },
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
        'logo': '#02475E',
        'background': '#F5F0BB',
        'background-secondary': '#4F6F52',
        'header': '#a9b471',
        // 'service-card': '#94A684',
        'logo': '#366861',
        // 'background': '#d4dfe9',
        'background-secondary': '#c9d397',
        'service-card': '#a9b471',
        'c_dark_moss_green': {
          DEFAULT: '#50672E', 100: '#101409', 200: '#202912', 300: '#303d1c', 400: '#405225',
          500: '#50672e', 600: '#779844', 700: '#9bbc69', 800: '#bcd29b', 900: '#dee9cd'
        },
        'c_olivine': {
          DEFAULT: '#95B277', 100: '#1e2615', 200: '#3c4c2b', 300: '#5a7240', 400: '#779755',
          500: '#95b277', 600: '#aac191', 700: '#bfd1ad', 800: '#d5e0c8', 900: '#eaf0e4'
        },
        'c_caribbean_current': {
          DEFAULT: '#366861', 100: '#0b1514', 200: '#162a27', 300: '#203f3b', 400: '#2b534e',
          500: '#366861', 600: '#4e978d', 700: '#74b7ae', 800: '#a2cfc9', 900: '#d1e7e4'
        },
        'c_sage': {
          DEFAULT: '#A0AD8E', 100: '#20251b', 200: '#414935', 300: '#616e50', 400: '#82936a',
          500: '#a0ad8e', 600: '#b4bea5', 700: '#c6cebc', 800: '#d9ded2', 900: '#ecefe9'
        },
        'c_reseda_green': {
          DEFAULT: '#677769', 100: '#151815', 200: '#2a302a', 300: '#3f4840', 400: '#536055',
          500: '#677769', 600: '#859587', 700: '#a3afa5', 800: '#c2cac3', 900: '#e0e4e1'
        },
        'c_chamoisee': {
          DEFAULT: '#AE8363', 100: '#241a13', 200: '#493525', 300: '#6d4f38', 400: '#91694b',
          500: '#ae8363', 600: '#bf9d83', 700: '#cfb6a2', 800: '#dfcec1', 900: '#efe7e0'
        },
        'c_raw_umber': {
          DEFAULT: '#955F48', 100: '#1e130e', 200: '#3b261d', 300: '#59392b', 400: '#764b39',
          500: '#955f48', 600: '#b37a62', 700: '#c69c89', 800: '#d9bdb1', 900: '#ecded8'
        },
        'c_paynes_gray': {
          DEFAULT: '#3E5E79', 100: '#0c1318', 200: '#192630', 300: '#253949', 400: '#324c61',
          500: '#3e5e79', 600: '#5580a4', 700: '#7ea0bc', 800: '#a9c0d3', 900: '#d4dfe9'
        },
        'c_hunter_green': {
          DEFAULT: '#295E41', 100: '#08120d', 200: '#102519', 300: '#183726', 400: '#204a33',
          500: '#295e41', 600: '#3f9164', 700: '#62ba89', 800: '#96d1b1', 900: '#cbe8d8'
        },
        'c_viridian': {
          DEFAULT: '#568D83', 100: '#111c1a', 200: '#233935', 300: '#34554f', 400: '#46726a',
          500: '#568d83', 600: '#74aaa0', 700: '#97bfb8', 800: '#b9d4cf', 900: '#dceae7'
        },
        'c_viridian2': {
          DEFAULT: '#507F68', 100: '#101a15', 200: '#20332a', 300: '#304d3f', 400: '#406754',
          500: '#507f68', 600: '#6ba288', 700: '#90b9a5', 800: '#b5d1c3', 900: '#dae8e1'
        },
        'c_lion': {
          DEFAULT: '#C9A176', 100: '#2e2112', 200: '#5c4125', 300: '#8a6237', 400: '#b7824a',
          500: '#c9a176', 600: '#d4b593', 700: '#dfc7ae', 800: '#e9dac9', 900: '#f4ece4'
        },
        'c_lion2': {
          DEFAULT: '#BB8E60', 100: '#271c11', 200: '#4f3822', 300: '#765432', 400: '#9d7043',
          500: '#bb8e60', 600: '#c8a37e', 700: '#d6ba9f', 800: '#e3d1bf', 900: '#f1e8df'
        },
        'c_moss_green': {
          DEFAULT: '#808D3D', 100: '#1a1d0c', 200: '#343918', 300: '#4e5625', 400: '#677231',
          500: '#808d3d', 600: '#a5b654', 700: '#bcc87e', 800: '#d2daa9', 900: '#e9edd4'
        },
        'c_cadet_gray': {
          DEFAULT: '#95A5BE', 100: '#1a202a', 200: '#334053', 300: '#4d5f7d', 400: '#6a80a4',
          500: '#95a5be', 600: '#a9b6ca', 700: '#bec8d7', 800: '#d4dae5', 900: '#e9edf2'
        },
        'c_butterscotch': {
          DEFAULT: '#D58B2B', 100: '#2b1c08', 200: '#553811', 300: '#805319', 400: '#aa6f22', 
          500: '#d58b2b', 600: '#dda255', 700: '#e6b97f', 800: '#eed1aa', 900: '#f7e8d4'
        },
        'c_orange_web': {
          DEFAULT: '#FAAE22', 100: '#382501', 200: '#704a02', 300: '#a86e03', 400: '#e09305', 
          500: '#faae22', 600: '#fbbf4f', 700: '#fccf7b', 800: '#fddfa7', 900: '#feefd3'
        },
        'c_caramel': {
          DEFAULT: '#D98145', 100: '#2f190a', 200: '#5f3213', 300: '#8e4a1d', 400: '#be6327', 
          500: '#d98145', 600: '#e0996a', 700: '#e8b38f', 800: '#f0ccb4', 900: '#f7e6da'
        },
        'c_gamboge': {
          DEFAULT: '#E09C38', 100: '#312008', 200: '#61400f', 300: '#926017', 400: '#c2811e', 
          500: '#e09c38', 600: '#e6b160', 700: '#ecc488', 800: '#f3d8b0', 900: '#f9ebd7'
        }
      },
    },
  },
  plugins: [],
}
