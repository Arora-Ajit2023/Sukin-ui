import { Box, Link, styled, Typography } from '@mui/material';
import React from 'react';

const Header1Box = styled('div')(({ theme }) => ({
  backgroundColor: '#173f35',
  color: '#fff',
  padding: '12px 0',
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
            gap: '15%',
          }}
        >
          <Typography variant='inherit'>USD</Typography>
          <Link href='#' underline='none' color='inherit'>
            Find us in Store
          </Link>
        </Box>
      </ContainerBox>
    </Header1Box>
  );
};

export default Header1;
