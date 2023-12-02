import type { Meta, StoryObj } from '@storybook/react';

import { ProfileAvatar } from './avatar';

const meta: Meta = {
  title: 'UI/Avatar',
  component: ProfileAvatar,
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
    asChild: {
      control: 'boolean',
      description: 'As Child',
    },
  },
  args: {
    src: 'https://avatars.githubusercontent.com/u/583231?v=4',
    alt: 'PA',
  },
} satisfies Meta<typeof ProfileAvatar>;

export default meta;

type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {
  render: (args) => <ProfileAvatar {...args} />,
};
