import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link,useNavigate } from "react-router-dom"
import moment from 'moment';
const DisplayAll = () => {

    const [authors, setAuthors] = useState([]);
    const nav=useNavigate()
    const updateAuthor=(id)=>{

nav(`/authors/${id}/edit`)
    }

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/authors")
          .then((allAuthors) => setAuthors(allAuthors.data))
          .catch((err) => console.log(err));
      }, []);

        // delete =========================
  const onDeleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        const filteredAuthors = authors.filter((author) => {
          return author._id !== id;
        });
        setAuthors(filteredAuthors);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
         <Link to={"/authors/new"}>Add a new author 🧔</Link>
         <h5 className='text-info'>We have quotes by:</h5>

<table className="table table-hover w-50 m-auto">
  <thead>
    <tr>
      <th scope="col">Authors</th>
      <th scope="col">Actions Avallable</th>
      
    </tr>
  </thead>
  <tbody>
  {authors.map((one)=>{
        return (
            <tr className="table-active">
      
      <td>{one.name}</td>
      <td><button onClick={()=>updateAuthor(one._id)} type="button" className="btn btn-success ">Edit</button>
      <button type="button" className="btn btn-danger ms-3 " onClick={()=>{onDeleteAuthor(one._id)}}>Delete</button>
      <h3>{moment(one.createdAt).format("YYYY/MM/DD ")}</h3></td>
      
    </tr>
        )
      })}
    
  </tbody>
</table>
    </div>
  )
}

export default DisplayAll