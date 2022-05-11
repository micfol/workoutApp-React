import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { deleteWorkout, getWorkout } from "../../api";
import { useParams, useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
    handleClose()
  };


  return (
    <div>
      <Button onClick={handleOpen}>Delete Entry</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Delete Workout Entry</h2>
          <p id="parent-modal-description">
            Are you sure you want to complete this action? This cannot be
            undone.
          </p>
          <Button onClick={(e) => handleDelete(workoutId)}>Delete My Entry</Button>
        </Box>
      </Modal>
    </div>
  );
}
