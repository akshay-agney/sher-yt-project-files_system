/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {
      colors:{
        casal: {
          '50': '#f3f8f8',
          '100': '#e0eced',
          '200': '#c5d9dc',
          '300': '#9cbdc4',
          '400': '#6c9aa4',
          '500': '#517f89',
          '600': '#41626c',
          '700': '#3d5861',
          '800': '#384b52',
          '900': '#324047',
          '950': '#1e292e',
      },
      killarney: {
        '50': '#f4f9f5',
        '100': '#e7f1e7',
        '200': '#cfe3d0',
        '300': '#a9ccac',
        '400': '#7cac80',
        '500': '#598e5d',
        '600': '#416c45',
        '700': '#395c3c',
        '800': '#314a33',
        '900': '#293e2b',
        '950': '#132014',
    },
    'william': {
      '50': '#f5f8f8',
      '100': '#ddeaea',
      '200': '#bad5d4',
      '300': '#8fb9b8',
      '400': '#689899',
      '500': '#4e7d7e',
      '600': '#416a6c',
      '700': '#335152',
      '800': '#2c4243',
      '900': '#283839',
      '950': '#131e20',
  },
  
      },
    },
  },
  plugins: [],
}

