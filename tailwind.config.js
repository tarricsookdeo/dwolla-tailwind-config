module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dwolla: {
          primary: {
            purple: '#2D2D48',
            orange: '#E37C53',
            gray: '#8393AA',
            pink: '#BE5771',
            teal: '#4FA4A5',
            yellow: '#F79D52',
            iconOrange: '#CA4C2F'
          },
          gray: {
            1: '#F4F7FB',
            2: '#EAEDF3',
            3: '#C9D3E0',
            4: '#AAB7C8',
            5: '#8393AA',
            6: '#52627B',
            7: '#3E4E67',
            8: '#354153',
            9: '#2E3745'
          },
          darkPurple: {
            1: '#D5D5DA',
            2: '#ABABB6',
            3: '#818191',
            4: '#57576D',
            5: '#4A4A5E',
            6: '#424259',
            7: '#3A3A51',
            8: '#34344F',
            9: '#2D2D48'
          }
        }
      }
    }
  },
  plugins: []
};
