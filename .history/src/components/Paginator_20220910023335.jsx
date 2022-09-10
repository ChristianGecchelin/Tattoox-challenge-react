import { useContext } from "react";
import { Context } from "../context/context";
import "./paginator.css";

export const Paginator = () => {
  const { pagesArray } = useContext(Context);
  console.log(pagesArray);
  return (
    <div>
      <ul className="ul-paginator">
        {pagesArray.map((page) => (
          <li>
            <a href="">{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
