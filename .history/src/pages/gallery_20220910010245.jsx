import React from "react";
import { getCharacter } from "../api/api";
export const gallery = () => {
  getCharacter();
  return <div>gallery</div>;
};
