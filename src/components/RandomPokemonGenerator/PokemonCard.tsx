import React, { useState, useEffect } from "react";
import { PokeClass } from "./PokeClass";
import "./style.css";

interface PokemonCardProps {
  props: PokeClass;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ props }) => {
  const [backgroundColor, setBackgroundColor] = useState<boolean>(
    () => props.qualified
  );

  useEffect(() => {
    setBackgroundColor(props.qualified);
  }, [props.qualified]);

  return (
    <div
      className={
        "pokemon-card " +
        (backgroundColor
          ? "pokemon-card-isQualified"
          : "pokemon-card-notQualified")
      }
    >
      <img
        className="pokemon-card-img"
        src={props.imgUrl}
        alt={props.pokemoName}
      />
      <p className="pokemon-card-name">{props.pokemoName}</p>
    </div>
  );
};
