import React from "react";
import "./style.css";
import PokemonData from "../../helpers/Pokemons.json";
import { PokemonCard } from "../PokemonCard/PokemonCard";

interface GeneratorProps {}

// todo -> save date into an array
// todo -> create here a function to change if the pokemon active or not
// only load 100 Pokemons per page (Pagination)

export const Generator: React.FC<GeneratorProps> = ({}) => {
  const cards = PokemonData.map((data, idx) => {
    if (idx < 207) return <PokemonCard key={idx} data={data} />;
  });

  return (
    <div>
      <h1 className="header">Here you can generate your Pokemons</h1>
      <p className="header">in progress...</p>

      {cards}
    </div>
  );
};
