import React from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  getCharacter();
  return <div>gallery</div>;
};
