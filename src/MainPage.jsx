import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function MainPage() {
  const [RickMortyDate, setRickMortyDate] = useState();
  const [openCart, setOpenCart] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => {
    setOpenCart(true);
  };
  const handleClose = () => {
    setOpenCart(false);
  };

  useEffect(() => {
    const getApiRickData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      const data = await response.json();
      setRickMortyDate(data.results);
      console.log(data.results);
    };
    getApiRickData();
  }, []);

  return (
    <>
      <Modal
        open={openCart}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Box sx={{ flexGrow: 2 }}>
        <Grid
          container
          spacing={{ sm: 2, sm: 5, md: 8 }}
          columns={{ sm: 8, md: 12 }}
        >
          {RickMortyDate &&
            RickMortyDate.map(({ image }, index) => (
              <Grid key={index}>
                <img src={image} onClick={() => handleOpen(true)} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
