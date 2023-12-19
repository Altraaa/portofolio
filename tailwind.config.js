const {transform} = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
    center: true,
    padding: '35px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primarybg:'f9fafb',
        secbg:'#e9d5ff',
        icon: '#3730a3',
        prf:'#64748b',
        trdtitle:'#020617',
        sectitle: '#9ca3af',
        hover:'#4f46e5',
        ftrbg:'#5d1aa7',
        seclr:'#f3f8ff',
        thrdclr:'#edf3ff'
      },
      space: {
        lr: '1168px',
      },
      fontfamily: {
        poppins:["'poppins'","sans-serif" ],
      },
      screens: {
        '2xl' : '1200px'
      },
      animation : {
        geser : 'geser 450ms ease-in-out',
        blur : 'blur 200ms ease-in-out ',
      },
      keyframes : {
        geser : {
          '0%' : { transform : 'translateY(-1.5rem)' },
          '100%' : { transform : 'translateY(0)'},
        },
        blur : {
          '0%' : {opacity : .5},
          '20%' : {opacity : .6},
          '40%' : {opacity : .7},
          '60%' : {opacity : .8},
          '80%' : {opacity : .9},
          '100%' : {opacity : 1},
        },
      },
    },
  },
}
