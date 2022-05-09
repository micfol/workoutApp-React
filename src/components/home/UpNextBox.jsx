import * as React from 'react';
import Box from '@mui/material/Box';
import SquatsIcon from '../utilities/Icons/SquatsIcon';
import BarbellRowIcon from '../utilities/Icons/BarbellRowIcon';
import BenchPressIcon from '../utilities/Icons/BenchPress';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


export default function BoxSx() {
  return (
    <Box
      sx={{
        maxWidth: '70%',
        p: 3,
        mx: 'auto',
        backgroundColor: '#D3D3D3',
      }}
    >
    <Stack 
    direction="row"
    justifyContent="center"
    alignItems="center"
    divider={<Divider orientation="vertical" flexItem />} 
    spacing={2}>
        <SquatsIcon /> 
        <BenchPressIcon />
        <BarbellRowIcon />
    </Stack>
    </Box>
  );
}