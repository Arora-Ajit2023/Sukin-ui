// @ts-nocheck
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
import React, { useState } from 'react';
import Banner from '../Components/Banner';
import BestSeller from '../Components/BestSeller';
import RatingComp from '../Components/Reusable Components/RatingComp';
import RattingButton from '../Components/Reusable Components/RattingButton';
const StoryBox = styled('div')(({ theme }) => ({
  width: '80%',
}));
import BestSellerData from '../Json Data/BestSeller.json';
import { BestSellerStyle } from './Styles';

const StoryButton = styled('button')(({ theme }) => ({
  width: '200px',
  padding: '1rem',
  marginTop: '2.5rem',
  background: '#173f35',
  color: '#fff',
  border: '1px solid #173f35',
}));

// const BestSellerStyle = {
//   letterSpacing: '0.7rem',
//   fontSize: '1.7rem',
//   fontWeight: 800,
//   color: 'white',
//   paddingBottom: '2rem',
//   width: '100%',
//   textAlign: 'center',
// };

const BestSellerBox = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

const StoryContaint = styled('p')(({ theme }) => ({
  fontSize: '1.9rem',
  textAlign: 'center',
  lineHeight: '1.45',
  letterSpacing: '0.8px',
  fontWeight: 'fontWeightLight',
}));
const HomePage = () => {
  const [BestSellerImage, setBestSellerImage] = useState(false);
  return (
    <>
      ``
      <Banner />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem',
        }}
      >
        <StoryBox>
          <Box sx={{ width: '80%', margin: '0 auto' }}>
            <StoryContaint>
              Natural and effective skincare that’s good for you, your wallet,
              and the environment too.
            </StoryContaint>
            <Box
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <StoryButton>READ OUR STORY</StoryButton>
            </Box>
          </Box>
        </StoryBox>
      </Box>
      <BestSellerBox>
        <Box
          sx={{
            width: '100%',
            height: '300px',
          }}
        >
          <img
            src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Best-Sellers-Background_1728x.jpg?v=1613561987'
            alt='bestseller image'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundColor: 'black',
            }}
          />
        </Box>
        <Box sx={{ position: 'absolute', top: '30%', width: '100%' }}>
          <Typography sx={BestSellerStyle}>OUR BESTSELLERS</Typography>
          <Box
            sx={{
              display: 'flex',
              width: '80%',
              margin: '0 auto',
              gap: 2.5,
              justifyContent: 'center',
            }}
          >
            {/* {BestSellerData.map((bestProduct) => {
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
                  <Card sx={{ width: '280px' }}>
                    <CardMedia
                      component='img'
                      alt='best Seller Products'
                      height='120'
                      image={
                        !BestSellerImage
                          ? bestProduct.image1
                          : bestProduct.image2
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
            })} */}
            <BestSeller />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant='outlined'
              sx={{
                padding: '0.8rem',
                width: '150px',
                backgroundColor: 'white',
                borderColor: '#54585a !important',
                color: '#54585a',
                marginTop: '3rem',
                textAlign: 'center',

                '&:hover': {
                  opacity: 0.6,
                },
              }}
            >
              SEE ALL
            </Button>
          </Box>
        </Box>
      </BestSellerBox>
    </>
  );
};

export default HomePage;
