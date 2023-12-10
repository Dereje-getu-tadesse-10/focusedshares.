import pick from 'lodash/pick';
import { useTranslations } from 'next-intl';
import { Navbar } from '../Navbar/Navbar';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const Header = () => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, 'Menu')}>
      <Navbar />
    </NextIntlClientProvider>
  );
};
