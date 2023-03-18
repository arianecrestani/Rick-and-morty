import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { CharacterDetail } from "./CharacterDetail";
import Searchbar from "./Searchbar";
import { Container } from "@mui/system";
import Paginate from "./Paginate";
// import styled, { keyframes } from 'styled-components';

export default function Cards() {
  const [characterData, setCharacterData] = useState([]);
  const [openCart, setOpenCart] = useState({ open: false, character: {} });
  const [searchValue, setSearchValue] = useState("");
  const [pagination, setPagination] = useState(1);
  const [countPage, setCountPage] = useState(0);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOpen = (item) => {
    setOpenCart({ open: true, character: item });
  };
  const handleClose = () => {
    setOpenCart({ open: false, character: {} });
  };
  const getApiRickData = async (page) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    setCountPage(data.info.pages);
    setCharacterData(data.results);
    console.log(data.results);
  };
  const paginationStatus = (event, value) => {
    // console.log(value);
    setPagination(value);
    getApiRickData(value);
  };


  useEffect(() => {
    getApiRickData();
  }, []);

  const filterSearch = (page) => {
    return page.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
  };

  return (
    <>
      <Searchbar onChange={onSearchChange} />
      <CharacterDetail
        open={openCart.open}
        onClose={handleClose}
        character={openCart.character}
      />
      <Container spacing={2}>
        <Grid container sx={{  gap: "3rem", justifyContent: "center" }}>
          {characterData &&
            characterData.filter(filterSearch).map((item, index) => (
              <img
                key={index}
                style={{
                  animationDuration: '4s',
                  animationDirection: 'reverse',
                  border: "5px solid",
                  color: "#FFEBCD",
                }}
                src={item.image}
                onClick={() => handleOpen(item)}
              />
            ))}
        </Grid>
      </Container>
      <Paginate
        onChange={paginationStatus}
        page={pagination}
        count={countPage}
      />
    </>
  );
}
