import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import ConversationList from '@/components/ConversationList';
import ChatList from '@/components/ChatList';
import ChatPanel from '@/components/ChatPanel';

const InboxPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        marginTop: '12px',
        paddingRight: '15px',
        marginBottom: '40px'
      }}
    >
      <Grid container columnSpacing={1} rowSpacing={1}>
        <Grid item md={3}>
          <Stack spacing={1}>
            <ConversationList />
            <ChatList />
          </Stack>
        </Grid>
        <Grid item md={5.6}>
          <ChatPanel />
        </Grid>
        <Grid item md={3.4}>
          <Paper>xs=6 md=8</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InboxPage;
