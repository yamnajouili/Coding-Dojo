import React from 'react'
import axios from "axios";
import  { useState } from "react";
import {Link,useNavigate } from "react-router-dom"

const Create = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);
// =========use navigate========
    const naviagte = useNavigate();
    // / submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const createdPlayer= {
      name,
      
    };
    axios
      .post("http://localhost:8000/api/players", createdPlayer)
      .then((res) => {
        naviagte("/players/list");
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
    setPosition("");
   
  };

  return (
    <div className='border mt-4 mb-4'>
       <form className='shadow-lg p-3 mb-5 bg-white rounded col-4 m-auto' onSubmit={submitHandler}>
        {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
  <div className="mb-3 mt-3">
    <label  className="form-label fw-bold">Name:</label>
    <p>{errorsname}</p>
    <input type="text" className="form-control w-75 m-auto" onChange={(e)=>{setName(e.target.value)}}  value={name}/>
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label fw-bold">Prefered Position:</label>
    <p>{errorsname}</p>
    <input type="text" className="form-control w-75 m-auto" onChange={(e)=>{setPosition(e.target.value)}}  value={position}/>
  </div>
  
  <div>
  <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>
    </div>
  )
}

export default Create