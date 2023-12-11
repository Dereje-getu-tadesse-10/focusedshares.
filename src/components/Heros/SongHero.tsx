import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';

export const SongHero = () => {
  const t = useTranslations('Songs');
  return (
    <div
      className={css({
        mx: 4,
        mb: 7,
      })}
    >
      <h1
        className={css({
          fontSize: '2xl',
          fontWeight: '600',
          color: 'var(--colors-text)',
        })}
      >
        {t('title')}
      </h1>
      <p
        className={css({
          color: 'var(--colors-text-muted)',
        })}
      >
        {t('description')}
      </p>
    </div>
  );
};
