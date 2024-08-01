import React from 'react';
import SideNavigationItem from './SideNavigationItem';
import { Stack, Typography } from '@mui/material';

const SideNavigation = () => {
  return (
    <Stack flex={1} maxWidth={220} component='nav' padding='18px 8px'>
      <div style={{ height: '35px' }}></div>
      <Stack marginBottom='10px'>
        <SideNavigationItem icon='inbox' path='/' title='Inbox' />
        <SideNavigationItem icon='search' title='Search' path='/search' />
        <SideNavigationItem icon='calls' title='Calls' path='/calls' />
        <SideNavigationItem icon='contacts' title='Contacts' path='/contacts' />
        <SideNavigationItem icon='stats' title='Stats' path='/stats' />
      </Stack>
      <Stack>
        <Typography
          style={{ cursor: 'default' }}
          padding={'7px 14px'}
          variant='body2'
          color='graphite'
        >
          Yours
        </Typography>
        <SideNavigationItem icon='assigned' title='Assigned' path='/assigned' />
        <SideNavigationItem icon='at' title='Mentions' path='/mentions' />
      </Stack>
      <Stack>
        <Typography
          color='graphite'
          style={{ cursor: 'default' }}
          padding={'7px 14px'}
          variant='body2'
        >
          Direct messages
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SideNavigation;
