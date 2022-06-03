import { UserContext } from "../context/user.context";
import { useContext, useState, useEffect} from "react";
import ProgressBar from "../components/home/ProgressBar";
import UpNextBox from "../components/home/UpNextBox";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";
import { IsPrivate } from "../components/IsPrivate";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const Home = () => {
  const value = useContext(UserContext);

  const [isWorkoutA, setIsWorkoutA] = useState(true)

  useEffect(() => {
    value.getWorkoutHistory()
    console.log('Home value.sessionData', value.sessionData)
    
    if (value.sessionData.length === 0) {
      setIsWorkoutA(true)
    } 
    else (value.sessionData[0].isWorkoutA === true)
    ? setIsWorkoutA(false)
    : setIsWorkoutA(true)

  }, [value.user, isWorkoutA, value.sessionData.length]);

  return (
    <IsPrivate>
      <>
        <Box m={"1rem"}>
          <Typography variant="p2" sx={{ fontSize: "1.5rem" }}>
            Welcome to StrongLiftr
          </Typography>
        </Box>
        <Box mb={"1rem"}>
          <Typography variant="h1">
            {value.user
              ? `${value.user.firstName} ${value.user.lastName}`
              : null}
          </Typography>
        </Box>
        <ProgressBar />
        <Box mb={'1rem'}>
            <Typography variant="p2">Up Next:  Workout {isWorkoutA ? 'A' : 'B'}</Typography>
        </Box>    
        <UpNextBox isWorkoutA={isWorkoutA} />
        <Box mt={'1rem'}>
            <Button
            variant="contained"
            startIcon={<BoltIcon />}
            href={"/workout-entry"}
            >
            <Typography variant="b1">Start Workout</Typography>
            </Button>
        </Box>
      </>
    </IsPrivate>
  );
};
