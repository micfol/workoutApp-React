import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { deleteWorkout } from "../../api";
import styled from "@emotion/styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderColor: "error.main",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const DeleteButton = styled(Button)(() => ({
  fontFamily: "Permanent Marker",
  fontSize: "1rem",
  outlined: true,
}));

export default function DeleteCardModal(props) {
  const { workoutId } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteWorkout(id);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteButton color="error">Delete Entry</DeleteButton>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, borderRadius: "16px" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: 28 }}
            textAlign="center"
            id="parent-modal-title"
          >
            Delete Workout Entry!!
          </Typography>
          <Box m={"2rem"}>
            <Typography variant="p1">
              Are you sure you want to complete this action? This cannot be
              undone.
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button onClick={(e) => handleDelete(workoutId)}>
              <DeleteButton color="error">- Delete My Entry -</DeleteButton>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
