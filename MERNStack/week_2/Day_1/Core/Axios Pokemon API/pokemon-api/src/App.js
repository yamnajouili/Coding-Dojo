
import './App.css';
import {useState} from 'react'
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState([]);

  const axiosPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        setPokemon(response.data.results);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">

      <button className='btn' onClick ={axiosPokemon} >Fetch Pokemon</button>
  
        {pokemon && pokemon.map((onepokemon,id)=>{
          return <p key={id}>{onepokemon.name}</p>
        })}

  

    </div>
  );
}

export default App;
