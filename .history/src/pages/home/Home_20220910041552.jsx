import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a Tattoox challenge</h1>
      <Link to={`/character-page/${page}`} onClick={() => setPage(page)}>
        <p>{page}</p>
      </Link>
    </div>
  );
};
