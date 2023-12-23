'use client';
import React from 'react';
import NiceModal from '@ebay/nice-modal-react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Snowfall from 'react-snowfall';


export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider defaultTheme='dark'>
        <NiceModal.Provider>{children}</NiceModal.Provider>
      </ThemeProvider>
      <Toaster />
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        speed={[0, 0.5]}
      />
    </SessionProvider>
  );
};
