import React from "react";
import { PokemonTypeCard } from "./PokemonTypeCard";

interface OneTypeProps {}

export const OneType: React.FC<OneTypeProps> = ({}) => {
  return (
    <div className="one-type-container">
      <PokemonTypeCard />
      <div>
        <label htmlFor="cars" className="one-type-label">
          Type:
        </label>
        <select name="cars" id="cars">
          <option value="volvo">Bug</option>
          <option value="saab">Dark</option>
          <option value="opel">Dragon</option>
          <option value="audi">Electic</option>
          <option value="audi">Fairy</option>
          <option value="audi">Fighting</option>
          <option value="audi">Fire</option>
          <option value="audi">Flying</option>
          <option value="audi">Ghost</option>
          <option value="audi">Grass</option>
          <option value="audi">Ground</option>
          <option value="audi">Ice</option>
          <option value="audi">Normal</option>
          <option value="audi">Poison</option>
          <option value="audi">Psychic</option>
          <option value="audi">Rock</option>
          <option value="audi">Steel</option>
          <option value="audi">Water</option>
        </select>
      </div>
    </div>
  );
};
