import * as React from 'react';
import Box from '@mui/material/Box';
import SquatsIcon from '../utilities/Icons/SquatsIcon';
import BarbellRowIcon from '../utilities/Icons/BarbellRowIcon';
import BenchPressIcon from '../utilities/Icons/BenchPress';
import OverheadPressIcon from '../utilities/Icons/OverheadPressIcon';
import DeadliftIcon from '../utilities/Icons/DeadliftIcon';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { workoutA } from '../exercise/workouts';

export default function UpNextBox(props) {
  const {isWorkoutA} = props;

  return (
    <Box
      sx={{
        p: 3,
        mx: 'auto',
        backgroundColor: '#D3D3D3',
      }}
    >
    {!isWorkoutA 
        ? 
      <Stack 
      direction="row"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />} 
      spacing={2}>
          <Stack 
            direction="column"
            alignItems="center"
            sx={{width: '30%'}}>
                <SquatsIcon />
                <p>Squats</p>
          </Stack>
          <Stack 
            direction="column"
            alignItems="center"
            sx={{width: '30%'}}>
                <BenchPressIcon />
                <p>Bench Press</p> 
          </Stack>
          <Stack 
            direction="column"
            alignItems="center"
            sx={{width: '30%'}}>
                <BarbellRowIcon />
                <p>Barbell Rows</p> 
          </Stack>
      </Stack>
        :
      <Stack 
        direction="row"
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />} 
        spacing={2}>
            <Stack 
              direction="column"
              alignItems="center"
              sx={{width: '25%'}}>
                  <SquatsIcon />
                  <p>Squats</p>
            </Stack>
            <Stack 
              direction="column"
              alignItems="center"
              sx={{width: '38%'}}>
                <OverheadPressIcon />
                <p>Overhead Press</p> 
            </Stack>
            <Stack 
              direction="column"
              alignItems="center"
              sx={{width: '25%'}}>
                  <DeadliftIcon />
                  <p>Deadlift</p> 
            </Stack>
        </Stack>
        }
    </Box>
  );
}