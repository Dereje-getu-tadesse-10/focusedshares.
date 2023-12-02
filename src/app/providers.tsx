'use client';
import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
