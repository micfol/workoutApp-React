import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteCardModal from "./DeleteCardModal";
import Paper from "@mui/material/Paper";
import SquatsIcon from "../utilities/Icons/SquatsIcon";
import OverheadPressIcon from "../utilities/Icons/OverheadPressIcon";
import DeadliftIcon from "../utilities/Icons/DeadliftIcon";
import BenchPressIcon from "../utilities/Icons/BenchPress";
import BarbellRowIcon from "../utilities/Icons/BarbellRowIcon";
import { Grid } from "@mui/material";

const style = {
  border: "1px solid #000",
  borderColor: '#b35f4d',
};

export default function WorkoutSessionCard(props) {
  const { info } = props;
  return (
    <Box sx={{...style, borderRadius: '15' }} mb={4} >
      <Paper elevation={6}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  textAlign="center"
                >
                  {info.exercises[0].createdAt.slice(0, 10)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{ fontSize: 20 }}
                  variant="h1"
                  textAlign="center"
                >
                  Workout {info.isWorkoutA ? "A" : "B"}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <SquatsIcon className="dark-shadow" />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="e1"
                  textAlign="center"
                  style={{ height: "50%" }}
                >
                  {info.exercises[0].exerciseName} @ {info.exercises[0].weight}
                  kg
                </Typography>
                <Typography
                  display="block"
                  variant="e1"
                  textAlign="center"
                  style={{ height: "50%" }}
                >
                  {info.exercises[0].sets.join(` `)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {info.isWorkoutA ? <BenchPressIcon /> : <OverheadPressIcon />}
              </Grid>
              <Grid item xs={8}>
                <Typography variant="e1" textAlign="center">
                  {info.exercises[1].exerciseName} @ {info.exercises[1].weight}
                  kg
                </Typography>
                <Typography variant="e1" textAlign="center" display="block">
                  {info.exercises[1].sets.join(` `)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {info.isWorkoutA ? <BarbellRowIcon /> : <DeadliftIcon />}
              </Grid>
              <Grid item xs={8}>
                <Typography 
                  variant="e1" 
                  textAlign="center">
                    {info.exercises[2].exerciseName} @ {info.exercises[2].weight}kg
                </Typography>
                <Typography variant="e1" textAlign="center" display="block">
                  {info.exercises[2].sets.join(` `)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <DeleteCardModal workoutId={info._id} />
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
}
