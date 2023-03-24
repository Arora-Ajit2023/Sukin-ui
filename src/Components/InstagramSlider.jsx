// @ts-nocheck
import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import InstaData from '../Json Data/InstagramDetails.json';

const InstagramBox = styled(Box)(({ theme }) => ({
  width: '95%',
  margin: '0 auto',
  padding: '2rem 0',
}));

const InstagramSlider = () => {
  return (
    <InstagramBox>
      <Typography
        variant='h5'
        sx={{
          textAlign: 'center',
          paddingY: '0.8rem',
          fontSize: '2rem',
          fontWeight: '600',
        }}
      >
        FOLLOW SUKIN NATURALS ON INSTAGRAM
      </Typography>
      <Swiper
        slidesPerView={6}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={10}
      >
        {InstaData.map((Data) => {
          return (
            <>
              <SwiperSlide
                key={Data.id}
                style={{
                  width: '250px',
                  height: '250px',
                  position: 'relative',
                  backgroundColor: 'black',
                }}
              >
                <Box
                  component='img'
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    '&:hover': {
                      opacity: 0.4,
                      visibility: 'visible',
                    },
                  }}
                  src={Data.image}
                  alt=" alt='Bannar Image'"
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    '&:hover': { visibility: 'visible' },
                  }}
                >
                  <Typography
                    variant='body1'
                    color={'white'}
                    sx={{ p: '0.4rem' }}
                  >
                    {Data.comments}
                  </Typography>
                  <Typography
                    variant='body1'
                    color={'white'}
                    sx={{ p: '0.4rem' }}
                  >
                    {Data.date}
                  </Typography>
                </Box>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </InstagramBox>
  );
};

export default InstagramSlider;
