import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const EducationInfoCard = (props) => {
    const { info } = props;
    return (
        <>
        <Card sx={{ maxWidth: 450 }}>
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              <h6>Exercise Name: {info.nameOfExercise}</h6>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="auto"
            image={info.image}
            alt="Visualization of the exercise motion."
          />
          <CardContent>
            <Typography variant="caption" color="text.primary">
              <h3>Equipment Required: {info.equipment}</h3>
            </Typography>
            <Typography variant="body4" color="text.primary" textAlign="left">
              <p><strong>Instructions:</strong> {info.instructions}</p>
            </Typography>
          </CardContent>
        </Card>
        <br></br>
        </>
      );
    }