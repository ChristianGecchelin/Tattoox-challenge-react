import React from "react";

export const Card = ({ character }) => {
  const { name, location } = character;

  return (
    <div>
      <h2>{`${name} - ${location.name}`}</h2>
    </div>
  );
};
