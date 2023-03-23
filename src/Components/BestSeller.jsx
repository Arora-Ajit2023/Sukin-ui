import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Button,
  Typography,
} from '@mui/material';
import BestSellerData from '../Json Data/BestSeller.json';
import RatingComp from './Reusable Components/RatingComp';
import RattingButton from './Reusable Components/RattingButton';

const BestSeller = () => {
  const [BestSellerImage, setBestSellerImage] = useState(false);

  return (
    <>
      {BestSellerData.map((bestProduct) => {
        return (
          <Box
            onMouseOver={() => {
              setBestSellerImage(true);
            }}
            onMouseLeave={() => {
              setBestSellerImage(false);
            }}
            sx={{
              border: '1px solid transparent',
              '&:hover': {
                border: '1px solid transparent',
                boxShadow: 3,
              },
            }}
            key={bestProduct.id}
          >
            <Card sx={{ width: '280px', border: 'none', cursor: 'pointer' }}>
              <CardMedia
                component='img'
                alt='best Seller Products'
                height='120'
                image={
                  !BestSellerImage ? bestProduct.image1 : bestProduct.image2
                }
                sx={{
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                }}
              />
              <CardContent>
                <Typography
                  variant='h5'
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                  }}
                >
                  {bestProduct.productName} | {bestProduct.category}
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
                  ${bestProduct.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RatingComp rating={bestProduct.ratting} />
                  <RattingButton
                    btn={bestProduct.review}
                    title={bestProduct.productName}
                  />
                </Box>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </>
  );
};

export default BestSeller;
