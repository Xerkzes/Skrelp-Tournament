import React, { useState, useEffect } from "react";

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
        {pokemon.types.length > 1
          ? `${pokemon.types[0]} / ${pokemon.types[1]}`
          : pokemon.types[0]}
      </p>
    </div>
  );
};
