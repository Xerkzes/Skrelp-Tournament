import React, { useEffect, useState } from "react";
import typeColors from "../../helpers/TypeColor";
import AllPokemonData from "../../helpers/Pokemons.json";
import "./style.css";

interface PokemonProps {
  pokemon: {
    type: string;
    name: string;
  };
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [hp, setHP] = useState<number | undefined>(0);
  const [atk, setAtk] = useState<number | undefined>(0);
  const [def, setDef] = useState<number | undefined>(0);
  const [spA, setSpA] = useState<number | undefined>(0);
  const [spD, setSpD] = useState<number | undefined>(0);
  const [spe, setSpe] = useState<number | undefined>(0);

  useEffect(() => {
    async function loadPokemons() {
      // get Data from the specific Pokemon
      const pokemonData = AllPokemonData.filter((data) => {
        if (data.name === pokemon.name) {
          return data;
        }
      });
      // get data from API
      const fetchDataUrl =
        "https://pokeapi.co/api/v2/pokemon/" + pokemonData[0].dexNr;
      const response = await fetch(fetchDataUrl);
      const data = await response.json();

      // set Sprite Url
      const suffix =
        pokemonData[0].spriteSuffix === undefined
          ? ""
          : pokemonData[0].spriteSuffix;
      setImgUrl("sprites/normal/" + pokemonData[0].dexNr + suffix + ".png");

      try {
        setHP(data.stats[0].base_stat);
        setAtk(data.stats[1].base_stat);
        setDef(data.stats[2].base_stat);
        setSpA(data.stats[3].base_stat);
        setSpD(data.stats[4].base_stat);
        setSpe(data.stats[5].base_stat);
      } catch (err) {
        // console.log(data);
        // console.log(err);
      }
    }
    loadPokemons();
  }, []);

  return (
    <div className="pokemon-div">
      <div
        style={{ backgroundColor: typeColors[pokemon.type.toLowerCase()] }}
        className="pokemon-type"
      >
        {pokemon.type}
      </div>
      <img className="pokemon-img" src={imgUrl} alt="img" />
      <div className="pokemon-name">{pokemon.name}</div>
      <div className="pokemon-stats">
        {hp} / {atk} / {def} / {spA} / {spD} / {spe}
      </div>
    </div>
  );
};
