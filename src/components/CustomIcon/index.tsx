'use client';
import React, { FC } from 'react';
import { IconList, icons } from './iconsList';
import { SvgIcon, SvgIconProps } from '@mui/material';

//to avoid spawning dozens of same files with custom icons implementation we'll make just one with an dictionary of all available custom icons
type CustomIconProps = {
  icon: IconList;
} & SvgIconProps;

const CustomIcon: FC<CustomIconProps> = ({ icon, ...rest }) => {
  const IconComponent = icons[icon];
  return (
    <SvgIcon
      {...rest}
      sx={{
          width: '20px',
          height: '20px',
          fill: 'none',
          ...rest.sx,
      }}
      inheritViewBox
      component={IconComponent}
    />
  );
};

export default CustomIcon;
