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
        background: {
          value: {
            _light: "{colors.pink.100}",
            _dark: "{colors.pink.900}"
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
