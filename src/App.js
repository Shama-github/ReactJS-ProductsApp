import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes,Route,Link, Router} from 'react-router-dom';
import ProductForm from './ProductForm.js';
import Home from './Home.js';
import PageNotFound from './PageNotFound.js';
import ProductDetails from './ProductDetails.js';
import ProductDelete from './ProductDelete.js';

const App = () => {
  return (
    <div>
       <div className="container"> &nbsp;&nbsp;
      <span className="title">Welcome to Ecommerce App!</span> &nbsp;&nbsp;
      </div>
    <div>
      <Routes>
      <Route path="/addproduct" element={<ProductForm/>}/>
      <Route path="/addproduct/:id" element={<ProductForm/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
      <Route path="/productdelete/:id" element={<ProductDelete/>}/>
     </Routes>
</div>
</div>
  );
};

export default App;