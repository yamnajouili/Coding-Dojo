import React from 'react'
import Person from './Person';
const PersonCard = (props) => {
    const {person}=props

    return (
    <div>
      {person.map((p ,index)=>{
       return( <Person p={p} index={index} />)
      })} 
      </div>    
 )
   
    }
    
  
                          
       
  
  


export default PersonCard