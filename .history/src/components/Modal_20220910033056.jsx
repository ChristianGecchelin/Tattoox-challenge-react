import React from "react";
import "./modal.css";
import close from "../assets/cancel.png";
import mira from "../assets/mira.png";
export const Modal = ({ characterModal, setOpenModal, openModal }) => {
  const { name, image, location } = characterModal;
  return (
    <div className="modal-page">
      <div className="container-modal">
        <div>
          <img
            className="container-model__image"
            src={close}
            alt="close"
            onClick={() => setOpenModal(!openModal)}
          />
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <hr />
          <p className="container-card__location">
            <span>
              <img
                className="container-card__location__mira"
                src={mira}
                alt="mira"
              />
            </span>
            {location.name}
          </p>
        </div>
        <div>
          <p>Personajes que tambien estan en ${location.name}</p>
        </div>
      </div>
    </div>
  );
};
