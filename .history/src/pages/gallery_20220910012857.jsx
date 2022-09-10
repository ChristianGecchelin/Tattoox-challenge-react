import React, { useEffect, useState, useContext } from "react";
import { getCharacter } from "../api/api";
import { Context } from "../context/context";
export const Gallery = () => {
  const { data } = useContext(Context);

  return <div>gallery</div>;
};
