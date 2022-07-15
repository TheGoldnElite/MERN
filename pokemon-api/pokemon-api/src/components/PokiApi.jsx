import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';

const PokiApi = (props) => {
    const [pokemon, setPokemon] = useState([]);
    

    
    const GetPokemon = () => {
        useEffect(() => {
            axios.get("https://pokeapi.co/api/v3/pokemon?limit=20%offset=0")
            
            .then(res => setPokemon(res.data.results))
            }, []);

    return (
        <div>
            <button onClick={GetPokemon}>Fetch Pokemon</button>
                {pokemon.map((pokemon, index) => {
                    <div key={index}>{pokemon.name}</div>})}
            
    
        </div>
    );
}

}
export default PokiApi;