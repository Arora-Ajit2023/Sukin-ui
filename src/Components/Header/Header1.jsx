import { Box, Link, styled, Typography } from '@mui/material';
import React from 'react';
import './header1.css';
const Header1Box = styled('div')(({ theme }) => ({
  backgroundColor: '#173f35',
  color: '#fff',
  fontSize: '0.8rem',
}));

const ContainerBox = styled('div')(({ theme }) => ({
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
}));

const Header1 = () => {
  return (
    <Header1Box>
      <ContainerBox>
        <Box
          sx={{
            width: '60%',
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0',
            gap: '2%',
          }}
        >
          <Typography variant='inherit'>Free U.S. Shipping over $50</Typography>
          <Link href='#' underline='always' color='inherit'>
            Learn More
          </Link>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            justifyContent: 'end',
            padding: '15px 0',
            gap: '15%',
          }}
        >
          <div className='test'>
            <Typography variant='inherit' className='test1'>
              USD
            </Typography>
            <p className='test2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              officiis, earum ipsam odio fugit beatae nisi, recusandae ratione
              iste odit numquam perferendis magnam libero cupiditate laudantium
              magni, itaque dolores illum!
            </p>
          </div>
          <Link href='#' underline='none' color='inherit'>
            Find us in Store
          </Link>
        </Box>
      </ContainerBox>
    </Header1Box>
  );
};

export default Header1;
