module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      gridTemplateRows: {
        main: '1fr auto'
      },
      gridTemplateColumns: {
        form: '1fr auto'
      }
    }
  },
  plugins: []
};
