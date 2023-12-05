import type { Meta, StoryObj } from '@storybook/react';

import { GenreSelect } from './select';

const meta: Meta = {
  title: 'UI/Select',
  component: GenreSelect,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      action: 'onChange',
    },
  },
} satisfies Meta<typeof GenreSelect>;

export default meta;

type Story = StoryObj<typeof GenreSelect>;

export const Default: Story = {
  render: (args) => <GenreSelect {...args} />,
};
