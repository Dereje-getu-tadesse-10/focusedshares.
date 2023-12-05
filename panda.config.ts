import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },
  theme: {
    extend: {},
    semanticTokens: {
      colors: {
        text: {
          value: {
            _light: '{colors.zinc.900}',
            _dark: '{colors.zinc.100}',
          },
        },
        primary: {
          value: {
            _light: '{colors.pink.900}',
            _dark: '{colors.pink.700}',
          },
        },
        primaryHover: {
          value: {
            _light: '{colors.pink.800}',
            _dark: '{colors.pink.600}',
          },
        },
        border: {
          value: {
            _light: '{colors.zinc.300}',
            _dark: '{colors.zinc.600}',
          },
        },
        error: {
          value: {
            _light: '{colors.red.900}',
            _dark: '{colors.red.700}',
          },
        },
        inputFocus: {
          value: {
            _light: '{colors.zinc.200}',
            _dark: '{colors.zinc.800}',
          },
        },
        textMuted: {
          value: {
            _light: '{colors.zinc.900}',
            _dark: '{colors.zinc.100}',
          },
        },
        background: {
          value: {
            _light: '{colors.zinc.100}',
            _dark: '{colors.zinc.900}',
          },
        },
      },
    },
  },
  outdir: 'styled-system',
  globalCss: defineGlobalStyles({
    body: {
      bg: 'background',
      maxWidth: '1200px',
      mx: 'auto',
    },
  }),
});
