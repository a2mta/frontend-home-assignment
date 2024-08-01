'use client';
import { Stack, StackProps, Typography } from '@mui/material';
import React, { FC } from 'react';
import CustomIcon from '../CustomIcon';
import { IconList } from '../CustomIcon/iconsList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SideNavigationItemProps = {
  icon: IconList;
  title: string;
  path?: string;
} & StackProps;

const SideNavigationItem: FC<SideNavigationItemProps> = ({
  icon,
  title,
  path,
  ...rest
}) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      href={path || '/'}
      passHref
    >
      <Stack
        padding='7px 14px'
        borderRadius='10px'
        bgcolor={isActive ? 'greyDark' : 'inherit'}
        style={{ cursor: 'pointer' }}
        spacing='10px'
        direction='row'
        alignItems='center'
        {...rest}
      >
        <CustomIcon stroke={isActive ? 'black' : 'graphite'} icon={icon} />
        <Typography color={isActive ? 'black' : 'graphite'} variant='body2'>
          {title}
        </Typography>
      </Stack>
    </Link>
  );
};

export default SideNavigationItem;
