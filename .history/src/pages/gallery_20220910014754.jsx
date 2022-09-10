import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";
import { Card } from "../components/Card";
import "./gallery.css";
export const Gallery = () => {
  const { data, characters } = useContext(Context);
  console.log(characters);
  return (
    <div className="container-list">
      <h1>Characters</h1>
      {characters &&
        characters.map((character) => {
          console.log(character);
          return <Card key={character.id} character={character} />;
        })}
    </div>
  );
};
