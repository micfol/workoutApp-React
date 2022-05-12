import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteCardModal from "./DeleteCardModal";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SquatsIcon from "../utilities/Icons/SquatsIcon";
import OverheadPressIcon from "../utilities/Icons/OverheadPressIcon";
import DeadliftIcon from "../utilities/Icons/DeadliftIcon";
import BenchPressIcon from "../utilities/Icons/BenchPress";
import BarbellRowIcon from "../utilities/Icons/BarbellRowIcon";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function WorkoutSessionCard(props) {
  const { info } = props;

  return (
    <Box mb={7}>
      <Paper elevation={5}>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Paper elevation={0}>
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
                  <SquatsIcon />
                </Grid>
                <Grid item xs={8}>
                  <Paper elevation={3} style={{ height: "100%" }}>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      style={{ height: "50%" }}
                    >
                      {info.exercises[0].exerciseName} @{" "}
                      {info.exercises[0].weight}kg
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      style={{ height: "50%" }}
                    >
                      {info.exercises[0].sets.join(` `)}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  {info.isWorkoutA ? <OverheadPressIcon /> : <BenchPressIcon />}
                </Grid>
                <Grid item xs={8}>
                  <Paper elevation={3} style={{ height: "100%" }}>
                    <Typography variant="body2" textAlign="center">
                      {info.exercises[1].exerciseName} @{" "}
                      {info.exercises[1].weight}kg
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      {info.exercises[1].sets.join(` `)}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  {info.isWorkoutA ? <BarbellRowIcon /> : <DeadliftIcon />}
                </Grid>
                <Grid item xs={8}>
                  <Paper elevation={3} style={{ height: "100%" }}>
                    <Typography variant="body2" textAlign="center">
                      {info.exercises[2].exerciseName} @{" "}
                      {info.exercises[2].weight}kg
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      {info.exercises[2].sets.join(` `)}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
          <CardActions>
            <DeleteCardModal workoutId={info._id} />
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
}
