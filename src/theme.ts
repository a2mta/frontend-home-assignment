'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type CustomColors = {
  greyBg: string;
  greyDark: string;
  greyLight: string;
  green: string;
  graphite: string;
  graphiteDark: string;
  darkRed: string;
  blue: string;
};

declare module '@mui/material/styles' {
  interface Palette extends CustomColors {}
  interface PaletteOptions extends CustomColors {}
}

//since i don't have any design i named colors pretty randomly

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFab: {
      variants: [
        {
          props: { variant: 'extended' },
          style: {
            with: '30px',
            height: '30px',
          },
        },
      ],
    },
  },
  palette: {
    mode: 'light',
    greyBg: '#F2F4F7',
    greyDark: '#EAECF0',
    greyLight: '#98A2B3',
    green: '#17B26A',
    graphite: '#667085',
    graphiteDark: '#475467',
    darkRed: '#F04438',
    blue: '#2970FF',
  },
});

export default theme;
