import { css } from '@/styled-system/css';

export const WrapperSong = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={css({
        mt: '14',
        mx: 'auto',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: '1fr',
        md: {
          gridTemplateColumns: '3fr 1fr',
        },
      })}
    >
      {children}
    </div>
  );
};
