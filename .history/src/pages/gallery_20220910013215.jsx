import React, { useEffect, useState, useContext } from "react";
import { getCharacter } from "../api/api";
import { Context } from "../context/context";
import { Card } from "../components/Card";
export const Gallery = () => {
  const { data, characters } = useContext(Context);

  return (
    <>
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </>
  );
};
