import type { Meta, StoryObj } from '@storybook/react';

import { ProfileAvatar } from './avatar';

const meta: Meta = {
  title: 'UI/Avatar',
  component: ProfileAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileAvatar>;

export default meta;

type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {
  render: (args) => <ProfileAvatar {...args} />,
};
