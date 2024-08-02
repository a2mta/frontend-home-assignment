import { Box, Paper } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type InboxPanelProps = {
  header?: ReactNode;
  children?: ReactNode;
  fullHeight?: boolean;
};

const InboxPanel: FC<InboxPanelProps> = ({ header, children, fullHeight }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '7px',
        flexDirection: 'column',
        flex: 1,
        height: fullHeight ? '100%' : 'auto',
      }}
    >
      {header && (
        <Box
          sx={{
            padding: '7px 12px',
          }}
          width='100%'
        >
          {header}
        </Box>
      )}
      {children && (
        <Box padding='0px 4px 8px 4px' height='100%' width='100%'>
          {children}
        </Box>
      )}
    </Paper>
  );
};

export default InboxPanel;
