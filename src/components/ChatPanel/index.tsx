'use client';
import { Box, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useMemo } from 'react';
import InboxPanel from '../InboxPanel';
import CustomIcon from '../CustomIcon';
import Check from '@mui/icons-material/Check';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { contacts } from '@/data/dummyData.json';

const ChatPanel = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const user = useMemo(
    () => (userId ? contacts.find(({ id }) => id === userId) : undefined),
    [userId]
  );
  if (!userId) return null;

  const HeaderComp = (
    <Stack direction='row' justifyContent='space-between' color='grey' flex='1'>
      <Stack direction='row'>
        <Box>
          <CustomIcon icon='hash' />
        </Box>
        <Typography color='black' marginLeft='6px' variant='subtitle2'>
          Primary
        </Typography>
      </Stack>
      <Stack spacing='4px' direction='row' alignItems='center'>
        <Typography variant='subtitle2' color='black'>
          {user?.name}
        </Typography>
        <Typography variant='body2'>{user?.phone}</Typography>
      </Stack>
      <Stack direction='row' spacing='12px' sx={{ flexDirection: 'row' }}>
        <Check sx={{ cursor: 'pointer', width: 18, height: 18 }} />
        {/* wasn't able to find pin icon in assets and in MUI lib */}
        <PushPinOutlinedIcon
          sx={{ cursor: 'pointer', width: 18, height: 18 }}
        />
        <MoreHoriz sx={{ cursor: 'pointer', width: 18, height: 18 }} />
      </Stack>
    </Stack>
  );
  return (
    <Suspense>
      <InboxPanel fullHeight header={HeaderComp}>
        <Stack sx={{ height: '100%' }} flex='1' spacing='2px' marginTop='5px'>
          {userId}
        </Stack>
      </InboxPanel>
    </Suspense>
  );
};

export default ChatPanel;
