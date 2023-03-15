import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { RickDetails } from "./RickDetails";

export default function MainPage() {
  const [rickMortyDate, setRickMortyDate] = useState();
  const [openCart, setOpenCart] = useState(false);

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
      <Box sx={{ flexGrow: 2 }}>
        <Grid
          container
          spacing={{ sm: 2, sm: 5, md: 8 }}
          columns={{ sm: 8, md: 12 }}
        >
          {rickMortyDate &&
            rickMortyDate.map(({ image }, index) => (
              <Grid key={index}>
                <img src={image} onClick={() => handleOpen(true)} />
                <RickDetails open={openCart} onClose={handleClose} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
