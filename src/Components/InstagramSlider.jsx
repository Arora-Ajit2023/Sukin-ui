// @ts-nocheck
import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import InstaData from '../Json Data/InstagramDetails.json';
import './Insta.css';
const InstagramBox = styled(Box)(({ theme }) => ({
  width: '95%',
  margin: '0 auto',
  padding: '2rem 0',
}));

const InstagramSlider = () => {
  const [visible, setVisible] = useState(false);
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
                }}
                // onMouseOver={() => {
                //   setVisible(true);
                // }}
                // onMouseLeave={() => {
                //   setVisible(false);
                // }}
                className='slider'
              >
                <Box
                  component='img'
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  src={Data.image}
                  alt='Bannar Image'
                  className='instaImages'
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                  className='instaComments'
                >
                  <Typography
                    variant='body1'
                    color={'white'}
                    sx={{
                      p: '0.4rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical',
                      lineHeight: '1.8rem',
                      fontSize: '0.9rem',
                    }}
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
