import { ButtonHTMLAttributes } from 'react';
import { cva, type RecipeVariantProps } from '../../../styled-system/css';

export const button = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    cursor: 'pointer',
    fontWeight: 'medium',
  },
  variants: {
    visual: {
      solid: {
        bg: 'var(--colors-primary)',
        color: '#f5f5f5',
        _hover: { bg: 'var(--colors-primary-hover)' },
        _active: {
          boxShadow: '0 0 0 3px rgba(131, 24, 67, .2)',
          outline: 'none',
        },
        _focus: {
          boxShadow: '0 0 0 3px rgba(131, 24, 67, .2)',
          outline: 'none',
        },
      },
      // secondary planned
    },
    size: {
      sm: { padding: '10px 15px', fontSize: '1rem' },
      md: { padding: '14px 20px', fontSize: '4rem' },
    },
    radius: {
      full: { rounded: 'full' },
      xl: { rounded: 'xl' },
    },
  },
  defaultVariants: {
    visual: 'solid',
    size: 'sm',
    radius: 'full',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, visual, size, radius }: ButtonVariants) => {
  return (
    <button className={button({ visual, size, radius })}>{children}</button>
  );
};
