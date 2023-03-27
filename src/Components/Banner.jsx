// @ts-nocheck
import { Box, styled } from '@mui/material';
import React, { useRef } from 'react';
import BannarData from '../Json Data/Banner.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

const BannerImageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  cursor: 'pointer',
  display: 'flex',
}));

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        top: '-146px',
        height: '100vh',
      }}
    >
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        style={{
          '--swiper-navigation-sides-offset': '30px',
          '--swiper-navigation-color': 'black',
        }}
      >
        {BannarData.map((Data) => {
          return (
            <SwiperSlide key={BannarData.indexOf(Data)}>
              <BannerImageContainer>
                <img
                  src={Data}
                  alt='Bannar Image'
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </BannerImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Banner;
