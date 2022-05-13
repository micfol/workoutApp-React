import '../../App.css'
import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const EducationInfoCard = (props) => {
    const { info } = props;
    return (
        <>
        <Box mb={2} mt={2}>
        <Paper elevation={9}>
        <Card sx={{ maxWidth: 450 }}>  
            <CardContent>
              <Typography variant="e2">
                Exercise Name: {info.nameOfExercise}
              </Typography>
            </CardContent>
          <CardMedia
            component="img"
            maxheight="auto"
            image={info.image}
            alt="Visualization of the exercise motion."
          />
          <CardContent>
            <Typography variant="p1" color="text.primary">
              <h3>Equipment Required: {info.equipment}</h3>
            </Typography>
            <Typography variant="p1" color="text.primary" textAlign="left">
              <p><strong>Instructions:</strong> {info.instructions}</p>
            </Typography>
          </CardContent>
        </Card>
        </Paper>
        </Box>
        </>
      );
    }