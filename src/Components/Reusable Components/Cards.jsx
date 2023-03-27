import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import RatingComp from './RatingComp';
import RattingButton from './RattingButton';

const Cards = ({ data }) => {
  const [BestSellerImage, setBestSellerImage] = useState(false);
  return (
    <Card
      sx={{
        width: '280px',
        height: '390px',
        border: '0',
        cursor: 'pointer',
        '&:hover': {
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        },
      }}
      onMouseOver={() => {
        setBestSellerImage(true);
      }}
      onMouseLeave={() => {
        setBestSellerImage(false);
      }}
    >
      <CardMedia
        component='img'
        alt='best Seller Products'
        height='120'
        image={!BestSellerImage ? data.image1 : data.image2}
        sx={{
          objectFit: 'contain',
          width: '100%',
          height: 'auto',
        }}
      />
      <Box sx={{ bgcolor: '#d4d5d4' }}>
        <CardContent>
          <Typography
            variant='h5'
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              height: '30px',
            }}
          >
            {data.productName} | {data.category}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              fontSize: '1rem',
              color: '#54585a',
              paddingLeft: '0.5rem',
            }}
          >
            ${data.price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <RatingComp rating={data.ratting} />
            <RattingButton btn={data.review} title={data.productName} />
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Cards;
