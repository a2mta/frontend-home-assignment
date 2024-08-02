'use client';
import React from 'react';
import InboxPanel from '../InboxPanel';
import { Box, Fab, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatListItem from './ChatListItem';

//contacts should be properly fetched from dummy api endopint but i didn't had time to implement it
import { contacts } from '@/data/dummyData.json';
import CustomIcon from '../CustomIcon';

const ChatList = () => {
  const HeaderComp = (
    <Stack direction='row' justifyContent='space-between' color='grey' flex='1'>
      <Stack direction='row'>
        <Typography color='black' variant='body2'>
          Open
        </Typography>
        <KeyboardArrowDownIcon
          sx={{ mr: '8px', cursor: 'pointer' }}
          fontSize='small'
        />
      </Stack>
      <MoreHoriz sx={{ cursor: 'pointer' }} fontSize='small' />
    </Stack>
  );
  return (
    <InboxPanel fullHeight header={HeaderComp}>
      <Box position='relative' height='100%'>
        <Stack flex={1} spacing='2px' >
          {contacts.map((contact) => (
            <ChatListItem key={contact.id} {...contact} />
          ))}
        </Stack>
        <Fab
          disableRipple
          aria-label='add'
          sx={{
            backgroundColor: 'graphiteDark',
            position: 'absolute',
            right: '11px',
            bottom: '5px',
            boxShadow: 'none',
            width: '37px',
            height: '37px',
            minHeight: '37px',
            '&:hover': {
              backgroundColor: 'graphiteDark',
            },
          }}
        >
          <CustomIcon icon='plus' stroke='white' />
        </Fab>
      </Box>
    </InboxPanel>
  );
};

export default ChatList;
