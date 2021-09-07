import React, {useState} from 'react';
import axios from 'axios';

const Pokemon_axios = () => {

    const [allPokemon, setAllPokemon] = useState([])


    const changeHandler =()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            console.log(response);
            setAllPokemon(response.data.results);
            console.log(allPokemon);
        }).catch(err=>{
            console.log(err);
        });
    }
    
    
    
    return (
        <div>
            <button style={{margin:"10px"}} onClick={changeHandler}>Fetch Pokemon</button>
            {
                allPokemon.map((poke, idx)=>{
                    return <div key = {idx}>
                    <div>
                        <li>{poke.name}</li>
                    </div>
                </div>
            })
            }
        </div>
    );
};



export default Pokemon_axios;