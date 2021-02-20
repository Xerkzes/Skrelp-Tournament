import React, { useEffect, useState } from "react";
import "./style.css";
import PokemonData from "../../helpers/Pokemons.json";
import { PokemonCard } from "../PokemonCard/PokemonCard";

interface GeneratorProps {}

// todo -> save date into an array
// todo -> create here a function to change if the pokemon active or not
// only load 100 Pokemons per page (Pagination)

export const Generator: React.FC<GeneratorProps> = ({}) => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [ubers, setUbers] = useState<boolean>(true);
  const [nfe, setNFE] = useState<boolean>(true);
  const [forms, setForms] = useState<boolean>(false);
  // cards
  const [cards, setCards] = useState<any>();
  const [startCards, setStartCards] = useState<number>(1);
  const [endCards, setEndCards] = useState<number>(151);

  useEffect(() => {
    const _cards: any[] = [];
    // based on DexNr
    let index = 0;
    while (true) {
      if (PokemonData[index].dexNr > endCards) break;

      if (PokemonData[index].dexNr >= startCards)
        _cards.push(<PokemonCard key={index} data={PokemonData[index]} />);

      index++;
    }

    setCards(_cards);
  }, []);

  const updateCard = () => {
    // get data from the card => cards[0].props.data
    console.log(cards[0]);
  };

  return (
    <div>
      <h1 className="header">Here you can generate your Pokemons</h1>
      <p className="header">(in porgress...)</p>

      <div className="generator-pokemon-generator">
        <div className="generator-count-choice">
          <button>All Types</button>
          <button>One Type</button>
        </div>

        <div className="generator-generated-pokemons"></div>

        <div className="pokemon-generator-type-card">
          <img className="pokemon-generator-sprite" />
          <p className="pokemon-generator-pokeName"></p>
          <p className="pokemon-generator-type"></p>
        </div>

        <button>Generate</button>

        <div className="generator-selectors">
          <button onClick={() => setShowOptions(() => !showOptions)}>
            Options
          </button>
        </div>

        <div className={"generator-options " + (showOptions ? "" : "hide")}>
          <input
            type="checkbox"
            checked={ubers}
            onClick={() => setUbers(() => !ubers)}
            onChange={() => updateCard()}
          />
          <label>Ubers</label>
          <input
            type="checkbox"
            checked={nfe}
            onClick={() => setNFE(() => !nfe)}
            onChange={() => updateCard()}
          />
          <label>NFEs</label>
          <input
            type="checkbox"
            checked={forms}
            onClick={() => setForms(() => !forms)}
            onChange={() => updateCard()}
          />
          <label>Forms</label>
        </div>

        <button onClick={() => setShowCards(() => !showCards)}>
          Show Cards
        </button>
        <div className={showCards ? "" : "hide"}>{cards}</div>
      </div>
    </div>
  );
};
