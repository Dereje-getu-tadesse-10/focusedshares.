import { Avatar, AvatarImageProps } from '@ark-ui/react';
import { css } from '../../../styled-system/css';

const avatar = css({
  width: '50px',
  height: '50px',
  rounded: 'full',
  outline: 'none',
});

const root = css({
  cursor: 'pointer',
  _focus: {
    outline: 'none',
    border: '2px solid black',
  },
});

export const ProfileAvatar = ({ ...args }: AvatarImageProps) => (
  <Avatar.Root asChild className={root}>
    <Avatar.Image className={avatar} src={args.src} alt={args.alt} />
  </Avatar.Root>
);
