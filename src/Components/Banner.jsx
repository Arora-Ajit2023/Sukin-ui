import { Box, styled } from '@mui/material';
import React, { useRef } from 'react';
import BannarData from '../Json Data/Banner.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

const BannerImageContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100%',
  display: 'flex',
}));

const Banner = () => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
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
  );
};

export default Banner;
