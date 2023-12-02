import { InputHTMLAttributes } from 'react';
import { css } from '../../../styled-system/css';

const input = css({
  width: '100%',
  height: '40px',
  bg: 'background',
  border: '1px solid var(--colors-border)',
  rounded: 'xl',
  padding: '.5rem',
  color: 'var(--colors-text)',
  _focus: {
    outline: 'none',
    boxShadow: '0 0 0 3px var(--colors-input-focus)',
  },
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

const label = css({
  color: 'var(--colors-text-muted)',
  display: 'block',
  fontSize: '14px',
  fontWeight: 'normal',
  marginBottom: '.3rem',
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelFor: string;
};

export const Input = ({ ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={props.labelFor} className={label}>
        {props.label}
      </label>
      <input
        id={props.labelFor}
        aria-labelledby={props.labelFor}
        className={input}
        {...props}
      />
    </div>
  );
};
