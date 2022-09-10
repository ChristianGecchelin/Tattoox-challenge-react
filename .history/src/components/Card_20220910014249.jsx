import React from "react";

export const Card = ({ character }) => {
  const { name, location, image } = character;

  return (
    <div className="container-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{location.name}</p>
    </div>
  );
};
