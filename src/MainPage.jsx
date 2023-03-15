import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function MainPage() {
  const [RickMortyDate, setRickMortyDate] = useState();

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
    <div>
    <Box sx={{ flexGrow: 2 }}>
      <Grid
        container
        spacing={{ sm: 2, sm: 5, md: 8 }}
        columns={{ sm: 8, md: 12 }}
      >
        {RickMortyDate &&
          RickMortyDate.map(({ name, image }, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <div>{name}</div>
              <img src={image} />
            </Grid>
          ))}
      </Grid>
    </Box>
    </div>
  );
}
