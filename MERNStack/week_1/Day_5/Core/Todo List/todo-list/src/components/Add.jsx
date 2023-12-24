import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Add = ({add}) => {
  const [task,setTask]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newtask={title:task,
    read:false};
    add(newtask);
    setTask("");
  }
  
  return (
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-5  mt-5 align-items-center'>
    <Form.Group className="" controlId="exampleForm.ControlInput1">
     
      <Form.Control type="Text" onChange={(e)=>setTask(e.target.value)} value={task}  />
    </Form.Group>
    <Button type='submit' variant="primary text-light wf-2">ADD</Button>
  </Form>
  )
}

export default Add