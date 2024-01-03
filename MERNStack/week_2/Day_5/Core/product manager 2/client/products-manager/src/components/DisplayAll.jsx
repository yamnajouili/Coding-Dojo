import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const DisplayAll = () => {
const [products,setProducts]=useState([]);
useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((allProducts) => setProducts(allProducts.data))
      .catch((err) => console.log(err));
  }, []);

  const onDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        const filteredProduct = products.filter((oneproduct) => {
          return oneproduct._id !== id;
        });
        setProducts(filteredProduct);
      })
      .catch((err) => console.log(err));
  };

    
  return (
    <div className='d-flex justify-content-center flex-column '>

      
        {products.map((oneproduct)=>{
            return <div key={oneproduct._id}>
                      <Link className='text-decoration-none text-primary text-center' to={`/products/${oneproduct._id}`}><h4>{oneproduct.title}</h4></Link>
                      <div className='d-flex gap-3 justify-content-center'>
                      <button  className='btn btn-success'><Link className='text-decoration-none text-light fw-2' to={`/products/${oneproduct._id}/edit`}>Edit✏️</Link></button>
                      <button className='btn btn-danger' onClick={() => {
                onDeleteProduct(oneproduct._id);
              }}>Delete</button>
                      </div>

            </div>
            
            
        })}
    </div>
  )
}

export default DisplayAll