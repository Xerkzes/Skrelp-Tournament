import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./000.png";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="nav-container">
      <Link to="/">
        <span className="material-icons nav-icon">account_circle</span>
      </Link>
      <Link to="/rooster">
        <span className="material-icons nav-icon">table_chart</span>{" "}
      </Link>
      <Link to="/matches">
        <span className="material-icons nav-icon">sports_esports</span>{" "}
      </Link>
      <Link to="/random_pokemon_generator">
        <img className="nav-icon" src={logo} alt="generate random Pokemons" />
      </Link>
    </div>
  );
};

{
  /* <div className="nav-container">
<a href="/">
  <span className="material-icons nav-icon">account_circle</span>
</a>
<a href="/count">
  <img
    className="nav-icon"
    src={logo}
    alt="generate random Pokemons"
  ></img>
</a>
</div> */
}
