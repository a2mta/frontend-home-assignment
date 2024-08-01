'use client';
import React, { FC, useMemo } from 'react';
import { User } from '../../../types';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import SouthWest from '@mui/icons-material/SouthWest';
import { useRouter, useSearchParams } from 'next/navigation';
import { conversations } from '@/data/dummyData.json';

const ChatListItem: FC<User> = ({ name, avatar, id }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsId = searchParams.get('userId');
  const conversation = useMemo(
    () => conversations.find(({ contactId }) => contactId === id),
    [id]
  );

  const lastMessage = conversation?.messages[conversation.messages.length - 1];
  console.info(lastMessage);
  //There's definitely a need to implement types, so that you can distinguish between message types and avoid this figuring out on which stage chat is
  const messageContent = useMemo(() => {
    if (lastMessage?.senderId === 'system') {
      if (lastMessage.content === 'Call ended') {
        return (
          <Stack direction='row' color='graphiteDark' alignItems='center'>
            <SouthWest color='inherit' sx={{ width: 16, height: 16 }} />
            <Typography color='inherit' variant='subtitle2'>
              Call ended
            </Typography>
          </Stack>
        );
      }
      if (lastMessage.content === 'Missed call') {
        return (
          <Stack direction='row' alignItems='center' color='darkRed'>
            <SouthWest color='inherit' sx={{ width: 16, height: 16 }} />
            <Typography color='inherit' variant='subtitle2'>
              Missed call
            </Typography>
          </Stack>
        );
      }
    } else
      return (
        <Typography noWrap color='graphite'>
          {lastMessage?.content}
        </Typography>
      );
  }, [lastMessage?.content, lastMessage?.senderId]);

  const handleClick = () => {
    router.push(`/?userId=${id}`);
  };
  const isActive = paramsId === id;
  return (
    <Stack
      onClick={handleClick}
      sx={{
        flexDirection: 'row',
        padding: '11px',
        cursor: 'pointer',
        backgroundColor: isActive ? 'greyBg' : 'inherit',
        borderRadius: '6px',
      }}
    >
      {avatar && (
        <Stack>
          <Image
            style={{ marginRight: '12px' }}
            src={avatar}
            width={20}
            height={20}
            alt={`${name} avatar`}
          />
        </Stack>
      )}
      <Stack
        sx={{
          overflow: 'hidden',
          flex: 1,
          width: '100%',
        }}
      >
        <Typography noWrap variant='subtitle2'>
          {name}
        </Typography>
        <Stack
          sx={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <Stack
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {messageContent}
          </Stack>
          <Typography color='greyLight' variant='subtitle1' fontSize='small'>
            Thu 4:28 pm
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatListItem;
