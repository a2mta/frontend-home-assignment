import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import SideNavigation from '@/components/SideNavigation/index';
import { Stack } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HelloCurve - Front-End Engineer Home Assignment',
  description:
    'A Next.js 13+ app with Material-UI for HelloCurve front-end assignment',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack
              direction='row'
              component='main'
              bgcolor='greyBg'
              height='100vh'
            >
              <SideNavigation />
              <Stack flex='1'>{children}</Stack>
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
