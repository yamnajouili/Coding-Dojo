
import './App.css';
import {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/") 
      .then((serverResponse) => serverResponse.json())
      .then((jsonResponse) => setPokemon(jsonResponse)) 
      .catch((error) => console.log("Something went wrong ❌❌❌❌", error)); 
      console.log(pokemon);
  };
  return (
    <div className="App">

      <button className='btn' onClick ={fetchPokemon} >Fetch Pokemon</button>
  
        {pokemon.results.map((onepokemon,id)=>{
          return <p key={id}>{onepokemon.name}</p>
        })}
   
      

    </div>
  );
}

export default App;
