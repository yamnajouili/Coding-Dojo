import {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState(null);
    console.log(useParams());
    console.log(useParams())
    const {type, id} = useParams();
    
  console.log(People)
    // const nav = useNavigate();

  


    
          useEffect(() => {
            axios
              .get(`https://swapi.dev/api/${type}/${id}`)
              .then((response) => setPeople(response.data))
              .catch((error) => console.log(error));
          }, [type,id]);
          return(
    <div  className='ml-40 mt-9'>
     {people && 
     <>
     {type === "people" ?<>
     <h1 className='text-2xl font-bold'> {people.name}</h1>
     <p><span className='font-bold'>Height:</span> {people.height}</p>
     <p><span className='font-bold'>Mass:</span> {people.mass}</p>
     <p><span className='font-bold'>Hair Color:</span> {people.hair_color}</p>
     <p><span className='font-bold'>Skin Color:</span> {people.skin_color}</p>
     </> 
     :<> <p><span className='font-bold'>Climate:</span> {people.climate}</p>
     <p><span className='font-bold'>Terrain:</span> {people.terrain}</p>
     <p><span className='font-bold'>Surface water:</span> {people.surface_water}</p>
     <p><span className='font-bold'>Population:</span> {people.population}</p></>
     }
     </>
     }
    </div>
  )
}

export default People