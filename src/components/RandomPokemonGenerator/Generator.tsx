import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import PokemonData from "../../helpers/Pokemons.json";
import { PokemonCard } from "./PokemonCard";
import { PokeClass } from "./PokeClass";

interface GeneratorProps {}

interface abx {
  dexNr: number;
  name: string;
  isNfe: boolean;
  isUber: boolean;
  isForm: boolean;
  types: string[];
  spriteSuffix?: string | undefined;
}

function createImgUrl(pokeData: any) {
  const suffix =
    pokeData.spriteSuffix === undefined ? "" : pokeData.spriteSuffix;
  return "sprites/normal/" + pokeData.dexNr + suffix + ".png";
}

function createQualified(
  pokeData: any,
  ubers: boolean,
  nfe: boolean,
  forms: boolean
) {
  if (!ubers && pokeData.isUber) return false;
  if (!nfe && pokeData.isNfe) return false;
  if (!forms && pokeData.isForm) return false;
  return true;
}

// todo -> save date into an array
// todo -> create here a function to change if the pokemon active or not
// only load 100 Pokemons per page (Pagination)

export const Generator: React.FC<GeneratorProps> = ({}) => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [ubers, setUbers] = useState<boolean>(() => true);
  const [nfe, setNFE] = useState<boolean>(() => true);
  const [forms, setForms] = useState<boolean>(() => false);
  // cards
  const [cards, setCards] = useState<any>([]);
  const [startCards, setStartCards] = useState<number>(() => 1);
  const [endCards, setEndCards] = useState<number>(() => 151);
  const pokemonEndDexNr: number[] = [151, 251, 386, 493, 649, 721, 809, 898];
  const [pokemonDexIndex, setPokemonDexIndex] = useState<number>(() => 0);

  useEffect(() => {
    // generate all the cards from a start point to the end point
    const _cards: any[] = [];
    // based on DexNr
    let index = 0;
    while (true) {
      if (!PokemonData[index] || PokemonData[index].dexNr > endCards) break;

      if (PokemonData[index].dexNr >= startCards) {
        let imgString = createImgUrl(PokemonData[index]);
        let tempClass = new PokeClass(
          imgString,
          PokemonData[index].name,
          createQualified(PokemonData[index], ubers, nfe, forms)
        );

        _cards.push(tempClass);
      }

      index++;
    }
    setCards(_cards);
  }, [ubers, nfe, forms, endCards]);

  useEffect(() => {
    const changeDisplayOfCards = (index: number) => {
      if (index > 0 && index < pokemonEndDexNr.length) {
        setStartCards(pokemonEndDexNr[index - 1] + 1);
        setEndCards(pokemonEndDexNr[index]);
      } else if (index === 0) {
        setStartCards(1);
        setEndCards(pokemonEndDexNr[index]);
      }
    };

    changeDisplayOfCards(pokemonDexIndex);
  }, [pokemonDexIndex]);

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
            onChange={() => setUbers(!ubers)}
          />
          <label>Ubers</label>
          <input type="checkbox" checked={nfe} onChange={() => setNFE(!nfe)} />
          <label>NFEs</label>
          <input
            type="checkbox"
            checked={forms}
            onChange={() => setForms(!forms)}
          />
          <label>Forms</label>
        </div>

        <button onClick={() => setShowCards(() => !showCards)}>
          Show Cards
        </button>

        <div className={showCards ? "" : "hide"}>
          <div className="pokemon-card-navigation">
            <button
              className="pokemon-card-navigation-button"
              onClick={() =>
                pokemonDexIndex > 0
                  ? setPokemonDexIndex(pokemonDexIndex - 1)
                  : null
              }
            >
              prev
            </button>
            <h2 className="pokemon-card-navigation-header">
              Generation {pokemonDexIndex + 1}
            </h2>
            <button
              className="pokemon-card-navigation-button"
              onClick={() =>
                pokemonDexIndex < pokemonEndDexNr.length - 1
                  ? setPokemonDexIndex(pokemonDexIndex + 1)
                  : null
              }
            >
              next
            </button>
          </div>
          <div>
            {cards.map((card: PokeClass, idx: number) => {
              return (
                <div
                  key={idx}
                  className={
                    "pokemon-card " +
                    (card.qualified
                      ? "pokemon-card-isQualified"
                      : "pokemon-card-notQualified")
                  }
                >
                  <PokemonCard props={card} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
