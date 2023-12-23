import Link from 'next/link';
import { css } from '@/styled-system/css';

export const FooterLinks = () => (
  <ul
    className={css({
      color: 'var(--colors-text-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
    })}
  >
    <li>
      <Link href='/terms-and-conditions'>Terms and conditions</Link>
    </li>
    <li>
      <Link href='/cookies'>Cookies</Link>
    </li>
    <li>
      <Link href='/privacy'>Privacy</Link>
    </li>
  </ul>
);
