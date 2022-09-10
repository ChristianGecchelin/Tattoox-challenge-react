import React from "react";
import "./modal.css";
import close from "../assets/cancel.png";
export const Modal = ({ characterModal, setOpenModal, openModal }) => {
  return (
    <div className="modal-page">
      <div className="container-modal">
        <img
          className="container-model__image"
          src={close}
          alt="close"
          onClick={() => setOpenModal(!openModal)}
        />
        <img src={characterModal.image} alt={characterModal.name} />
      </div>
    </div>
  );
};
