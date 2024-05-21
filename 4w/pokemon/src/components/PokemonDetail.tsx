import './PokemonDetail.css'
import { useParams } from 'react-router-dom';
import { data } from '../Data'
import { useEffect, useState } from 'react';
import { log } from 'console';

interface PokemonAbility {
    pokemon_v2_ability: {
        name: string;
    };
}

interface PokemonType {
    pokemon_v2_type: {
        name: string;
    };
}

interface Pokemon {
    id: number;
    base_experience: number;
    height: number;
    name: string;
    pokemon_v2_pokemonabilities: PokemonAbility[];
    weight: number;
    pokemon_v2_pokemontypes: PokemonType[];
}

interface GetPokemonResponse {
    data: {
        pokemon_v2_pokemon: Pokemon[];
    };
}


export const PokemonDetail = () => {
    const index = Number(useParams().id);
    // const pokemon = data[index - 1]
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [pokemonDataList, setPokemonDataList] = useState<any[]>([]);
    useEffect(() => {
        async function fetchPokemonData() {
            const query = `
        {
            pokemon_v2_pokemon(offset: ${index - 1}, limit: 1) {
              id
              base_experience
              height
              name
              pokemon_v2_pokemonabilities(distinct_on: id, limit: 10) {
                pokemon_v2_ability {
                  name
                }
              }
              weight
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
              }
            }
          }
          
        `;

            const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
                method: 'POST',
                body: JSON.stringify({ query }),
            });
            const responseData: GetPokemonResponse = await response.json();
            const pokemonData = responseData.data.pokemon_v2_pokemon;
            console.log(JSON.stringify(pokemonData));
            if (pokemonData && pokemonData.length > 0) {
                setPokemon(pokemonData[0])
                if (pokemon) {
                    const pokemonDataArray = [
                        pokemon.height,
                        pokemon.weight,
                        pokemon.base_experience,
                        pokemon.pokemon_v2_pokemonabilities.map(ability => ability.pokemon_v2_ability.name),
                        pokemon.pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name)
                    ];
                    setPokemonDataList(pokemonDataArray);
                }
                
            } else {
                setPokemon(null)
            }

        }
        fetchPokemonData();
    }, []);


    return (
        pokemon && (
            <div className='subpage'>
                <img className='subdetail'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
                />
                <div className="subname">{pokemon.name}</div>
                <div>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Base Experience: {pokemon.base_experience}</p>
                    <p>Abilities: {pokemon.pokemon_v2_pokemonabilities.map(ability => ability.pokemon_v2_ability.name).join(', ')}</p>
                    <p>Types: {pokemon.pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name).join(', ')}</p>
                </div>
            
                {/* <table className='subtable'>
                <tbody>
                    {Object.entries(pokemon).map(([key, value]) => {
                        if (value instanceof Array) value = value.join(", ");
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
            </div>
        ))
}

export default PokemonDetail;