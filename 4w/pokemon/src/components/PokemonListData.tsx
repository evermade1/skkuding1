import { log } from "console";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Pokemon {
    name: string;
    height: string;
    weight: string;
    types: Types[];
    abilities: string[];
    baseExperience: string;
    hp: string;
    attack: string;
    defense: string;
    specialAttack: string;
    specialDefense: string;
    speed: string;
    type: string;
}

interface Types {
    slot: string;
    type: {
        name: string;
        url: string;
    }
}

interface Props {
    index: number;
}

export const PokemonListData = ({ index }: Props) => {
    const [data, setData] = useState<Pokemon | null>(null);
    async function fetchData() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
        const data = await response.json();
        setData(data)
        console.log(JSON.stringify(data.types));
        
    }
    useEffect(() => {
        fetchData()
        // console.log(JSON.stringify(data.types[0].type.name));
    }, [])
    return (
        data && (
        <Link to={`/detail/${index + 1}`} className="detail">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                alt={data.name}
            />
            <div className="description">
                <h2>{data.name}</h2>
                <p>Height: {data.height}</p>
                <p>Weight: {data.weight}</p>
                <p>Types: {data.types[0].type.name}</p>
                {/* <p>Types: {data.types[0].type.name}</p> */}
            </div>
        </Link> )
    )
}

export default PokemonListData;