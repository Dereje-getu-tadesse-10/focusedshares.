import type { Meta, StoryObj } from '@storybook/react';

import { Button, button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    visual: {
      control: 'select',
      options: button.variantMap.visual,
      description: 'Button visual',
      defaultValue: button.variantMap.visual[0],
    },
    size: {
      control: 'select',
      options: button.variantMap.size,
      description: 'Button size',
      defaultValue: button.variantMap.size[0],
    },
    radius: {
      control: 'select',
      options: button.variantMap.radius,
      description: 'Button radius',
      defaultValue: button.variantMap.radius[0],
    },
  },
  args: {
    children: 'Hello 🐼!',
    visual: button.variantMap.visual[0],
    size: button.variantMap.size[0],
    radius: button.variantMap.radius[0],
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};
