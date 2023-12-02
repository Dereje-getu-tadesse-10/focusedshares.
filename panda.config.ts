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
            _light: "{colors.neutral.100}",
            _dark: "{colors.neutral.900}"
          }
        },
        background: {
          value: {
            _light: "{colors.pink.900}",
            _dark: "{colors.pink.900}"
          }
        },
      }
    }
  },
  outdir: "styled-system",
  // globalCss
});
