import React, { useEffect, useState } from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const result = getCharacter();
    setData(result);
  }, []);
  console.log(data);
  return <div>gallery</div>;
};
