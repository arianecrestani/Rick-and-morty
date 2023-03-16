import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CharacterDetail } from "./CharacterDetail";
import Searchbar from "./Searchbar";

export default function MainPage() {
  const [characterData, setCharacterData] = useState([]);
  const [openCart, setOpenCart] = useState({ open: false, character: {} });
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

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

  const filterSearch = (item) => {
    return item.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
  };

  return (
    <>
      <Searchbar onChange={onSearchChange} />

      <CharacterDetail
        open={openCart.open}
        onClose={handleClose}
        character={openCart.character}
      />
      <Box spacing={12}>
        <Grid container spacing={3} columns={3}>
          {characterData &&
            characterData.filter(filterSearch).map((item, index) => (
              <Grid key={index}>
                <img src={item.image} onClick={() => handleOpen(item)} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
