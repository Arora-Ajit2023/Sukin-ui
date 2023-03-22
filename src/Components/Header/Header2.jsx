import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Divider, Link } from '@mui/material';

const NavUL = styled('ul')(({ theme }) => ({
  listStyle: 'None',
  display: 'flex',
  paddingTop: '2rem',
  flexGrow: '4',
  gap: '2rem',
  alignItems: 'center',
}));

const NavList = styled('li')(({ theme }) => ({
  listStyle: 'None',
}));

const Header2 = () => {
  const [NavColor, setNavColor] = useState(false);

  const ChangeNavBackgroundColor = () => {
    if (window.scrollY >= 35) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener('scroll', ChangeNavBackgroundColor);
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: NavColor ? '#fff' : '#efefef',
        position: 'sticky',
        padding: '1.3rem 0 ',
        height: '7rem',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: '80%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <Box sx={{ width: '15%' }}>
            <img
              src='https://raw.githubusercontent.com/Arora-Ajit2023/image-sukin/main/logo.svg'
              alt='logo'
            />
          </Box>
          <Box>
            <NavUL>
              <NavList>
                <Link
                  href='#'
                  underline='none'
                  sx={{
                    color: '#173f35',
                    fontSize: '0.8rem',
                    paddingTop: '1rem',
                  }}
                >
                  BESTSELLERS
                </Link>
              </NavList>
              <NavList>
                <Link
                  href='#'
                  underline='none'
                  sx={{
                    color: '#173f35',
                    fontSize: '0.8rem',
                  }}
                >
                  GIFT SETS
                </Link>
              </NavList>
              <NavList>
                <Link
                  href='#'
                  underline='none'
                  sx={{
                    color: '#173f35',
                    fontSize: '0.8rem',
                  }}
                >
                  SHOP THE RANGE
                </Link>
              </NavList>
              <NavList>
                <Link
                  href='#'
                  underline='none'
                  sx={{
                    color: '#173f35',
                    fontSize: '0.8rem',
                  }}
                >
                  LAST CHANCE
                </Link>
              </NavList>

              <NavList sx={{ width: '150px' }}>
                <img
                  src='https://storage.googleapis.com/dtk-sukin-naturals-au/blog/blog-journal_1547004848945.svg'
                  alt='sample'
                />
              </NavList>
            </NavUL>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexGrow: '5',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '2rem',
              paddingTop: '2rem',
            }}
          >
            <Box sx={{ width: '20px', height: '25px' }}>
              <img
                src='https://raw.githubusercontent.com/Arora-Ajit2023/image-sukin/main/search%20(1).svg'
                alt='cart'
                style={{
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{ width: '20px', height: '25px' }}>
              <img
                src='https://raw.githubusercontent.com/Arora-Ajit2023/image-sukin/main/person.svg'
                alt='person'
                style={{
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{ width: '20px', height: '25px' }}>
              <img
                src='https://raw.githubusercontent.com/Arora-Ajit2023/image-sukin/main/search.svg'
                alt='search'
                style={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header2;
