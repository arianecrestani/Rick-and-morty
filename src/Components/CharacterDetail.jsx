import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";

export const CharacterDetail = ({ open, onClose, character }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "5px solid #FFC0CB",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack>
          <Box sx={style}>
            <Typography
              sx={{ display: "flex", justifyContent: "center", padding:'10px' }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <div>{character.name}</div>
            </Typography>
            <Typography
              sx={{ display: "flex", justifyContent: "center", padding:'10px'  }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <img src={character.image} />
            </Typography>
            <Typography
              sx={{ display: "flex", justifyContent: "center", padding:'10px'  }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <div>{character.status}</div>
            </Typography>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};
