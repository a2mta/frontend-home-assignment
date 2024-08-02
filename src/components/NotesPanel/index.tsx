'use client'
import { Stack, Typography } from '@mui/material';
import React from 'react';
import InboxPanel from '../InboxPanel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSearchParams } from 'next/navigation';

const NotesPanel = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  if (!userId) return null;
  const HeaderComp = (
    <Stack direction='row' justifyContent='space-between' color='grey' flex='1'>
      <Stack direction='row'>
        <Typography
          color='black'
          sx={{ marginLeft: '6px' }}
          variant='subtitle2'
        >
          Notes
        </Typography>
        <Typography
          color='graphite'
          sx={{ marginLeft: '6px' }}
          variant='subtitle2'
        >
          2
        </Typography>
      </Stack>
      <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} fontSize='small' />
    </Stack>
  );
  return <InboxPanel header={HeaderComp} />;
};

export default NotesPanel;
