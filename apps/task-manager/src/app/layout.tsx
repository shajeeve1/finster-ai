import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React from 'react';
import ReactQueryProvider from '../config/react-query';
import theme from '../config/mui-theme';

import { ThemeProvider } from '@mui/material/styles';

export const metadata = {
  title: 'FinsterAI - Task Manager',
  description: 'A personalised task manager for Finster',
  icons: {
    icon: ['./pngs/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
