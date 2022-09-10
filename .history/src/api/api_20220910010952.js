import React from "react";

export const getCharacter = async () => {
  let res;
  const fullData = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => (res = data));
  console.log(fullData);
};
