import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../context/context";
import { Card } from "../../components/card/Card";
import "./gallery.css";
import { Paginator } from "../../components/paginator/Paginator";
import { Modal } from "../../components/modal/Modal";
export const Gallery = () => {
  const { characters } = useContext(Context);
  const [characterModal, setCharacterModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [relatedCharacter, setRelatedCharacter] = useState(false);
  const getRelatedCharacter = (characterChosen) => {
    const result = characters
      .filter(
        (character) => character.location.name === characterChosen.location.name
      )
      .slice(0, 4);
    setRelatedCharacter(result);
  };

  const handleClick = (characterChosen) => {
    setCharacterModal(characterChosen);
    setOpenModal(!openModal);
    getRelatedCharacter(characterChosen);
  };
  return (
    <>
      <h1 className="container-list__title">Characters</h1>
      <div className="container-list">
        {characters &&
          characters.map((character) => {
            return (
              <a
                href="#"
                key={character.id}
                onClick={() => handleClick(character)}
              >
                <Card character={character} />;
              </a>
            );
          })}
      </div>
      {openModal && (
        <Modal
          characterModal={characterModal}
          setOpenModal={setOpenModal}
          openModal={openModal}
          relatedCharacter={relatedCharacter}
        />
      )}
      <Paginator />
    </>
  );
};
