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
    greyLight: string;
    graphite: string;
    graphiteDark: string;
    darkRed: string;
  }
  interface PaletteOptions {
    greyBg: string;
    greyDark: string;
    greyLight: string;
    graphite: string;
    graphiteDark: string;
    darkRed: string;
  }
}

//since i don't have any design i named colors pretty randomly

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light',
    greyBg: '#F2F4F7',
    greyDark: '#EAECF0',
    greyLight: '#98A2B3',
    graphite: '#667085',
    graphiteDark: '#475467',
    darkRed: '#F04438',
  },
});

export default theme;
