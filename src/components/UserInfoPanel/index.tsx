'use client';
import React, { FC, useMemo } from 'react';
import InboxPanel from '../InboxPanel';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { contacts } from '@/data/dummyData.json';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import UserNameAvatar from '../UserNameAvatar';
import Button from '../Button';
import CustomIcon from '../CustomIcon';
import { IconList } from '../CustomIcon/iconsList';
import AddIcon from '@mui/icons-material/Add';

const ShortDescriptionItem: FC<{
  title?: string;
  subTitle?: string;
  subTitlePlaceholder?: string;
  icon?: IconList;
}> = ({ title, subTitle, icon = 'user', subTitlePlaceholder }) => (
  <>
    <Grid item md={6.5}>
      <Stack spacing='10px' direction='row' alignItems='center'>
        <CustomIcon sx={{ fill: 'none', height: '16px' }} icon={icon} />
        <Typography variant='subtitle2' color='graphite'>
          {title}
        </Typography>
      </Stack>
    </Grid>
    <Grid
      item
      md={4.5}
      sx={{
        overflow: 'hidden',
      }}
    >
      {/* it's hard to understand how color should behave, judging by screenshot but i assume that it should be black only if information is present */}
      <Typography
        noWrap
        variant='subtitle2'
        color={!!subTitle ? 'black' : 'graphite'}
      >
        {subTitle || subTitlePlaceholder}
      </Typography>
    </Grid>
  </>
);

const UserInfoPanel = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const user = useMemo(
    () => (userId ? contacts.find(({ id }) => id === userId) : undefined),
    [userId]
  );
  if (!userId) return null;

  const HeaderComp = (
    <Stack justifyContent='space-between' flexDirection='row'>
      <Box marginTop='10px'>
        <UserNameAvatar name={user?.name} />
      </Box>
      <MoreHoriz sx={{ cursor: 'pointer', width: 18, height: 18 }} />
    </Stack>
  );

  return (
    <InboxPanel header={HeaderComp}>
      <Stack sx={{ margin: '0px 10px' }}>
        <Typography
          variant='subtitle2'
          sx={{
            marginTop: '8px',
            letterSpacing: '2px',
            fontSize: 16,
          }}
        >
          {user?.name}
        </Typography>
        <Stack spacing='5px' sx={{ marginTop: '18px' }} direction='row'>
          <Button variant='blue'>
            <CustomIcon
              sx={{
                marginRight: '9px',
                height: '15px',
                fill: 'white',
              }}
              icon='calls'
            />
            <Typography variant='subtitle2' fontSize='small'>
              Audio
            </Typography>
          </Button>
          <Button variant='green'>
            <CustomIcon
              sx={{
                marginRight: '9px',
                fill: 'white',
                stroke: 'white',
                height: '14px',
              }}
              icon='video-recorder'
            />
            <Typography variant='subtitle2' fontSize='small'>
              Video
            </Typography>
          </Button>
          <Button variant='grey'>
            <CustomIcon
              sx={{
                marginRight: '9px',
                height: '18px',
              }}
              icon='moon'
            />
            <Typography variant='subtitle2' fontSize='small'>
              Mute
            </Typography>
          </Button>
          <Button variant='grey'>
            <CustomIcon
              sx={{
                marginRight: '9px',
                height: '18px',
              }}
              icon='share'
            />
            <Typography variant='subtitle2' fontSize='small'>
              Share
            </Typography>
          </Button>
        </Stack>
        <Stack marginTop='20px'>
          <Grid container rowSpacing='13px'>
            <ShortDescriptionItem
              icon='user'
              title='Name'
              subTitle={user?.name}
            />
            <ShortDescriptionItem
              icon='hash'
              title='Number'
              subTitle={user?.phone}
            />
            <ShortDescriptionItem
              icon='map'
              title='Location'
              subTitle={user?.location}
              subTitlePlaceholder='Enter an adress...'
            />
            <ShortDescriptionItem
              icon='at'
              title='Email'
              subTitle={user?.email}
              subTitlePlaceholder='Enter an email...'
            />
            <ShortDescriptionItem
              icon='brief-case'
              title='Company'
              subTitle={user?.company}
              subTitlePlaceholder='Enter a name...'
            />
            <ShortDescriptionItem
              icon='check-verified'
              title='Status'
              subTitle={user?.status}
              subTitlePlaceholder='Add a tag...'
            />
            <ShortDescriptionItem
              icon='target'
              title='Source'
              subTitle={user?.source}
              subTitlePlaceholder='Enter...'
            />
            <ShortDescriptionItem
              icon='key'
              title='Access'
              subTitle={user?.access}
            />
          </Grid>
          <Stack direction='row' marginTop='10px'>
            <AddIcon fill='black' fontSize='small' />
            <Typography marginLeft='5px' variant='subtitle2'>
              New detail
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </InboxPanel>
  );
};

export default UserInfoPanel;
