import { Box, Paper } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type InboxPanelProps = {
  header: ReactNode;
  children?: ReactNode;
};

const InboxPanel: FC<InboxPanelProps> = ({ header, children }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '7px',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      {header && (
        <Box
          sx={{
            padding: '6px 12px',
          }}
          width='100%'
        >
          {header}
        </Box>
      )}
      {children && <Box sx={{padding: '0px 4px'}} width='100%'>{children}</Box>}
    </Paper>
  );
};

export default InboxPanel;
