'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  interface Palette {
    greyBg: string;
    greyDark: string;
    graphite: string;
  }
  interface PaletteOptions {
    greyBg: string;
    greyDark: string;
    graphite: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light',
    greyBg: '#F2F4F7',
    greyDark: '#EAECF0',
    graphite: '#667085',
  },
});

export default theme;
