
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createp = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description,setDescription] = useState("")
    const naviagte = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const createProduct = {
          title,
          price,description,
        };
        axios
          .post("http://localhost:8000/api/products", createProduct)
          .then((res) => {
            naviagte("/");
          })
          .catch((err) => console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
        
      };
  return (
    <div className="d-flex justify-content-center">

        <form onSubmit={submitHandler} className=" col-5 d-flex flex-column">
            <div >
                <label className="form-label">title:</label>
                <input  className="form-control mt-2" onChange={(e) => {
              setTitle(e.target.value);
            }} value={title}/>
            </div>
            <div className="mt-5">
                <label>price:</label>
                <input  className="form-control mt-2" onChange={(e) => {
              setPrice(e.target.value);
            }} value={price}/> 
            </div>
            <div className="mt-5">
                <label>description:</label>
                <input className="form-control mt-2"  onChange={(e) => {
              setDescription(e.target.value);
            }} value={description}/>
            </div >
            <button className="btn btn-primary w-25 mt-5">Create</button>
        </form>
    </div>
  )
}

export default Createp