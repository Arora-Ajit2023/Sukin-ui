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
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper';
import CategoryData from '../Json Data/Category.json';
import RatingComp from './Reusable Components/RatingComp';
import RattingButton from './Reusable Components/RattingButton';

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
            delay: 2500,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={5}
          style={{
            '--swiper-navigation-color': 'black',
            '--swiper-navigation-sides-offset': '30px',
          }}
        >
          {list.map((data) => {
            return (
              <Box>
                <SwiperSlide
                  key={data.id}
                  onMouseOver={() => {
                    setBestSellerImage(true);
                  }}
                  onMouseLeave={() => {
                    setBestSellerImage(false);
                  }}
                  style={{ height: '400px' }}
                >
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
                          <RattingButton
                            btn={data.review}
                            title={data.productName}
                          />
                        </Box>
                      </CardActions>
                    </Box>
                  </Card>
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
