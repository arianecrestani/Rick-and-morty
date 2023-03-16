import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CharacterDetail } from "./CharacterDetail";

export default function MainPage() {
  const [characterData, setCharacterData] = useState([]);
  const [openCart, setOpenCart] = useState({ open: false, character: {} });

  const handleOpen = (item) => {
    setOpenCart({ open: true, character: item });
  };
  const handleClose = () => {
    setOpenCart({ open: false, character: {} });
  };

  useEffect(() => {
    const getApiRickData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      const data = await response.json();
      setCharacterData(data.results);
      console.log(data.results);
    };
    getApiRickData();
  }, []);

  return (
    <>
      <CharacterDetail
        open={openCart.open}
        onClose={handleClose}
        character={openCart.character}
      />
   
      <Box sx={{ flexGrow: 2 }}>

        <Grid
          container
          spacing={{ xs: 10, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {characterData &&
            characterData.map((item, index) => (
              <Grid key={index}>
                <img src={item.image} onClick={() => handleOpen(item)} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
