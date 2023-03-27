import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React from 'react';
import DeliveryData from '../../Json Data/Delivery.json';
import FooterLink from '../../Json Data/FooterLink.json';
import SocialImage from '../../Json Data/SocialLink.json';
const SearchBox = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});
const Footer1 = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', my: '3rem' }}>
        <Box
          sx={{
            display: 'flex',
            margin: '0 auto',
            width: '80%',
            justifyContent: 'center',
          }}
        >
          {DeliveryData.map((data) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  width: '25%',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component='img'
                  src={data.image}
                  alt='Delivery Image'
                  sx={{ width: '40%', height: '50px', objectFit: 'contain' }}
                />
                <Box
                  sx={{ width: '50%', display: 'flex', alignItems: 'center' }}
                >
                  <Typography
                    variant='inherit'
                    sx={{
                      opacity: '0.7',
                      lineHeight: '1.2rem',
                    }}
                  >
                    {data.detail}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#173f35', color: '#fff' }}>
        <Box
          sx={{
            width: '50%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            py: '2rem',
          }}
        >
          <Box>
            <Typography variant='h5'>STAY IN THE KNOW</Typography>
          </Box>
          <Box sx={{ width: '350px', border: '1px solid white' }}>
            {/* <SearchBox
              size='small'
              fullWidth
              placeholder='Enter Your Email'
              sx={{
                input: { color: 'white', fontSize: '1rem', py: '0.8rem' },
              }}
            /> */}

            <input
              type='text'
              style={{
                outline: 'none',
                padding: '0.7rem 0',
                backgroundColor: 'transparent',
                border: 0,
                color: 'white',
                fontSize: '1rem',
                marginLeft: '0.5rem',
                width: '200px',
              }}
              placeholder='Enter Your Email'
            />
            <Button
              sx={{ width: '130px', color: 'white', textTransform: 'none' }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          py: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '4rem',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {FooterLink.map((data) => {
            return (
              <>
                <Box key={data.id}>
                  <Typography
                    variant='h6'
                    sx={{ pb: '1rem', fontWeight: '400' }}
                  >
                    {data.heading}
                  </Typography>

                  {data.list.map((list) => {
                    return (
                      <List>
                        <ListItem disablePadding>
                          <Typography
                            variant='body2'
                            sx={{ opacity: '0.9', fontSize: '1rem' }}
                          >
                            {list}
                          </Typography>
                        </ListItem>
                      </List>
                    );
                  })}
                </Box>
              </>
            );
          })}
        </Box>
        <Box sx={{ width: '30%' }}>
          <Typography variant='h6' sx={{ pb: '1rem', fontWeight: '400' }}>
            Follow Sukin
          </Typography>
          <Box sx={{ width: '50%' }}>
            {SocialImage.map((data) => {
              return (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    {data.Social.map((social) => {
                      return (
                        <Box
                          sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: '#f4f3f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                              bgcolor: '#909997',
                            },
                          }}
                        >
                          <Box
                            component='img'
                            src={social}
                            alt='Facebook'
                            sx={{
                              width: '60%',
                              height: '60%',
                              objectFit: 'contain',
                            }}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </>
              );
            })}
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography
              variant='h6'
              sx={{ pb: '1rem', fontWeight: '400', mt: '2rem' }}
            >
              We are a proud sponsor of
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {SocialImage[0].image.map((data) => {
                return (
                  <Box>
                    <Box sx={{ width: '50px', height: '50px' }}>
                      <img
                        src={data}
                        alt='link'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#f4f3f0  ' }}>
        <Box
          sx={{
            width: '80%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.8rem',
            py: '0.2rem',
          }}
        >
          {SocialImage[0].footerLink.map((data) => {
            return (
              <Box
                sx={{
                  width: '160px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  component='img'
                  src={data}
                  sx={{ objectFit: 'contain', width: '100%', height: '80%' }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer1;
