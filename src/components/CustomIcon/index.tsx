import { Box, SvgIcon, SvgIconOwnProps, SvgIconProps } from '@mui/material';
import React, { FC } from 'react';
import { IconList, icons } from './iconsList';
//to avoid spawning dozens of files with custom icons implementation we'll make just one with an dictionary of all available custom icons

type CustomIconProps = {
  icon: IconList;
};

const CustomIcon: FC<CustomIconProps> = ({ icon }) => {
  const IconComponent = icons[icon];
  return <IconComponent />;
};

export default CustomIcon;
