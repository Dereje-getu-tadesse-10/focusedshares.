'use client';
import React, { useState } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(queryClient);
  return (
    <SessionProvider>
      <ThemeProvider defaultTheme='dark'>
        <NiceModal.Provider>{children}</NiceModal.Provider>
      </ThemeProvider>
      <Toaster />
    </SessionProvider>
  );
};
