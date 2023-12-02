import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  conditions: {
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &"
  },
  theme: {
    extend: {},
    semanticTokens: {
      colors: {
        text: {
          value: {
            _light: "{colors.zinc.900}",
            _dark: "{colors.zinc.100}"
          },
        },
        primary: {
          value: {
            _light: "{colors.pink.900}",
            _dark: "{colors.pink.700}"
          }
        },
        primaryHover: {
          value: {
            _light: "{colors.pink.800}",
            _dark: "{colors.pink.600}"
          }
        },
        background: {
          value: {
            _light: "{colors.zinc.100}",
            _dark: "{colors.zinc.900}"
          }
        },
      }
    }
  },
  outdir: "styled-system",
  globalCss: defineGlobalStyles({
    body: {
      bg: "background",
      transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out"
    }
  }),
});
