import React from "react";

export const getCharacter = async () => {
  const fullData = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  return fullData.json();
};
