import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

type UserNameAvatar = {
  name?: string;
};

const UserNameAvatar: FC<UserNameAvatar> = ({ name = '' }) => {
  const splittedName = name.split(' ');
  const firstName = splittedName[0].substring(0, 1) || '';
  const lastName = splittedName[1].substring(0, 1) || '';
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{
        backgroundColor: 'greyDark',
        width: '35px',
        height: '35px',
        borderRadius: '100%',
        overflow: 'hidden',
      }}
    >
      <Box>
        <Typography variant='subtitle2' color='grey'>
          {`${firstName}${lastName}`}
        </Typography>
      </Box>
    </Stack>
  );
};

export default UserNameAvatar;
