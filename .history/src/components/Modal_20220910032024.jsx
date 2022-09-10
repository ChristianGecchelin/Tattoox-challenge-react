import React from "react";
import "./modal.css";
import close from "../assets/cancel.png";
export const Modal = ({ characterModal, setOpenModal }) => {
  return (
    <div className="modal-page">
      <div className="container-modal">
        <img src={close} alt="" />
        <h2 className="container-modal__title">Hola mundo</h2>
      </div>
    </div>
  );
};
