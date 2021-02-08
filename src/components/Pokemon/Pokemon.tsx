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

  if (name.includes("-alola")) {
    return "-alola";
  }

  if (name.includes("-mega")) {
    if (name.includes("-x")) {
      return "-mega-x";
    }
    if (name.includes("-y")) {
      return "-mega-y";
    }
    return "-mega";
  }

  if (name.includes("-galar")) {
    return "-galar";
  }

  // it's one of the Rotom forms
  if (name.includes("rotom-")) {
    if (name.includes("fan")) {
      return "-fan";
    }
    if (name.includes("frost")) {
      return "-frost";
    }
    if (name.includes("heat")) {
      return "-heat";
    }
    if (name.includes("mow")) {
      return "-mow";
    }
    if (name.includes("wash")) {
      return "-wash";
    }
  }

  // it's one of the Oricorio forms
  if (name.includes("oricorio-")) {
    if (name.includes("pau")) {
      return "-pau";
    }
    if (name.includes("pom")) {
      return "--pom-pom";
    }
    if (name.includes("sensu")) {
      return "-sensu";
    }
  }

  // it's one of the Indeedee forms
  if (name.includes("indeedee-")) {
    if (name.includes("-female")) {
      return "-f";
    }
  }

  // it's one of the Zygarde forms
  if (name.includes("zygarde-")) {
    if (name.includes("-10")) {
      return "-10";
    }
    if (name.includes("-complete")) {
      return "-complete";
    }
  }

  if (name === "thundurus-therian") {
    return "-therian";
  }

  return "";
}

function createPokemonForFetchDexNr(pokemonName: string) {
  const name: string = pokemonName.toLowerCase();

  if (name.includes("-alola")) {
    return name.substring(0, name.length - 6);
  }

  if (name.includes("-mega")) {
    if (name.includes("-x") || name.includes("-y")) {
      return name.substring(0, name.length - 7);
    }
    return name.substring(0, name.length - 5);
  }

  if (name.includes("-galar")) {
    return name.substring(0, name.length - 6);
  }

  if (name.includes("wormadam")) {
    return "wormadam";
  }

  if (name.includes("toxtricity")) {
    return "toxtricity";
  }

  if (name.includes("rotom-")) {
    return "rotom";
  }

  if (name === "aegislash-shield" || name === "aegislash-blade") {
    return "aegislash";
  }

  if (name.includes("meloetta-")) {
    return "meloetta";
  }

  if (name.includes("oricorio-")) {
    return "oricorio";
  }

  if (name.includes("gourgeist-")) {
    return "gourgeist";
  }

  if (name.includes("indeedee-")) {
    return "indeedee";
  }

  if (name.includes("zygarde-")) {
    return "zygarde";
  }

  if (name.includes("minior-")) {
    return "minior";
  }

  if (name.includes("thundurus")) {
    return "thundurus";
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
      // get data from API
      const fetchDataUrl =
        "https://pokeapi.co/api/v2/pokemon/" + pokemon.name.toLowerCase();
      const fetchDexNrUrl =
        "https://pokeapi.co/api/v2/pokemon-species/" +
        createPokemonForFetchDexNr(pokemon.name);

      const response = await fetch(fetchDataUrl);
      const data = await response.json();
      const response2 = await fetch(fetchDexNrUrl);
      const dexNr = await response2.json();

      // add suffix if needed
      const suffix = createPokemonUrl(pokemon.name);
      // sets Sprite Url
      setImgUrl("sprites/normal/" + dexNr.id + suffix + ".png");
      // helpers/sprites/png/normal

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
