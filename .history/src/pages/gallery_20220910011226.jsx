import React, { useEffect, useState } from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getCharacter();
  }, []);

  return <div>gallery</div>;
};
