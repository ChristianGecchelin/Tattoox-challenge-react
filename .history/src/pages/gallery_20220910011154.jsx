import React, { useEffect } from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  useEffect(() => {
    getCharacter();
  }, []);

  return <div>gallery</div>;
};
