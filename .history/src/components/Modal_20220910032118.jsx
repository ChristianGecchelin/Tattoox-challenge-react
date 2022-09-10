import React from "react";
import "./modal.css";
import close from "../assets/cancel.png";
export const Modal = ({ characterModal, setOpenModal }) => {
  return (
    <div className="modal-page">
      <div className="container-modal">
        <img className="container-model__image" src={close} alt="close" />
        <h2 className="container-modal__title">Hola mundo</h2>
      </div>
    </div>
  );
};
