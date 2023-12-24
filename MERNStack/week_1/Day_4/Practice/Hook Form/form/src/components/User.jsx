import React from 'react'
import { useState } from 'react';
import Displayuser from './Displayuser'; 

    const User = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
    

  
  
  return (
    <>
    <form className='container '>
      
      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div >
        <label>Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label>Email Address: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>
        <label>Confirm Password:</label>
         <input
          type="text"
          value={passwordC}
          onChange={(e) => setPasswordC(e.target.value)}
        />
        </div>
      
      <Displayuser firstName={firstName} lastName={lastName} email={email} password={password} confirm={passwordC} />
    </form>
    

    </>
  );
};

export default User