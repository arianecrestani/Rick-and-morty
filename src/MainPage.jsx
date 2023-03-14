import React from "react";
import { useEffect, useState } from "react"



export default function MainPage() {
  const [RickMortyDate, setRickMortyDate] = useState();

  useEffect(() => {
    const getApiRickData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?=20"
      );
      const data = await response.json();
      setRickMortyDate(data.results);
      console.log(data.results);
    };
    getApiRickData();
  }, []);

  return (
    <div>

      <div>
        {RickMortyDate && RickMortyDate.map(({ name }) => <div>{name}</div>)}
      </div>
    </div>
  );
}
