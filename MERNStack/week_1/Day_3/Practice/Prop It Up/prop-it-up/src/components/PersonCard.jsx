import React from 'react'

const PersonCard = (props) => {
    const {person}=props
  return (
    <div>
        <ul>
        
            
                {person.map((oneperson,index)=>{
                    return( <div key={index}>
                            <h1 >{oneperson.lastName},{oneperson.firstName}</h1>
                            <p>Age :{oneperson.age}</p>
                            <p>Hair color :{oneperson.hairColor}</p>
                    
                    
                            </div>
                    )
                          

                })}
            
        </ul>
    </div>
  )
}

export default PersonCard