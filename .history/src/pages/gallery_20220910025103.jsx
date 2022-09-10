import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";
import { Card } from "../components/Card";
import "./gallery.css";
import { Paginator } from "../components/Paginator";
export const Gallery = () => {
  const { characters } = useContext(Context);
  return (
    <>
      <h1 className="container-list__title">Characters</h1>
      <div className="container-list">
        {characters &&
          characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
      </div>
      <Modal />
      <Paginator />
    </>
  );
};
