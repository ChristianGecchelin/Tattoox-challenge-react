import React from "react";

export const getCharacter = async () => {
  debugger;
  let res;
  const fullData = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  return fullData;
};
