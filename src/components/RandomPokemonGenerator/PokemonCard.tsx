import React, { useState, useEffect, useRef } from "react";
import { PokeClass } from "./PokeClass";
import "./style.css";

interface PokemonCardProps {
  props: PokeClass;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ props }) => {
  return (
    <div>
      <img className="pokemon-card-img" src={props.imgUrl} alt="img" />
      <p className="pokemon-card-name">{props.pokemoName}</p>
    </div>
  );
};
