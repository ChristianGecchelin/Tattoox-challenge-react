import React from "react";
import { Context } from "../context/context";

export const Paginator = () => {
  const { data, characters } = useContext(Context);
  return (
    <div>
      <ul></ul>
    </div>
  );
};
