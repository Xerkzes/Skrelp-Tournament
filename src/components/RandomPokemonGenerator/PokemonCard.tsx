import React, { useState, useEffect } from "react";
import { PokeClass } from "./PokeClass";
import "./style.css";

interface PokemonCardProps {
  props: PokeClass;
  imageLoad: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  props,
  imageLoad,
}) => {
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
        onLoad={imageLoad}
      />
      <p className="pokemon-card-name">{props.pokemoName}</p>
    </div>
  );
};
