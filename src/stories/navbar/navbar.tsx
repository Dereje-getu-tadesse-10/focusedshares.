'use client';
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';
import { AppMenu } from '../menu/menu';
import { css } from '../../../styled-system/css';
import { Switcher } from '../switcher/switcher';
import { Button } from '../button/button';
import Logo from '../../../public/icon.png';

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header
      className={css({
        margin: '1rem',
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
              <Image src={Logo} alt='FocusedShares' width={70} height={70} />
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
            <AppMenu
              alt='hello'
              src={session?.user?.image as string}
              key={'app-menu'}
            />
          ) : (
            <Button
              visual='solid'
              onClick={() => signIn('google')}
              aria-label='Sign In'
            >
              Sign In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};
