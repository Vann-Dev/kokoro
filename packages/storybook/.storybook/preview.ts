import type { Preview } from "@storybook/react";
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: 'dark',
          value: '#121212',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    }
  },
};

export default preview;
