import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Update = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

      // grab the author id from the url
  const { id } = useParams();
//   ======================
const navigate=useNavigate();

const redirect=()=>{
    navigate("/authors")
}

  // grab the selected movie from db
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setName(res.data.name);
      
      })
      .catch((err) => console.log(err));
  }, [id]);
    // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const createdAuthor= {
      name,
      
    };
    axios
      .patch(`http://localhost:8000/api/authors/${id}`, createdAuthor)
      .then((res) => {
        navigate("/authors");
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    });
    setName("");
   
  };
  return (
    <div>
    <Link to={"/authors"}>Home🏠</Link>
    <h4 className='text-warning'>Edit this author</h4>
    <form className='shadow-lg p-3 mb-5 bg-white rounded col-4 m-auto' onSubmit={submitHandler}>
    {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
<div className="mb-3 mt-3">
<label  className="form-label fw-bold">Name:</label>
<input type="text" className="form-control w-75 m-auto" onChange={(e)=>{setName(e.target.value)}} value={name} />
</div>

<div>
<button type="submit" class="btn btn-primary">Edit</button>
<button  class="btn btn-danger ms-2" onClick={()=>redirect()}>Cancel</button></div>
</form>
</div>
  )
}

export default Update