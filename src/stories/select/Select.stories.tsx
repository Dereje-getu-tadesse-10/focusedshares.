import type { Meta, StoryObj } from '@storybook/react';

import { GenreSelect } from './select';

const meta: Meta = {
  title: 'UI/Select',
  component: GenreSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof GenreSelect>;

export default meta;

type Story = StoryObj<typeof GenreSelect>;

export const Default: Story = {
  render: () => <GenreSelect />,
};
