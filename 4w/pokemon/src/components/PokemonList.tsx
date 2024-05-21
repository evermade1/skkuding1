import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonListData } from "./PokemonListData"


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
  index: number;
}

const data = Array.from({ length: 50 }, (_, index) => index);

export const PokemonList = () => {
  return (
  <div className="table">
    <div className="grid-container" id="gridTable">{data.map((index, key) => (
        <PokemonListData key={key} index={index} />
      ))}
      
    </div>
  </div>
  )
}

export default PokemonList;