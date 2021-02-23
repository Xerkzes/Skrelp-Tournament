import React from "react";

interface PokemonTypeCardProps {}

export const PokemonTypeCard: React.FC<PokemonTypeCardProps> = ({}) => {
  return (
    <div className="pokemon-generator-type-card">
      <img className="pokemon-generator-sprite" src="sprites/normal/10.png" />
      <p className="pokemon-generator-pokeName">Caterpie</p>
      <p className="pokemon-generator-type">Bug</p>
    </div>
  );
};
