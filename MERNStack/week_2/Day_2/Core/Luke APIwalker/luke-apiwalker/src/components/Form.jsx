import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [peopleId, setPeopleId] = useState(1);
  const [type ,setType]=useState("people")
  // ===================use navigate=======
  const navigate = useNavigate();
  //  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", peopleId);
    navigate("/" + type+"/"+peopleId);
  };
  const handelselect=(e)=>{
    setType(e.target.value)

  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex items-center gap-4 mt-5 justify-center" >

          <label  className=" text-sm font-medium leading-6 text-gray-900">Search for:</label>

            <select onChange={handelselect} className=" w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:max-w-xs sm:text-sm sm:leading-6 font-bold" value={type}>
              <option >people</option>
              <option >planets</option>
            </select>

          <label  className="text-sm font-medium leading-6 text-gray-900">ID</label>

          <input input type="text"  className=" w-24 rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:max-w-xs sm:text-sm sm:leading-6 font-bold" onChange={(e)=>{setPeopleId(e.target.value)}}/>

          <button  className="rounded-md bg-pink-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">Search</button>

    </div></form>
  )
}

export default Form