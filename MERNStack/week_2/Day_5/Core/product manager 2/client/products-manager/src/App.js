import DisplayAll from './components/DisplayAll';
import Createp from './components/Createp';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import './App.css';

import { Routes, Route ,Link} from "react-router-dom";
function App() {
  return (
    <div>
      <h1 className='text-warning text-center'>Product Manager</h1>
      <div className='d-flex justify-content-center gap-3 mb-5'>
      <button  className='btn btn-primary'><Link className='text-decoration-none text-light fw-2' to={`/`}>Home🏠</Link></button>
      <button  className='btn btn-primary'><Link className='text-decoration-none text-light fw-2' to={`/products`}>Create🖊️</Link></button></div>
      <Routes>
      <Route path="/" element={<DisplayAll />} />
        <Route path="/products" element={<Createp />} /> 
        <Route path="/products/:id"  element={<OneProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
