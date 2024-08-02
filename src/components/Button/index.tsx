import theme from '@/theme';
import { Button as MUIButton, SxProps } from '@mui/material';
import { FC } from 'react';

type ButtonVariants = 'green' | 'grey' | 'blue';

const variants: Record<ButtonVariants, SxProps> = {
  blue: {
    backgroundColor: theme.palette.blue,
    '&:hover': {
      backgroundColor: theme.palette.blue,
    },
  },
  green: {
    backgroundColor: theme.palette.green,
    '&:hover': {
      backgroundColor: theme.palette.green,
    },
  },
  grey: {
    backgroundColor: theme.palette.greyDark,
    color: theme.palette.graphiteDark,
    '&:hover': {
      backgroundColor: theme.palette.greyDark,
    },
  },
};

type ButtonProps = {
  variant: ButtonVariants;
  children: JSX.Element | JSX.Element[] | string;
};

const Button: FC<ButtonProps> = ({ variant = 'green', children }) => {
  const variantStyles = variants[variant];

  return (
    <MUIButton
      sx={{
        textTransform: 'initial',
        borderRadius: '9px',
        color: 'white',
        p: '4px 10px',
        ...variantStyles,
      }}
      size='small'
      variant='text'
    >
      {children}
    </MUIButton>
  );
};

export default Button;
