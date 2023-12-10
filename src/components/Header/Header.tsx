import pick from 'lodash/pick';
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
