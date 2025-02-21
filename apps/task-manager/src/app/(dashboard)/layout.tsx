'use client';
import { AppProvider } from '@toolpad/core/AppProvider';
import theme from '../../config/mui-theme';
import { DashboardLayout as ToolpadDashboardLayout } from '@toolpad/core/DashboardLayout';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';

const navigationItems = [
  {
    segment: 'tasks',
    title: 'Tasks',
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider
      navigation={navigationItems}
      theme={theme}
      branding={{
        logo: (
          <Image src="/svgs/logo.svg" width={150} height={50} alt="MUI logo" />
        ),
        homeUrl: '/',
        title: '',
      }}
    >
      <CssBaseline />
      <ToolpadDashboardLayout>{children}</ToolpadDashboardLayout>
    </AppProvider>
  );
}
