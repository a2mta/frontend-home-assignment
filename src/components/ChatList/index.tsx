import React from 'react';
import InboxPanel from '../InboxPanel';
import { Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { contacts } from '@/data/dummyData.json';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const HeaderComp = (
    <Stack direction='row' justifyContent='space-between' color='grey' flex='1'>
      <Stack direction='row'>
        <Typography color='black' variant='body2'>
          Open
        </Typography>
        <KeyboardArrowDownIcon
          sx={{ marginRight: '8px', cursor: 'pointer' }}
          fontSize='small'
        />
      </Stack>
      <MoreHoriz sx={{ cursor: 'pointer' }} fontSize='small' />
    </Stack>
  );
  return (
    <InboxPanel header={HeaderComp}>
      <Stack spacing='2px' marginTop='5px'>
        {contacts.map((contact) => (
          <ChatListItem key={contact.id} {...contact} />
        ))}
      </Stack>
    </InboxPanel>
  );
};

export default ChatList;
