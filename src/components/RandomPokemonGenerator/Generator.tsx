import React, { useEffect, useState } from "react";
import "./style.css";
import {
  generateOneType,
  createQualified,
  generateAllTypes,
} from "./GenerateRandomPokemon";
import PokemonData from "../../helpers/Pokemons.json";
import {
  oneTypePokemonExample,
  allTypePokemonExample,
} from "../../helpers/ExamplePokemon";
import { createImgUrl } from "../../helpers/Utility";
import { PokemonCard } from "./PokemonCard";
import { PokeClass } from "./PokeClass";
import { OneType } from "./TypeCard/OneType";
import { AllTypes } from "./TypeCard/AllTypes";

interface GeneratorProps {}

export const Generator: React.FC<GeneratorProps> = ({}) => {
  // All Types (true) or One Type (false)
  const [typeOption, setTypeOption] = useState<boolean>(true);
  // "All Types" Pokemons
  const [pokemonAllTypes, setPokemonAllTypes] = useState<any>(
    allTypePokemonExample
  );
  // choiceBox in "One Type"
  const [pokemonOneType, setPokemonOneType] = useState<string>(() => "Bug");
  // default Pokemon in "One Type"
  const [randomPokemonOneType, setRandomPokemonOneType] = useState<any>(
    oneTypePokemonExample
  );
  // card options
  const [showTypeCards, setShowTypeCards] = useState<boolean>(false);
  const [ubers, setUbers] = useState<boolean>(() => true);
  const [nfe, setNFE] = useState<boolean>(() => true);
  const [forms, setForms] = useState<boolean>(() => false);
  // cards start - end points
  const [cards, setCards] = useState<any>([]);
  const [startCards, setStartCards] = useState<number>(() => 1);
  const [endCards, setEndCards] = useState<number>(() => 151);
  const pokemonEndDexNr: number[] = [151, 251, 386, 493, 649, 721, 809, 898];
  const [pokemonDexIndex, setPokemonDexIndex] = useState<number>(() => 0);
  // show cards when fully loaded
  const [showPokeCards, setShowPokeCards] = useState<boolean>(() => true);

  useEffect(() => {
    // generate all the cards from a start to end point
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

  // update start and end poits of the cards when the user changes Generation
  useEffect(() => {
    const changeDisplayOfCards = (index: number) => {
      // show loader
      setShowPokeCards(false);
      // go one up
      if (index > 0 && index < pokemonEndDexNr.length) {
        setStartCards(pokemonEndDexNr[index - 1] + 1);
        setEndCards(pokemonEndDexNr[index]);
      }
      // go one down
      else if (index === 0) {
        setStartCards(1);
        setEndCards(pokemonEndDexNr[index]);
      }
    };

    setTimeout(changeDisplayOfCards, 1000, pokemonDexIndex);
    // show cards
    setShowPokeCards(true);
  }, [pokemonDexIndex]);

  return (
    <div>
      <h1 className="header">Here you can generate your Pokemons</h1>

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
            <AllTypes randomPokemons={pokemonAllTypes} />
          ) : (
            <OneType
              selectedTyp={pokemonOneType}
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
              ? () => setPokemonAllTypes(generateAllTypes([ubers, nfe, forms]))
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
          onClick={() => setShowTypeCards(() => !showTypeCards)}
        >
          Show Cards
        </button>

        <div
          className={"pokemon-cards-container " + (showTypeCards ? "" : "hide")}
        >
          <div className="pokemon-card-navigation">
            <button
              className={
                "pokemon-card-navigation-button pokemon-card-button" +
                (pokemonDexIndex === 0 ? " not-visible" : "")
              }
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
              className={
                "pokemon-card-navigation-button pokemon-card-button" +
                (pokemonDexIndex === pokemonEndDexNr.length - 1
                  ? " not-visible"
                  : "")
              }
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
            {showPokeCards ? (
              <div className="pokemon-cards-loader"></div>
            ) : (
              cards.map((card: PokeClass, idx: number) => {
                return <PokemonCard key={idx} props={card} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
