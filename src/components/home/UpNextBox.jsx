import * as React from "react";
import Box from "@mui/material/Box";
import SquatsIcon from "../utilities/Icons/SquatsIcon";
import BarbellRowIcon from "../utilities/Icons/BarbellRowIcon";
import BenchPressIcon from "../utilities/Icons/BenchPress";
import OverheadPressIcon from "../utilities/Icons/OverheadPressIcon";
import DeadliftIcon from "../utilities/Icons/DeadliftIcon";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

export default function UpNextBox(props) {
  const { isWorkoutA } = props;

  return (
    <Box
      sx={{
        p: 3,
        mx: '6 rem',
        backgroundColor: "#D3D3D3",
      }}
    >
      {isWorkoutA ? (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          <Stack direction="column" alignItems="center" sx={{ width: "30%" }}>
            <SquatsIcon />
            <Typography variant="e1">Squats</Typography>
          </Stack>
          <Stack direction="column" alignItems="center" sx={{ width: "30%" }}>
            <BenchPressIcon />
            <Typography variant="e1">Bench Press</Typography>
          </Stack>
          <Stack direction="column" alignItems="center" sx={{ width: "30%" }}>
            <BarbellRowIcon />
            <Typography variant="e1">Barbell Rows</Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Stack direction="column" alignItems="center" sx={{ width: "25%" }}>
            <SquatsIcon />
            <Typography variant="e1">Squats</Typography>
          </Stack>
          <Stack direction="column" alignItems="center" sx={{ width: "38%" }}>
            <OverheadPressIcon />
            <Typography variant="e1">Overhead Press</Typography>
          </Stack>
          <Stack direction="column" alignItems="center" sx={{ width: "25%" }}>
            <DeadliftIcon />
            <Typography variant="e1">Deadlift</Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
