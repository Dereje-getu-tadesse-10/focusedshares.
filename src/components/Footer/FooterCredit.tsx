import { css } from '@/styled-system/css';

export const FooterCredits = () => (
  <a
    href='https://dereje.fr'
    className={css({
      fontSize: 'sm',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'var(--colors-text-muted)',
      mt: '.7rem',
    })}
  >
    Built with 🖤 by Dereje
  </a>
);
