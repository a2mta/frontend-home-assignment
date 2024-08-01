import React from 'react';
import InboxPanel from '../InboxPanel';
import { Box, Stack, Typography } from '@mui/material';
import CustomIcon from '../CustomIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ConversationList = () => {
  const HeaderComp = (
    <Stack direction='row' justifyContent='space-between' color='grey' flex='1'>
      <Stack direction='row'>
        <Box>
          <CustomIcon icon='hash' />
        </Box>
        <Typography
          color='black'
          sx={{ marginLeft: '6px' }}
          variant='subtitle2'
        >
          All conversaions
        </Typography>
      </Stack>
      <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} fontSize='small' />
    </Stack>
  );
  return <InboxPanel header={HeaderComp} />;
};

export default ConversationList;
