import React from "react";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  height: string;
  weight: string;
  types: string[];
  abilities: string[];
  baseExperience: string;
  hp: string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  speed: string;
}


interface Props {
  pokemon: Pokemon;
  index: number;
  setSelectedPokemon: (pokemon: any) => void;
}
export const PokemonList = ({pokemon, index, setSelectedPokemon} : Props) => {

  return (
    <Link to={`/detail/${index + 1}`} className="detail">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`}
        alt={pokemon.name}
      />
    <div className="description">
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.join(", ")}</p>
    </div>
  </Link>
  )
}

export default PokemonList;