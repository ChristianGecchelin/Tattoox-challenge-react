import React from "react";

export const getCharacter = () => {
  const data = fetch("https://rickandmortyapi.com/api/character?page=1")
    .then((response) => {
      console.log(response);
    })
    .then((dog) => console.log(dog));
};
