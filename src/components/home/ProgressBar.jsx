import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { UserContext } from "../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { progress } from "../../api";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedProgressBar(props) {
 
  return (
    <Box m={'2rem'}>
      <Typography variant="b1">Progress to Program Goal:</Typography>
      <BorderLinearProgress variant="determinate" value={goalProgress} />
    </Box>
  );
}
