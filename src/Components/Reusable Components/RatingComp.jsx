import { Rating } from '@mui/material';
import React from 'react';

const RatingComp = ({ rating }) => {
  return (
    <div>
      <Rating
        name='read-only'
        value={rating}
        precision={0.5}
        readOnly
        sx={{ color: '#2d2926', fontSize: '1.2rem' }}
      />
    </div>
  );
};

export default RatingComp;
