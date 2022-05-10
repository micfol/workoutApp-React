import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function WorkoutSessionCard(props) {
  const { info } = props;

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign="left">
           {info.exercises[0].createdAt.slice(0,10)}
        </Typography>
        <Typography variant="body1" textAlign="left">
          Workout B
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
        <Button size="small">Edit</Button> <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
