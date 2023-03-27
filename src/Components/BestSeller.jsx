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
import Cards from './Reusable Components/Cards';

const BestSeller = () => {
  return (
    <>
      {BestSellerData.map((bestProduct) => {
        return (
          <Box
            sx={{
              border: '1px solid transparent',
              '&:hover': {
                border: '1px solid transparent',
                boxShadow: 3,
              },
            }}
            key={bestProduct.id}
          >
            <Cards data={bestProduct} />
          </Box>
        );
      })}
    </>
  );
};

export default BestSeller;
