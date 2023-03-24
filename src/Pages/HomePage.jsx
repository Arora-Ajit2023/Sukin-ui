import { Box, styled, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import Banner from '../Components/Banner';
import BestSeller from '../Components/BestSeller';
import NaturalValue from '../Json Data/NaturalSValue.json';
import Details from '../Json Data/Details.json';
import CategorySelector from '../Components/CategorySelector';
import Journal from '../Components/Journal';
import InstagramSlider from '../Components/InstagramSlider';
const StoryBox = styled('div')(({ theme }) => ({
  width: '80%',
}));

const StoryButton = styled('button')(({ theme }) => ({
  width: '200px',
  padding: '1rem',
  marginTop: '2.5rem',
  backgroundColor: '#173f35',
  color: '#fff',
  border: '1px solid #173f35',
  fontSize: '0.9rem',
}));

const BestSellerStyle = {
  letterSpacing: '0.7rem',
  fontSize: '1.7rem',
  fontWeight: 800,
  color: 'white',
  paddingBottom: '2rem',
  width: '100%',
  textAlign: 'center',
};

const BestSellerBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '93vh',
}));

const StoryContaint = styled('p')(({ theme }) => ({
  fontSize: '1.9rem',
  textAlign: 'center',
  lineHeight: '1.45',
  letterSpacing: '0.8px',
  fontWeight: '300',
  opacity: 0.7,
}));

const HomePage = () => {
  return (
    <>
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
                display: 'flex',
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
            backgroundColor: 'black',
          }}
        >
          <img
            src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Best-Sellers-Background_1728x.jpg?v=1613561987'
            alt='bestseller image'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
            }}
          />
        </Box>
        <Box sx={{ position: 'relative', top: '-220px', width: '100%' }}>
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
      <Box
        sx={{
          display: 'flex',
          width: '60%',
          margin: '0 auto',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingY: '2rem',
        }}
      >
        {NaturalValue.map((values) => {
          return (
            <Box
              key={values}
              sx={{
                width: '90px',
                height: '90px',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <img
                src={values}
                alt=' Naturals Value'
                style={{ width: '100%', objectFit: 'contain', height: '100%' }}
              />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          gap: 2.5,
          marginBottom: '3rem',
        }}
      >
        {Details.map((detail) => {
          return (
            <Box key={detail.id} sx={{ width: '50%', height: '60%' }}>
              <Box sx={{ width: '100%', height: '60vh' }}>
                <img
                  src={detail.image}
                  alt='details'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box
                sx={{
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingY: '1.5rem',
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    fontSize: '2rem',
                  }}
                >
                  {detail.heading}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    opacity: 0.7,
                    margin: '0 auto',
                  }}
                >
                  {detail.discription}
                </Typography>
              </Box>

              <Box
                sx={{
                  margin: '0 auto',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <StoryButton>{detail.btnValue}</StoryButton>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box>
        <CategorySelector />
      </Box>
      <Box
        sx={{
          backgroundColor: '#efefef',
        }}
      >
        <Journal />
      </Box>
      <Box>
        <InstagramSlider />
      </Box>
    </>
  );
};

export default HomePage;
