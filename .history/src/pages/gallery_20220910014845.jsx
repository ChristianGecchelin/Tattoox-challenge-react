import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";
import { Card } from "../components/Card";
import "./gallery.css";
export const Gallery = () => {
  const { data, characters } = useContext(Context);
  console.log(characters);
  return (
    <>
      <h1 className="container-list__title">Characters</h1>
      <div className="container-list">
        {characters &&
          characters.map((character) => {
            console.log(character);
            return <Card key={character.id} character={character} />;
          })}
      </div>
    </>
  );
};
