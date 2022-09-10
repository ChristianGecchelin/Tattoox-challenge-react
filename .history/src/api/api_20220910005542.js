import React from "react";

export const getCharacter = () => {
  const data = fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((dog) => console.log(dog));
};
