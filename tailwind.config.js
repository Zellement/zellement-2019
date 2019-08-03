module.exports = {
  theme: {
    inset: {
      '0': '0',
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      '4': '4rem',
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

