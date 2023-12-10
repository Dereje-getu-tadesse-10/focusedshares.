import Link from 'next/link';
import { button } from '@/src/stories/button/button';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';

export const Hero = ({ lang }: { lang: string }) => {
  const t = useTranslations('Home');

  return (
    <section
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '6rem auto',
        padding: '0 1rem',
      })}
    >
      <h1
        className={css({
          fontSize: '3xl',
          fontWeight: '600',
          color: 'var(--colors-text)',
          md: {
            fontSize: '4xl',
          },
        })}
      >
        {t('title')}
      </h1>
      <p
        className={css({
          fontSize: '1rem',
          fontWeight: 'medium',
          color: 'var(--colors-text-muted)',
        })}
      >
        {t('description')}
      </p>
      <Link className={button({ visual: 'solid' })} href={`${lang}/songs`}>
        {t('cta')}
      </Link>
    </section>
  );
};
