import React, { FC } from 'react';
import { User } from '../../../types';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import SouthWest from '@mui/icons-material/SouthWest';

const ChatListItem: FC<User> = ({ name, avatar, status }) => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        padding: '11px',
        backgroundColor: 'greyBg',
        borderRadius: '6px',
      }}
    >
      {avatar && (
        <Stack sx={{ marginRight: '12px' }}>
          <Image src={avatar} width={20} height={20} alt={`${name} avatar`} />
        </Stack>
      )}
      <Stack sx={{ flex: 1 }}>
        <Typography variant='subtitle2'>{name}</Typography>
        <Stack
          sx={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
            <SouthWest sx={{ width: 16, height: 16 }} />
            <Typography variant='subtitle2'>Call ended</Typography>
          </Stack>
          <Typography variant='subtitle1' fontSize='small'>
            Thu 4:28 pm
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatListItem;
