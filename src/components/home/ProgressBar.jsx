import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { progress } from "../../api";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function CustomizedProgressBar() {
  const value = useContext(UserContext);
  const [goalProgress, setGoalProgress] = useState(0);

  useEffect(() => {
    const user = value ? value.user : null;
    
    const getProgress = async () => {
      const response = await progress(user._id);
      setGoalProgress(response.data);
    };

    getProgress();
  }, [value]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <p>Your Progress to Program Goal:</p>
      <BorderLinearProgress variant="determinate" value={goalProgress} />
    </Box>
  );
}
