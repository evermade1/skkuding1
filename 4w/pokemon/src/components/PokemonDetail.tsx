import './PokemonDetail.css'
import { useParams } from 'react-router-dom';
import { data } from '../Data'

export const PokemonDetail = () => {
    const index = Number(useParams().id);
    const pokemon = data[index - 1]
    return (
        <div className='subpage'>
            <img className='subdetail'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
            />
            <div className="subname">{pokemon.name}</div>
            <table className='subtable'>
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
            </table>
        </div>
    )
}

export default PokemonDetail;