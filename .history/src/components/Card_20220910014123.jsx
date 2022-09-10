import React from "react";

export const Card = ({ character }) => {
  const { name, location } = character;

  return (
    <div>
      <h2>{name}</h2>
      <p>{location.name}</p>
    </div>
  );
};
