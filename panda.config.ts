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
            _light: "{colors.pink.500}",
            _dark: "{colors.pink.500}"
          }
        }
      }
    }
  },
  outdir: "styled-system",
  // globalCss
});
