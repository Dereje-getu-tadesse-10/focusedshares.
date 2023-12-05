import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';
import { AppMenu } from '../menu/menu';
import { css } from '../../../styled-system/css';
import { Switcher } from '../switcher/switcher';
import { Button } from '../button/button';

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header
      className={css({
        maxW: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
    >
      <nav
        className={css({
          height: '60px',
          bg: 'var(--background)',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        <div>
          <ul
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
              color: 'var(--colors-text-muted)',
              fontWeight: 'medium',
            })}
          >
            <li>
              <Image
                src='https://www.focusedshares.com/logo.png'
                alt='FocusedShares'
                width={70}
                height={70}
              />
            </li>
            <li>
              <Link href={'/songs'}>Songs</Link>
            </li>
          </ul>
        </div>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2',
            color: 'var(--colors-text-muted)',
          })}
        >
          <Switcher />
          {session ? (
            <AppMenu alt='hello' src={session?.user?.image as string} />
          ) : (
            <Button onClick={() => signIn('google')}>Sign In</Button>
          )}
        </div>
      </nav>
    </header>
  );
};
