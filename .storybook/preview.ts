import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      theme: themes.normal,
    },
  },
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "light", dataTheme: "light"},
        { name: "dark", dataTheme: "dark"},
      ],
    defaultValue: "dark",
    },
  },
};


export default preview;