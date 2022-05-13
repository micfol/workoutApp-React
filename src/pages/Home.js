import { UserContext } from "../context/user.context";
import { useContext } from "react";
import ProgressBar from "../components/home/ProgressBar";
import UpNextBox from "../components/home/UpNextBox";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";
import { useNavigate } from "react-router";
import { IsPrivate } from "../components/IsPrivate";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';

const homeCardStyle = {
    height: "35rem",
}

export const Home = () => {
  const navigate = useNavigate();
  const value = useContext(UserContext);

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
        <Typography variant="p1">Next Workout Exercises:</Typography>
        <UpNextBox />
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
