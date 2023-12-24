import {useState} from 'react'

const Person = (props) => {
  const {p,index}=props
  const [personObj, setPersonObj] = useState(p);
  const happyBirthday = () => {
    setPersonObj({ ...personObj, age: personObj.age + 1 })};
  return (
    <div key={index}>
        <h1 >{personObj.lastName},{personObj.firstName}</h1>
        <p>Age :{personObj.age}</p>
        <p>Hair color :{personObj.hairColor}</p>
        <button className='btn' onClick={happyBirthday}>Birthday Buttom for {personObj.firstName}</button>
                    
                    
    </div>
  )
}

export default Person