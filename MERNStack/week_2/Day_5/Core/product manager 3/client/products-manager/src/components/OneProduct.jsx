import axios from 'axios';
import  { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {
 

  const {id}=useParams();
  
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/products/${id}`)
    .then((Onepro) => setProduct(Onepro.data))
    .catch((err) => console.log(err));
}, [id])
  
  return ( <div className='card col-5 p-3 d-flex justify-content-center m-auto'>
    {product && <> <h1>{product.title}</h1>
    <p>{product.price}</p>
    <p>{product.description}</p></> 
    
    }</div>
  )
}

export default OneProduct