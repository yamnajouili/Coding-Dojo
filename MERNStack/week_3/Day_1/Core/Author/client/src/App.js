
import './App.css';
import {Routes,Route } from "react-router-dom"
import Create from './components/Create';
import DisplayAll from './components/DisplayAll';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      
    <h1>Favorite authors</h1>
    <Routes>
      <Route path='/authors'element={<DisplayAll/>}/>
      <Route path='/authors/new'element={<Create/>}/>
      <Route path='/authors/:id/edit'element={<Update/>}/>
    </Routes>
    </div>
  );
}

export default App;
