import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { css } from '../../../styled-system/css';

export const Switcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={css({
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: 'var(--colors-text-muted)',
        p: '2',
        borderRadius: 'sm',
        _hover: {
          backgroundColor: 'var(--colors-input-focus)',
        },
      })}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};
