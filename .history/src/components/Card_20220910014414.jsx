import React from "react";
import "./card.css";

export const Card = ({ character }) => {
  const { name, location, image } = character;

  return (
    <div className="container-card">
      <img className="container-card__img" src={image} alt={name} />
      <h2 className="container-card__name">{name}</h2>
      <p className="container-card__location">{location.name}</p>
    </div>
  );
};
