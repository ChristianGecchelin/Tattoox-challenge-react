import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";
import { Card } from "../components/Card";
export const Gallery = () => {
  const { data, characters } = useContext(Context);
  console.log(characters);
  return (
    <>
      {characters &&
        characters.map((character) => {
          console.log(character);
          return <Card key={character.id} character={character} />;
        })}
    </>
  );
};
