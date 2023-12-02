import type { Meta, StoryObj } from '@storybook/react';

import { AppMenu } from './menu';

const meta: Meta = {
  title: 'UI/Menu',
  component: AppMenu,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Source',
    },
    alt: {
      control: 'text',
      description: 'Alt',
    },
  },
  args: {
    src: 'https://avatars.githubusercontent.com/u/583231?v=4',
    alt: 'PA',
  },
} satisfies Meta<typeof AppMenu>;

export default meta;

type Story = StoryObj<typeof AppMenu>;

export const Default: Story = {
  render: (args) => <AppMenu src={args.src} alt={args.alt} />,
};
