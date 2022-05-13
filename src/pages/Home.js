import { UserContext } from "../context/user.context";
import { useContext, useState, useEffect} from "react";
import ProgressBar from "../components/home/ProgressBar";
import UpNextBox from "../components/home/UpNextBox";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";
import { IsPrivate } from "../components/IsPrivate";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';

const homeCardStyle = {
    height: "35rem",
}

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
      <Card style={homeCardStyle} m={'auto'}>
        <Box m={"2rem"}>
          <Typography variant="p1" sx={{ fontSize: "1.5rem" }}>
            Welcome to StrongLiftr
          </Typography>
        </Box>
        <Box mb={"2rem"}>
          <Typography variant="p1" sx={{ fontSize: "2rem" }}>
            {value.user
              ? `${value.user.firstName} ${value.user.lastName}`
              : null}
          </Typography>
        </Box>
        <ProgressBar />
        <Box mb={'2rem'}>
            <Typography variant="p1">Up Next:  Workout {isWorkoutA ? 'A' : 'B'}</Typography>
        </Box>    
        <UpNextBox isWorkoutA={isWorkoutA} />
        <Box mt={'2rem'}>
            <Button
            variant="contained"
            startIcon={<BoltIcon />}
            href={"/workout-entry"}
            >
            <Typography variant="b1">Start Workout</Typography>
            </Button>
        </Box>
      </Card>  
      </>
    </IsPrivate>
  );
};
