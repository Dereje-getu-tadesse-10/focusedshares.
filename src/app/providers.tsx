'use client';
import NiceModal from '@ebay/nice-modal-react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <NiceModal.Provider>{children}</NiceModal.Provider>
      </ThemeProvider>
    </SessionProvider>
  );
};
