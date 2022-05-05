import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { referenceWorkOutByBodyType } from '../api';
import { useParams } from 'react-router-dom';

export default function FitnessByBodyPart(props) {
    const {bodyPart} = props;
    const {bodyPartId} = useParams();

  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Body Part: -{bodyPart}-
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a text box
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}