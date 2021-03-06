import { React, useState, useEffect, useContext } from "react";
import { workoutA, workoutB } from "./workouts";
import { UserContext } from "../../context/user.context.js";
import { exerciseEntry } from "../../api.js";
// import { getLocalWeight } from "../../api.js";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Loading from "../utilities/Loading";
import Icons from "../utilities/Icons";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";

export const GroupExercises = (props) => {

  const value = useContext(UserContext);  
  const navigate = useNavigate();
  const [workout, setWorkout] = useState(null);
  const [isWorkoutA, setIsWorkoutA] = useState(true)

  useEffect(() => {
    value.getWorkoutHistory()
    value.getWorkingWeight()
    // console.log('GroupExercise value.sessionData', value.sessionData)
      
    
        if (value.sessionData.length === 0) {
            setIsWorkoutA(true)
          } 
          else (value.sessionData[0].isWorkoutA === true)
          ? setIsWorkoutA(false)
          : setIsWorkoutA(true)
      
          const localWeight = {
              squat: 20,
              bench: 20,
              row: 30,
              military: 20,
              deadlift: 40

          }  
        //   getLocalWeight();
          const updatedWorkoutA = {
            squat: {...workoutA.squat, weight: localWeight.squat},
            bench: {...workoutA.bench, weight: localWeight.bench},
            row: {...workoutA.row, weight: localWeight.row}
          };
          console.log('updatedWorkoutA :>> ', updatedWorkoutA);
      
          const updatedWorkoutB = {
            squat: {...workoutB.squat, weight: localWeight.squat},
            military: {...workoutB.military, weight: localWeight.military},
            deadlift: {...workoutB.deadlift, weight: localWeight.deadlift}
          };
      
          isWorkoutA ? setWorkout(updatedWorkoutA) : setWorkout(updatedWorkoutB);

    

  }, [value.user, isWorkoutA, value.sessionData.length]);


  
  const handleClick = (e, exercise, i) => {
    e.preventDefault();
    const copy = { ...workout[exercise] };
    copy.sets[i] > 0 ? copy.sets[i]-- : (copy.sets[i] = 5);
    setWorkout({ ...workout, [exercise]: copy });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutExercises = Object.entries(workout);
    const response = await exerciseEntry({
      isWorkoutA,
      workoutExercises,
      user: value.user._id,
    });
    console.log("response", response);
    console.log("isWorkoutA :>> ", isWorkoutA);
    navigate("/");
  };

  const SetButton = styled(Button)(() => ({
    fontFamily: "Permanent Marker",
    fontSize: "1.3rem",
  }));

  return !value.user ? (
    <Loading />
  ) : (
    <Box sx={{}}>
      <Typography variant='e2'>{isWorkoutA ? 'Workout A' : 'Workout B'}</Typography>
      <Stack
        spacing={2}
        sx={{ py: 2 }}
        divider={<Divider />}
        justifyContent="space-evenly"
      >
        {Object.entries(workout).map((exercise) => {
          const { exerciseName, weight, sets } = exercise[1];
          return (
            <Stack key={exercise[0]} spacing={1}>
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                {Icons[exercise[0]]}
                <Typography variant="h1" sx={{ fontSize: "1.8rem" }}>
                  {exerciseName}
                </Typography>
                <Typography variant="h1" sx={{ fontSize: "1.4rem" }}>
                  {weight}kg
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-around">
                {sets.map((set, index, array) => {
                  const switchColor = (num) => {
                    if (num === 0) {
                      return { color: "error", variant: "text" };
                    } else if (num === 5) {
                      return { color: "primary", variant: "contained" };
                    } else {
                      return { color: "secondary", variant: "contained" };
                    }
                  };
                  return (
                    <SetButton
                      key={`${exercise[0]}-${index}`}
                      onClick={(e) => handleClick(e, exercise[0], index)}
                      {...switchColor(set)}
                    >
                      {set}
                    </SetButton>
                  );
                })}
              </Stack>
            </Stack>
          );
        })}

        <form onSubmit={handleSubmit}>
          <Button variant="contained" type="submit" sx={{ m: 2 }}>
            <Typography variant="h1" sx={{ fontSize: "1rem" }}>
              Finish Workout & Log
            </Typography>
          </Button>
        </form>
      </Stack>
    </Box>
  );
};
