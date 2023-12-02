import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
    },
    labelFor: {
      control: 'text',
      description: 'Label for',
    },
  },
  args: {
    label: 'Youtube url',
    placeholder: 'Youtube url',
    disabled: false,
    labelFor: 'youtube-url',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
};
