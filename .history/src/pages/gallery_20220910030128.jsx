import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";
import { Card } from "../components/Card";
import "./gallery.css";
import { Paginator } from "../components/Paginator";
import { Modal } from "../components/Modal";
export const Gallery = () => {
  const { characters } = useContext(Context);
  const [characterModal, setCharacterModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  console.log(characterModal);
  const handleClick = (characterChosen) => {
    setCharacterModal(characterChosen);
  };
  return (
    <>
      <h1 className="container-list__title">Characters</h1>
      <div className="container-list">
        {characters &&
          characters.map((character) => {
            return (
              <Card
                key={character.id}
                character={character}
                onClick={() => handleClick(character)}
              />
            );
          })}
      </div>
      <Modal />
      <Paginator />
    </>
  );
};
