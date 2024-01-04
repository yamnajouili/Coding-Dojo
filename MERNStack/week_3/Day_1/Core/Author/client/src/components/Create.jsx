import React from 'react'
import {Link,useNavigate } from "react-router-dom"
import axios from "axios";
import  { useState } from "react";
const Create = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [errorsname, setErrorsname] = useState();
      // use navigate
  const naviagte = useNavigate();
  const redirect=()=>{
    naviagte("/authors")
  }
//   ==============check length==============
const checkLength = (value) => {
    setName(value);
    if (value.length < 3) {
      setErrorsname("Name must be least 3 caractere❌❌❌❌");
    } else {
      setErrorsname("");
    }
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const createdAuthor= {
      name,
      
    };
    axios
      .post("http://localhost:8000/api/authors", createdAuthor)
      .then((res) => {
        naviagte("/authors");
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
        <h4 className='text-warning'>Add a new author</h4>
        <form className='shadow-lg p-3 mb-5 bg-white rounded col-4 m-auto' onSubmit={submitHandler}>
        {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
  <div className="mb-3 mt-3">
    <label  className="form-label fw-bold">Name:</label>
    <p>{errorsname}</p>
    <input type="text" className="form-control w-75 m-auto" onChange={(e)=>{checkLength(e.target.value)}}  value={name}/>
  </div>
  
  <div>
  <button type="submit" class="btn btn-primary">Create</button>
  <button  class="btn btn-danger ms-2" onClick={()=>redirect()}>Cancel</button></div>
</form>
    </div>
  )
}

export default Create