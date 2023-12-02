import { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
 
export interface IButtonProps {
  children: ReactNode;
}
 
export const Button = ({ children }: IButtonProps) => {
  return (
    <button
      className={css({
        bg: 'background',
        fontSize: "1rem",
        fontWeight: 'bold',
        color: 'text',
        border: 'none',
        cursor: 'pointer',
      })}
    >
      {children}
    </button>
  )
};