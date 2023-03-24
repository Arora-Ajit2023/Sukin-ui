// @ts-nocheck
import { Box, Button, Link, styled, Typography } from '@mui/material';
import React from 'react';
import JounralData from '../Json Data/Journal.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper';
const JournalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '80%',
  margin: '0 auto',
  padding: '4rem 0',
  gap: '0.5rem',
  height: '550px',
}));
const JournalSliderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '65%',
  margin: '0 auto',
  gap: '0.8rem',
  padding: '0 0.8rem',
}));
const Journal = () => {
  return (
    <div>
      <JournalBox>
        <Box sx={{ width: '35%' }}>
          <img
            src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Sukin_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992'
            alt='jounral image'
            style={{ width: '80%', height: '40px', objectFit: 'contain' }}
          />
          <Typography
            variant='body2'
            sx={{
              width: '80%',
              pt: '0.5rem',
              fontSize: '0.9rem',
            }}
          >
            Discover the world of natural through our eyes! From skincare tips,
            lifestyle and environmental hacks to inspirational interviews!
            Explore it all.
          </Typography>
          <Button
            sx={{
              width: '200px',
              padding: '1rem',
              marginTop: '2.5rem',
              backgroundColor: '#173f35',
              color: '#fff',
              border: '1px solid #173f35',
              fontSize: '0.9rem',
              '&:hover': {
                opacity: '0.8',
                bgcolor: '#173f35',
              },
            }}
          >
            READ THE JOUNRAL
          </Button>
        </Box>
        <JournalSliderBox>
          <Swiper
            slidesPerView={2}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            pagination={true}
            modules={[Autoplay, Pagination]}
            spaceBetween={35}
            slidesPerGroup={2}
          >
            {JounralData.map((Data) => {
              return (
                <SwiperSlide
                  key={Data.id}
                  style={{ width: '50%', cursor: 'pointer' }}
                >
                  <Box sx={{ width: '100%' }}>
                    <img
                      src={Data.image}
                      alt='Bannar Image'
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '350px',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant='h5'
                      sx={{ fontSize: '1.3rem', height: '60px', p: '0.8rem' }}
                    >
                      {Data.heading}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '100%',
                        p: '0.5rem',
                      }}
                    >
                      {Data.detail}
                    </Typography>
                    <Link href='#' underline='always' variant='subtitle2'>
                      Read more
                    </Link>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </JournalSliderBox>
      </JournalBox>
    </div>
  );
};

export default Journal;
