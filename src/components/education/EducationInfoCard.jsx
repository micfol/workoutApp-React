import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const EducationInfoCard = (props) => {
    const { info } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="auto"
            image={info.image}
            alt="Visualization of the exercise motion."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Exercise Name: {info.nameOfExercise}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Target Muscle Group: {info.target}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Equipment Required: {info.equipment}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Instructions: {info.instructions}
            </Typography>
          </CardContent>
        </Card>
      );
    }