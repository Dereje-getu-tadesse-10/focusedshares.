import type { Meta, StoryObj } from '@storybook/react';

import { Switcher } from './switcher';

const meta: Meta = {
  title: 'UI/Theme Switcher',
  component: Switcher,
  tags: ['autodocs'],
} satisfies Meta<typeof Switcher>;

export default meta;

type Story = StoryObj<typeof Switcher>;

export const Default: Story = {
  render: () => <Switcher />,
};
