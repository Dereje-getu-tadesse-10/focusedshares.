import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './navbar';

const meta: Meta = {
  title: 'UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => <Navbar />,
};
