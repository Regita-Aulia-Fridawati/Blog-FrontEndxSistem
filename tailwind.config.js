/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sen'],
      },
      fontSize: {
        'xs': '10px',
        'sm': '14px',
        'base': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl':'56px',
        'display': ['56px', '64px'],
        'h1' : ['48px', '64px'],
        'h2' : ['36px', '48px'],
        'h3' : ['28px', '36px'],
        'h4' :[ '24px','32px'],
        'h5' :[ '20px','32px'],
        'h6' :[ '16px','24px'],
        'body1':['16px', '28px'],
        'body2':['14px', '20px'],
        'label' : ['14px', '20px'],
        'cap1' : ['16px', '20px'],
        'cap2' : ['12px', '16px'],

      },
      colors: {
        'x-black': '#232536',
        'x-puple': '#FFD050',
        'x-yellow': '#075EFD',
        'x-darkgrey': '#4C4C4C',
        'x-mediumgrey': '#6D6E76',
        'x-lightgrey': '#F4F4F4',
        'x-lavender': '#F4F0F8',
        'x-lightyellow': '#FBF6EA',
        'x-light':'#FFFFFF',

      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

