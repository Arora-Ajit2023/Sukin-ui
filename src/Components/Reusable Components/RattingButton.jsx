import { Button } from '@mui/material';
import React from 'react';

const RattingButton = ({ btn, title }) => {
  return (
    <div>
      <Button
        title={title}
        sx={{
          color: '#2d2926',
          fontSize: '0.8rem',
          borderRadius: '6px',
          backgroundColor: 'transparent',
        }}
      >
        {btn} Review
      </Button>
    </div>
  );
};

export default RattingButton;
