import { useContext } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";
import "./paginator.css";

export const Paginator = () => {
  const { pagesArray, setPage } = useContext(Context);
  return (
    <div>
      <ul className="ul-paginator">
        {pagesArray.map((page) => (
          <li key={page}>
            <Link to={`/character-page/${page}`} onClick={() => setPage(page)}>
              <p>{page}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
