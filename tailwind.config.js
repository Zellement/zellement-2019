module.exports = {
  theme: {
    inset: {
      '0': '0',
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      '4': '4rem',
      '5': '5rem',
      '6': '6rem',
      '7': '7rem',
      '8': '8rem',
      '9': '9rem',
      '10': '10rem',
      '11': '11rem',
      '12': '12rem',
      '13': '13rem',
      '14': '14rem',
      '15': '15rem',
      '16': '16rem',
      '17': '17rem',
      '18': '18rem',
      '19': '19rem',
      '20': '20rem',
      '21': '21rem',
      '22': '22rem',
      '23': '23rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'color-font': ['Cormorant\\ SC','serif'],
      'standard-font': ['PT\\ Sans','sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        brown: {
          feint: '#b5aba2',
          light: '#635d57',
          standard: '#1A1918',
          dark: '#141210',
          'standard-50': 'rgba(26, 25, 24, 0.5)',
          'standard-80': 'rgba(26, 25, 24, 0.8)',
        },
        grey: {
          light: '#eee',
          standard: '#9F9F9F',
        },
        lightgrey: '#9F9F9F',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {
    fill: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}

