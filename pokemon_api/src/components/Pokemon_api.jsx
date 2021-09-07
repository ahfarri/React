import React, {useState} from 'react';


const Pokemon_api = () => {
    
    const [allPokemon, setAllPokemon] = useState([])


    const changeHandler =()=> {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setAllPokemon(response.results);
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


export default Pokemon_api;