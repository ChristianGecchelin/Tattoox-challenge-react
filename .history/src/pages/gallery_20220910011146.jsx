import React, { useEffect } from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  let data = getCharacter();
  useEffect(() => {
    getCharacter();
  }, []);

  return <div>gallery</div>;
};
