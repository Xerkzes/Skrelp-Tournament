import React, { useEffect, useState } from "react";
import "./style.css";
import { generateOneType, createQualified } from "./GenerateRandomPokemon";
import PokemonData from "../../helpers/Pokemons.json";
import { PokemonCard } from "./PokemonCard";
import { PokeClass } from "./PokeClass";
import { OneType } from "./TypeCard/OneType";

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

// todo -> save date into an array
// todo -> create here a function to change if the pokemon active or not
// only load 100 Pokemons per page (Pagination)

export const Generator: React.FC<GeneratorProps> = ({}) => {
  // types
  const [typeOption, setTypeOption] = useState<boolean>(true);
  const [pokemonOneType, setPokemonOneType] = useState<string>(() => "Bug");
  const [randomPokemonOneType, setRandomPokemonOneType] = useState<any>({
    dexNr: 10,
    name: "Caterpie",
    isNfe: true,
    isUber: false,
    isForm: false,
    types: ["bug"],
  });
  // card options
  const [showCards, setShowCards] = useState<boolean>(false);
  const [ubers, setUbers] = useState<boolean>(() => true);
  const [nfe, setNFE] = useState<boolean>(() => true);
  const [forms, setForms] = useState<boolean>(() => false);
  // cards start - end points
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
          createQualified(PokemonData[index], [ubers, nfe, forms])
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

      {/* type option button */}
      <div className="generator-pokemon-generator">
        <div className="generator-count-choice">
          <button
            className={
              "pokemon-card-button pokemon-card-types " +
              (typeOption ? "active-type-option" : "")
            }
            onClick={() => setTypeOption(true)}
          >
            All Types
          </button>
          <button
            className={
              "pokemon-card-button pokemon-card-types " +
              (!typeOption ? "active-type-option" : "")
            }
            onClick={() => setTypeOption(false)}
          >
            One Type
          </button>
        </div>

        {/* Random Pokemon */}
        <div className="generator-generated-pokemons">
          {typeOption ? (
            <div>All Types</div>
          ) : (
            <OneType
              setPokemonOneType={setPokemonOneType}
              randomPokemon={randomPokemonOneType}
            />
          )}
        </div>

        {/* starts generating pokemon  */}
        <button
          className="pokemon-card-button pokemon-button-generate"
          onClick={
            typeOption
              ? () => console.log("nothing")
              : () =>
                  setRandomPokemonOneType(
                    generateOneType(pokemonOneType, [ubers, nfe, forms])
                  )
          }
        >
          Generate
        </button>

        {/* options for what pokemon are validate */}
        <div className="generator-options switches">
          <li>
            <input
              type="checkbox"
              id="1"
              checked={ubers}
              onChange={() => setUbers(!ubers)}
            />
            <label htmlFor="1">
              <span className="checkbox-text">Ubers</span>
              <span></span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="2"
              checked={nfe}
              onChange={() => setNFE(!nfe)}
            />
            <label htmlFor="2">
              <span className="checkbox-text">NFE</span>
              <span></span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="3"
              checked={forms}
              onChange={() => setForms(!forms)}
            />
            <label htmlFor="3">
              <span className="checkbox-text">Forms</span>
              <span></span>
            </label>
          </li>
        </div>

        {/* pokemon cards */}
        <button
          className="pokemon-card-button"
          onClick={() => setShowCards(() => !showCards)}
        >
          Show Cards
        </button>

        <div className={"pokemon-cards-container " + (showCards ? "" : "hide")}>
          <div className="pokemon-card-navigation">
            <button
              className="pokemon-card-navigation-button pokemon-card-button"
              onClick={() =>
                pokemonDexIndex > 0
                  ? setPokemonDexIndex(pokemonDexIndex - 1)
                  : null
              }
            >
              {"<"}
              {"<"}
            </button>
            <h2 className="pokemon-card-navigation-header">
              Generation {pokemonDexIndex + 1}
            </h2>
            <button
              className="pokemon-card-navigation-button pokemon-card-button"
              onClick={() =>
                pokemonDexIndex < pokemonEndDexNr.length - 1
                  ? setPokemonDexIndex(pokemonDexIndex + 1)
                  : null
              }
            >
              {">"}
              {">"}
            </button>
          </div>
          <div>
            {cards.map((card: PokeClass, idx: number) => {
              return <PokemonCard key={idx} props={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
