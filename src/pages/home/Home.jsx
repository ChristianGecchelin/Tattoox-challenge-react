import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export const Home = () => {
  return (
    <div className="container-home">
      <h1 className="container-home__title">Bienvenidos a Tattoox challenge</h1>
      <Link to={`/character-page/1`}>
        <p className="container-home__link">Ir al proyecto</p>
      </Link>
    </div>
  );
};
