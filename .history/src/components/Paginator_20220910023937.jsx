import { useContext } from "react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import "./paginator.css";

export const Paginator = () => {
  const { pagesArray, setPage } = useContext(Context);
  console.log(pagesArray);
  const handlePage = () => {
    setPage(page);
  };
  return (
    <div>
      <ul className="ul-paginator">
        {pagesArray.map((page) => (
          <li>
            <Link to={`/character-page/${page}`} onClick={handlePage}>
              <p>{page}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
