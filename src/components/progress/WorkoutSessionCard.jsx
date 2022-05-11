import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteCardModal from './DeleteCardModal'

export default function WorkoutSessionCard(props) {
  const { info } = props;
  console.log('info :>> ', info);

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign="left">
           {info.exercises[0].createdAt.slice(0,10)}
        </Typography>
        <Typography variant="body1" textAlign="left">
        Workout {info.isWorkoutA ? 'A' : 'B'}  
        </Typography>
        <Typography variant="body2" textAlign="left">
          {info.exercises[0].exerciseName} @ {info.exercises[0].weight}kg
        </Typography>
        <Typography variant="body2" textAlign="left">
          {info.exercises[0].sets.join(` `)}
        </Typography>
        <Typography variant="body2" textAlign="left">
        {info.exercises[1].exerciseName} @ {info.exercises[1].weight}kg
        </Typography>
        <Typography variant="body2" textAlign="left">
        {info.exercises[1].sets.join(` `)}
        </Typography>
        <Typography variant="body2" textAlign="left">
        {info.exercises[2].exerciseName} @ {info.exercises[2].weight}kg
        </Typography>
        <Typography variant="body2" textAlign="left">
        {info.exercises[2].sets.join(` `)}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteCardModal workoutId={info._id}/>
      </CardActions>
    </Card>
  );
}
