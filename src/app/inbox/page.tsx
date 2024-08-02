import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import ConversationList from '@/components/ConversationList';
import ChatList from '@/components/ChatList';
import ChatPanel from '@/components/ChatPanel';
import UserInfoPanel from '@/components/UserInfoPanel';
import NotesPanel from '@/components/NotesPanel';
import FilesPanel from '@/components/FilesPanel';
import MessageBox from '@/components/MessageBox';

const InboxPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        marginTop: '12px',
        pr: '15px',
        marginBottom: '40px',
      }}
    >
      <Grid container columnSpacing={1} rowSpacing={1}>
        <Grid item md={3} xs={12}>
          <Stack spacing={1} height='100%'>
            <ConversationList />
            <ChatList />
          </Stack>
        </Grid>
        <Grid item md={5.6} xs={12}>
          <Stack spacing={1} height='100%'>
            <ChatPanel />
            <MessageBox />
          </Stack>
        </Grid>
        <Grid item md={3.4} xs={12}>
          <Stack spacing={1}>
            <UserInfoPanel />
            <NotesPanel />
            <FilesPanel />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InboxPage;
