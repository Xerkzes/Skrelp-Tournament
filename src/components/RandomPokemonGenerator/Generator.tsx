import React, { useState } from "react";
import "./style.css";
import PokemonData from "../../helpers/Pokemons.json";
import { PokemonCard } from "../PokemonCard/PokemonCard";

interface GeneratorProps {}

// todo -> save date into an array
// todo -> create here a function to change if the pokemon active or not
// only load 100 Pokemons per page (Pagination)

export const Generator: React.FC<GeneratorProps> = ({}) => {
  const [showCards, setShowCards] = useState(false);

  // based on DexNr
  const start = 1;
  const end = 151;
  let index = 0;
  const cards: any[] = [];

  while (true) {
    if (PokemonData[index].dexNr > end) break;

    if (PokemonData[index].dexNr >= start)
      cards.push(<PokemonCard key={index} data={PokemonData[index]} />);

    index++;
  }

  return (
    <div>
      <h1 className="header">Here you can generate your Pokemons</h1>
      <p className="header">(in porgress...)</p>

      <div className="generator-count-choice">
        <button>All Types</button>
        <button>One Type</button>
        <button>Random</button>
      </div>

      <div className="generator-generated-pokemons"></div>

      <div className="pokemon-generator-type-card">
        <img className="pokemon-generator-sprite" />
        <p className="pokemon-generator-pokeName"></p>
        <p className="pokemon-generator-type"></p>
      </div>

      <button>Generate</button>

      <div className="generator-selectors">
        <button>Generation</button>
        <button>My List</button>
      </div>

      <button onClick={() => setShowCards(() => !showCards)}>Show Cards</button>
      <div className={showCards ? "" : "hide-pokemon-cards"}>{cards}</div>
    </div>
  );
};
