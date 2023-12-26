
import './App.css';
import Form from './components/Form';
import People from './components/People';
import { Routes, Route  } from "react-router-dom";


function App() {
 

  
  
  return (
    <div className="  ">
      <Form />
      <Routes>
        
        <Route path='/:type/:id'element={<People />}/>
      </Routes>
     
    </div>
  );
}

export default App;
