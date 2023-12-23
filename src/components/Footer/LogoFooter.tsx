import Link from 'next/link';
import Image from 'next/image';
import { css } from '@/styled-system/css';

export const LogoFooter = () => (
  <Link href='/'>
    <Image
      src='https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/d6xiwppm48jplmiks89p'
      alt='logo'
      className={css({
        width: '70px',
        height: '70px',
      })}
      width={40}
      height={40}
    />
  </Link>
);
