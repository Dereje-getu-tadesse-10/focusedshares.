import { css } from '@/styled-system/css';
import { Dialog } from '@ark-ui/react';
import { useTranslations } from 'next-intl';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const AddSongHeader = () => {
  const t = useTranslations('AddSong');

  return (
    <>
      <Dialog.Title
        className={css({
          fontWeight: '600',
          fontSize: 'lg',
          color: 'var(--colors-text)',
        })}
      >
        {t('title')}
      </Dialog.Title>
      <Dialog.Description
        className={css({
          fontWeight: '400',
          fontSize: 'sm',
          color: 'var(--colors-text-muted)',
        })}
      >
        {t('description')}
      </Dialog.Description>
    </>
  );
};
