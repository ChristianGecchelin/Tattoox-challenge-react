import React from "react";
import "./modal.css";
import close from "../assets/cancel.png";
import mira from "../assets/mira.png";
export const Modal = ({
  characterModal,
  setOpenModal,
  openModal,
  relatedCharacter,
}) => {
  const { name, image, location } = characterModal;
  return (
    <div className="modal-page">
      <div className="container-modal">
        <div className="container-model-info">
          <img
            className="container-model__image"
            src={close}
            alt="close"
            onClick={() => setOpenModal(!openModal)}
          />
          <img className="container-model-info__image" src={image} alt={name} />
          <h2 className="container-model-info__name">{name}</h2>
        </div>
        <div className="container-model-related-character">
          <p className="container-card__location-modal">
            <span>
              <img
                className="container-card__location__mira"
                src={mira}
                alt="mira"
              />
            </span>
            {location.name}
          </p>
          <p>Personajes que tambien estan en {location.name}</p>
          <div className="container-related-character-image">
            {relatedCharacter.map((element) => (
              <img
                className="container-related-character-image__image"
                src={element.image}
                alt={element.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
