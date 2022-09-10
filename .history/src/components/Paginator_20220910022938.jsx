import { useContext } from "react";
import { Context } from "../context/context";

export const Paginator = () => {
  const { pagesArray } = useContext(Context);
  console.log(pagesArray);
  return (
    <div>
      <ul></ul>
    </div>
  );
};
