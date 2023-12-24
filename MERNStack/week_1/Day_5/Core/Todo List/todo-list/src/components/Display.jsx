import React from 'react'



import Button from 'react-bootstrap/Button';
const Display = ({posts,chekposts,deletePosts}) => {
 
  return (
    <div className=''>
        {posts.map((onetask,index)=>{
           return (
             
            <div key={index} className='d-flex gap-4 align-items-center justify-content-center mt-5'>
              {onetask.read ? <s className='fw-bold'>{onetask.title}</s>: <span className='fw-bold'>{onetask.title}</span>  }
            
            <input className='form-check-input' type='checkbox' checked={onetask.read} onChange={(e)=>{chekposts(index)}}></input>
            
            <Button  onClick={() => deletePosts(index)} variant="dark">Delete</Button>
            </div>
           )
        })}
    </div>
  )
}

export default Display