import React from 'react'

const Displayuser = (props) => {
    const {firstName,lastName,email,password,confirm}=props;
    
  return (
    <div>
      <h1>Your Form Data</h1>
        <p> First Name :{firstName}</p>
        <p> Last Name :{lastName}</p>
        <p> Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirm Password:{confirm}</p>
    </div>
  )
}

export default Displayuser