import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

    const User = (props) => {

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");


  const UsertHandler = (e) => {
    e.preventDefault();
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPasswordC("");
  };

  const checkLength = (value) => {
    setFirstname(value);
    if (value.length < 3) {
      setError("first Name must be least 2 caractere❌❌❌❌");
    } else {
      setError("");
    }
  };
  const checkLength1 = (value) => {
    setLastname(value);
    if (value.length < 3) {
      setError1("last Name must be least 2 caractere❌❌❌❌");
    } else {
      setError1("");
    }
  };
  const checkLength2 = (value) => {
    setEmail(value);
    if (value.length < 7) {
      setError2("Email must be least 7 caractere❌❌❌❌");
    } else {
      setError2("");
    }
  };
  const checkLength3 = (value) => {
    setPassword(value);
    if (value.length < 8) {
      setError3("Password must be least 8 caractere❌❌❌❌");
    } else {
      setError3("");
    }
  };
  const checkLength4 = (value) => {
    setPasswordC(value);
    if (value !== password) {
      setError4("Password must match❌❌❌❌");
    } else {
      setError4("");
    }
  };
  
  
  return (
    <Form className='container mt-5 p-5 col-4 shadow p-3 mb-5 bg-body-tertiary rounded'onSubmit={UsertHandler}>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <p>{error}</p>
        
        
        <Form.Control type="text" onChange={(e) => checkLength(e.target.value)}
              value={firstName}
 />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <p>{error1}</p>
        <Form.Control type="text"  onChange={(e) => checkLength1(e.target.value)}
              value={lastName}/>
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <p>{error2}</p>
        <Form.Control type="email" onChange={(e) => checkLength2(e.target.value)}
              value={email} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <p>{error3}</p>
        <Form.Control type="password"onChange={(e) => checkLength3(e.target.value)}
              value={password} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <p>{error4}</p>
        <Form.Control type="password" onChange={(e) => checkLength4(e.target.value)}
              value={passwordC} />
      </Form.Group>
      
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default User