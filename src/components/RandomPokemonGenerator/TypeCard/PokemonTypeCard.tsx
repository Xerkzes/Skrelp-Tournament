import React, { useState, useEffect } from "react";
import typeColors from "../../../helpers/TypeColor";
import { craeteTypeName } from "../../../helpers/Utility";

interface PokemonTypeCardProps {
  pokemon: any;
}

export const PokemonTypeCard: React.FC<PokemonTypeCardProps> = ({
  pokemon,
}) => {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const suffix =
      pokemon.spriteSuffix === undefined ? "" : pokemon.spriteSuffix;
    setImgUrl("sprites/normal/" + pokemon.dexNr + suffix + ".png");
  }, [pokemon]);

  return (
    <div className="pokemon-generator-type-card">
      <img className="pokemon-generator-sprite" src={imgUrl} />
      <p className="pokemon-generator-pokeName">{pokemon.name}</p>
      <p className="pokemon-generator-type">
        {pokemon.types.length > 1 ? (
          <p>
            <span
              className="pokemon-generator-one-type-type"
              style={{
                backgroundColor: typeColors[pokemon.types[0].toLowerCase()],
              }}
            >
              {craeteTypeName(pokemon.types[0])}
            </span>{" "}
            <span
              className="pokemon-generator-one-type-type"
              style={{
                backgroundColor: typeColors[pokemon.types[1].toLowerCase()],
              }}
            >
              {craeteTypeName(pokemon.types[1])}
            </span>
          </p>
        ) : (
          <span
            className="pokemon-generator-one-type-type"
            style={{
              backgroundColor: typeColors[pokemon.types[0].toLowerCase()],
            }}
          >
            {craeteTypeName(pokemon.types[0])}
          </span>
        )}
      </p>
    </div>
  );
};
