import React from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  let data = getCharacter();
  console.log(data);
  return <div>gallery</div>;
};
