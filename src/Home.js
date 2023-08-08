import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link,Routes,Route,useNavigate} from 'react-router-dom';
import {useEffect,useState} from 'react';
import AxiosCall from './AxiosAPIServer/AxiosCall.js';
import ProductDetails from './ProductDetails.js';

const Home = () => {
  const[products,setProducts]=useState([]);
  const navigate= useNavigate();
  useEffect(()=>{
    AxiosCall.getProducts()
      .then(response=>{setProducts(response.data)}
      )
      .catch(error=>alert('Error While Fetching Products:'+ error.message))
  },[])
  let renderProducts=()=>{
    console.log(products);
    return products.map((product,idx)=>{
        return(
        <tr  key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
       <td><button onClick={()=>navigate(`/productdetails/${product.id}`)}>Details</button></td>
       <td><button onClick={()=>navigate(`/addproduct/${product.id}`)}>Edit</button></td>
       <td><button onClick={()=>navigate(`/productdelete/${product.id}`)}>Delete</button></td>
 </tr>

        )
    });
  }
  return (
    <div>
   
      <div className="container">
      <Link to="/addproduct"> <button className="btn btn-primary" >Add a Product</button></Link>
      <table className="table table-sm">
          <thead><tr><th>ID</th><th>Product Name</th><th>Price</th><th>Description</th><th>Actions</th></tr></thead>
          <tbody>{renderProducts()}</tbody></table>
      </div>
      <div>
     </div>
          </div>
  );
};

export default Home;