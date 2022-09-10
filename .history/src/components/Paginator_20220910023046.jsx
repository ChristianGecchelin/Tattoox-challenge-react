import { useContext } from "react";
import { Context } from "../context/context";

export const Paginator = () => {
  const { pagesArray } = useContext(Context);
  console.log(pagesArray);
  return (
    <div>
      <ul>
        {pagesArray.map((page) => (
          <li>{page}</li>
        ))}
      </ul>
    </div>
  );
};
