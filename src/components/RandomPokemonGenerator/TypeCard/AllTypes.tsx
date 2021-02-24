import React, { useEffect } from "react";
import { PokemonTypeCard } from "./PokemonTypeCard";
import typeColors from "../../../helpers/TypeColor";
import { craeteTypeName } from "../../../helpers/Utility";

interface AllTypesProps {
  randomPokemons: any;
}

export const AllTypes: React.FC<AllTypesProps> = ({ randomPokemons }) => {
  return (
    <div className="all-type-container">
      {randomPokemons.map((el: any, idx: number) => {
        return (
          <div key={idx} className="all-type-card all-type-container-bug">
            <PokemonTypeCard pokemon={el.pokemon} />
            <div
              className="all-type-type"
              style={{
                backgroundColor: typeColors[`${el.type}`],
              }}
            >
              {craeteTypeName(el.type)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
