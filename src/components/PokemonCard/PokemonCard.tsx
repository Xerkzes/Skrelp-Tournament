import React, { useState, useEffect } from "react";
import "./style.css";

interface PokemonCardProps {
  data: any;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [qualified, setQualification] = useState<boolean>(true);

  useEffect(() => {
    const loadPokemons = async () => {
      // set Sprite Url
      const suffix = data.spriteSuffix === undefined ? "" : data.spriteSuffix;
      setImgUrl("sprites/normal/" + data.dexNr + suffix + ".png");
      setPokemonName(data.name);
    };

    loadPokemons();
  }, []);

  const changeBackgroundColor = () => {
    setQualification((c) => !c);
  };

  return (
    <div
      onClick={() => changeBackgroundColor()}
      className={
        "pokemon-card " +
        (qualified ? "pokemon-card-isQualified" : "pokemon-card-notQualified")
      }
    >
      <img className="pokemon-card-img" src={imgUrl} alt="img" />
      <p className="pokemon-card-name">{pokemonName}</p>
    </div>
  );
};
