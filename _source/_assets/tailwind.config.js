module.exports = {
  mode: 'jit',
  prefix: 'g-',
  purge: ['./components/**/*.{vue,js,ts}'],
  theme: {
    colors: {
      primary: '#E12D39',
      secondary: 'hsl(211, 12%, 43%)',
      input: 'hsl(212, 25%, 50%)',
      text: {
        DEFAULT: 'hsl(209, 18%, 30%)',
        'medium-dark': 'hsl(210, 13%, 40%)',
        medium: 'hsl(210, 13%, 40%)',
        light: 'hsl(211, 12%, 43%)',
        link: '#0B69A3',
      },
      hairline: {
        DEFAULT: 'hsla(209, 20%, 25%, 0.9)',
        medium: 'hsla(209, 14%, 37%, 0.75)',
        dark: 'hsla(210, 10%, 53%, 0.5)',
      },
      focus: {
        light: '#1992D4',
        dark: '#127FBF',
      },
      select: {
        light: 'hsl(212, 30%, 85%)',
        dark: 'hsl(209, 14%, 37%)',
      },
      matrix: {
        block: 'hsl(213, 60%, 97%)',
        border: 'rgba(51, 64, 77, 0.1)',
        titlebar: 'hsl(212, 60%, 95%)',
      },
      error: '#CF1124',
      warning: '#B44D12',
      success: '#27AB83',
      notice: '#0B69A3',
      white: '#fff',
      black: '#000',
    },
    borderRadius: {
      none: '0',
      sm: '3px',
      md: '4px',
      lg: '5px',
    },
    fontFamily: {
      sans: `system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
      'fixed-width': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      outline: {
        thick: '4px solid currentColor',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
