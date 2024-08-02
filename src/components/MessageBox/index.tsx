'use client';

import React from 'react';
import InboxPanel from '../InboxPanel';
import { Box, Fab, Stack, styled } from '@mui/material';
import CustomIcon from '../CustomIcon';
import theme from '@/theme';
import Button from '../Button';
import { useSearchParams } from 'next/navigation';

const TextArea = styled('textarea')(() => ({
  border: 'none',
  overflow: 'auto',
  outline: 'none',
  boxShadow: 'none',
  resize: 'none',
  width: '100%',
  height: '45px',
  color: 'grey',
  fontFamily: 'inherit',
  '::placeholder': {
    textAlign: 'center',
    lineHeight: '45px',
  },
}));

const MessageBox = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  if (!userId) return null;
  return (
    <Stack flex='0'>
      <InboxPanel>
        <Box padding='10px'>
          <TextArea placeholder='Write a message...' />
        </Box>
        <Stack margin='0px 10px' justifyContent='space-between' direction='row'>
          <Stack spacing={1.5} direction='row'>
            <Fab
              disableRipple
              aria-label='add'
              sx={{
                boxShadow: 'none',
                width: '22px',
                height: '22px',
                minHeight: '22px',
              }}
            >
              <CustomIcon icon='plus' stroke={theme.palette.graphite} />
            </Fab>
            <CustomIcon icon='smile' />
            <CustomIcon icon='recording' />
            <CustomIcon icon='video-recorder' />
          </Stack>
          <Box>
            <Button variant='blue'>Send</Button>
          </Box>
        </Stack>
      </InboxPanel>
    </Stack>
  );
};

export default MessageBox;
