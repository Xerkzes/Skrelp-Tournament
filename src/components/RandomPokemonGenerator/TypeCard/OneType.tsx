import React, { useEffect } from "react";
import { PokemonTypeCard } from "./PokemonTypeCard";

interface OneTypeProps {
  selectedTyp: string;
  setPokemonOneType: React.Dispatch<React.SetStateAction<string>>;
  randomPokemon: any;
}

export const OneType: React.FC<OneTypeProps> = ({
  selectedTyp,
  setPokemonOneType,
  randomPokemon,
}) => {
  return (
    <div className="one-type-container">
      <PokemonTypeCard pokemon={randomPokemon} />
      <div>
        <label htmlFor="types" className="one-type-label">
          Type:
        </label>
        <select
          value={selectedTyp}
          name="type"
          id="types"
          onChange={(htmlElement) => {
            setPokemonOneType(htmlElement.target.value);
          }}
        >
          <option value="Bug">Bug</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Electric">Electric</option>
          <option value="Fairy">Fairy</option>
          <option value="Fighting">Fighting</option>
          <option value="Fire">Fire</option>
          <option value="Flying">Flying</option>
          <option value="Ghost">Ghost</option>
          <option value="Grass">Grass</option>
          <option value="Ground">Ground</option>
          <option value="Ice">Ice</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Poison</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Steel">Steel</option>
          <option value="Water">Water</option>
        </select>
      </div>
    </div>
  );
};
