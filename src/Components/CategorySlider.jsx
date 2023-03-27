// @ts-nocheck
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';
import CategoryData from '../Json Data/Category.json';
import Cards from './Reusable Components/Cards';

const CategorySlider = ({ type }) => {
  const [BestSellerImage, setBestSellerImage] = useState(false);
  const list = useMemo(() => {
    return CategoryData[0][type];
  }, [type]);
  // console.log('list', list[0]);
  return (
    <Box sx={{ width: '80%', height: '50%', margin: '0 auto', py: '3rem' }}>
      <Box sx={{ width: '100%' }}>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerGroup={2}
          style={{
            '--swiper-navigation-color': 'black',
            '--swiper-navigation-sides-offset': '30px',
          }}
        >
          {list.map((data) => {
            return (
              <Box>
                <SwiperSlide key={data.id} style={{ height: '400px' }}>
                  <Cards data={data} />
                </SwiperSlide>
              </Box>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default CategorySlider;
