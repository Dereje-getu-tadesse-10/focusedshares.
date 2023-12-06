'use client';
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';
import { AppMenu } from '@/src/stories/menu/menu';
import { css } from '@/styled-system/css';
import { Switcher } from '@/src/stories/switcher/switcher';
import { Button } from '@/src/stories/button/button';
import Link from 'next/link';

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
        <Link href='/'>
          <Image
            src={
              'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/d6xiwppm48jplmiks89p'
            }
            alt='FocusedShares'
            className={css({
              width: '70px',
              height: '70px',
            })}
            width={40}
            height={40}
          />
        </Link>
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
