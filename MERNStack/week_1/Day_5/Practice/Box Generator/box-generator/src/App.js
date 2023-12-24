
import './App.css';
import Display from '../src/components/Display'
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const boxlists=[
   
    <div className='h-32 w-32 bg-pink-500'></div>,
    <div className='h-32 w-32 bg-pink-500'></div>,
    <div className='h-32 w-32 bg-pink-500'></div>
  ];
  const [box, setBoxg]=useState(boxlists)
  const updatebox=(newbox)=>{
    setBoxg([...box,newbox]);


  };
  return (
    <div >
       <Form updatebox={updatebox}/>
      <Display box={box} />
     
    </div>
  );
}

export default App;