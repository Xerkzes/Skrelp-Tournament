import React, { useEffect, useState } from "react";
import typeColors from "../../helpers/TypeColor";
import "./style.css";

interface PokemonProps {
  pokemon: {
    type: string;
    name: string;
  };
}

function createPokemonUrl(pokemonName: string) {
  const name: string = pokemonName.toLowerCase();

  if (name.includes("alola")) {
    return name + "n";
  }
  if (name.includes("galar")) {
    return name + "ian";
  }
  if (name === "meloetta-aria") {
    return name.substring(0, 8);
  }

  if (name === "morpeko") {
    return name + "-full-belly";
  }
  if (name === "minior-red-meteor") {
    return "minior-meteor";
  }

  return name;
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
      const fetchUrl =
        "https://pokeapi.co/api/v2/pokemon/" + pokemon.name.toLowerCase();
      const response = await fetch(fetchUrl);
      const data = await response.json();

      const pokemonName = createPokemonUrl(pokemon.name);

      // setImgUrl(data.sprites.front_default);
      setImgUrl("https://img.pokemondb.net/artwork/" + pokemonName + ".jpg");

      try {
        setHP(data.stats[0].base_stat);
        setAtk(data.stats[1].base_stat);
        setDef(data.stats[2].base_stat);
        setSpA(data.stats[3].base_stat);
        setSpD(data.stats[4].base_stat);
        setSpe(data.stats[5].base_stat);
      } catch (err) {
        // console.log(data);
        console.log(err);
      }
    }
    loadPokemons();
  }, []);

  return (
    <div className="pokemon-div">
      <p
        style={{ backgroundColor: typeColors[pokemon.type.toLowerCase()] }}
        className="pokemon-type"
      >
        {pokemon.type}
      </p>
      <img className="pokemon-img" src={imgUrl} alt="img" />
      <p className="pokemon-name">{pokemon.name}</p>
      <p className="pokemon-stats">
        {hp} / {atk} / {def} / {spA} / {spD} / {spe}
      </p>
    </div>
  );
};
