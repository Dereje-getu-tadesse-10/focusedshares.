'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { css } from '@/styled-system/css';

export const ThemedImage = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'light':
      src =
        'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/zokxp1mkosnf4iec3cmb';
      break;
    case 'dark':
      src =
        'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/yv7s0s1ggao2olvnhxih';
      break;
    default:
      src =
        'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/zokxp1mkosnf4iec3cmb';
      break;
  }

  return (
    <Image
      alt='Focused share'
      src={src}
      height={1000}
      width={1000}
      className={css({
        width: '100%',
      })}
    />
  );
};
