import PokemonData from "../../helpers/Pokemons.json";

// Peppo Sad .(
// interface Pokemon {
//     dexNr: number;
//     name: string;
//     isNfe: boolean;
//     isUber: boolean;
//     isForm: boolean;
//     types: (string)[];
//     spriteSuffix?: string | undefined;
//   }

const containsObject = (obj: any, list: any) => {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

const createPokemonForAllType = (pokemonData: any, cardType: string) => {
    return (
        {
            "pokemon": pokemonData,
            "type": cardType
        }
    )
}
  
export const createQualified = (pokeData: any, validation: boolean[]) => {
    if (pokeData.isUber && !validation[0]) return false;
    if (pokeData.isNfe && !validation[1]) return false;
    if (pokeData.isForm && !validation[2]) return false;
    return true;
}

export const generateOneType = (userType: string, validation: boolean[]) => {
    let pokemons: any[] = [];

    // filter pokemons
    PokemonData.forEach((pokemon) => {
        pokemon.types.forEach(type => {
            if (type.toLowerCase() == userType.toLowerCase() && createQualified(pokemon, validation)) {
                pokemons.push(pokemon);
            }
        })
    })

    // picks a random pokemon from the filtered list
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

    return randomPokemon;
}

export const generateAllTypes = (validation: boolean[]) => {
    let randomPokemons: any[] = [];
    let types: string[] = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"]

    // filter pokemons
    for (let type of types) {
        let newPokemon = false;
        // generates Pokemon until a pokemon is found that is not already in the list
        while (!newPokemon) {
            let generatedPokemon = generateOneType(type, validation);

            if (!containsObject(generatedPokemon, randomPokemons)) {
                randomPokemons.push(createPokemonForAllType(generatedPokemon, type));
                newPokemon = true;
            }
        }
    }

    return randomPokemons;
}