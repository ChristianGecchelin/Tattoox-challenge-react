import React from "react";

export const getCharacter = () => {
  const fullData = fetch("https://rickandmortyapi.com/api/character?page=1")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data));
  console.log(fullData);
};
