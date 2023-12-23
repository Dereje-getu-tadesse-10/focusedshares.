import { css } from '@/styled-system/css';

export const FooterCopyRight = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p
      className={css({
        color: 'var(--colors-text-muted)',
      })}
    >
      {`© ${currentYear} Focused Shares`}
    </p>
  );
};
