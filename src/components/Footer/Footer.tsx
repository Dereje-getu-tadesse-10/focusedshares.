import Logo from '@/public/icon.png';
import { css } from '@/styled-system/css';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={css({
        p: '1rem',
      })}
    >
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Link href='/'>
          <Image src={Logo} alt='logo' width={72} height={16} />
        </Link>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '.4rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mt: '1rem',
          sm: {
            flexDirection: 'row',
            gap: '0',
          },
        })}
      >
        <p
          className={css({
            color: 'var(--colors-text-muted)',
          })}
        >
          {`© ${currentYear} `}
          Focused Shares
        </p>
        <div>
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
          </ul>
        </div>
      </div>
    </footer>
  );
};