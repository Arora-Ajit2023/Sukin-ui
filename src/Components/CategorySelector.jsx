// @ts-nocheck
import { Box, FormControl, MenuItem, Select, styled } from '@mui/material';

import React, { useState } from 'react';
import CategorySlider from './CategorySlider';

const category = [
  'SIGNATURE',
  'SUPER GREENS',
  'ROSEHIP',
  'OIL BALANCING',
  'SENSITIVE',
  'HAIR CARE',
];

const CategoryButton = styled('button')(({ theme }) => ({
  width: '180px',
  padding: '1rem',
  marginTop: '2.5rem',
  backgroundColor: 'white',
  color: '#54585a',
  border: '1px solid #173f35',
  fontSize: '0.9rem',
  margin: 0,
}));

const CategorySelector = () => {
  const [cat, setCat] = React.useState(category[0]);

  const handleChange = (event, index) => {
    setCat(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: '#2a7050',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            width: '80%',
            display: 'flex',
            justifyContent: 'space-between',
            p: '1.5rem 0',
          }}
        >
          <Box>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <Select
                variant='standard'
                value={cat}
                onChange={handleChange}
                displayEmpty
                inputProps={{
                  'aria-label': 'Without label',
                }}
                disableUnderline={true}
                sx={{
                  paddingLeft: '10px',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  letterSpacing: '0.5rem',
                  bgcolor: '#2a7050',
                }}
              >
                {category.map((cate) => {
                  return (
                    <MenuItem
                      key={cate}
                      value={cate}
                      sx={{
                        letterSpacing: '0.5rem',
                        '&:hover': {
                          borderBottom: '1px solid black',
                        },
                      }}
                    >
                      {cate}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CategoryButton>SHOPE THE RANGE</CategoryButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#d4d5d4' }}>
        <CategorySlider type={cat} />
      </Box>
    </>
  );
};

export default CategorySelector;
