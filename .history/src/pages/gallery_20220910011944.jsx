import React, { useEffect, useState } from "react";
import { getCharacter } from "../api/api";
export const Gallery = () => {
  const [data, setData] = useState();
  useEffect(() => {
    debugger;
    const fetchCharacter = async () => {
      const response = await getCharacter();
      setData(response);
    };
    fetchCharacter().catch(console.error());
  }, []);
  console.log(data);
  return <div>gallery</div>;
};
