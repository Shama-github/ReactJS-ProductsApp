import React from 'react';
import {useEffect,useState} from 'react';
import AxiosCall from './AxiosAPIServer/AxiosCall.js';
import { useParams } from 'react-router-dom';
import ProductDetailsView from './ProductDetailsView.js';

const ProductDetails = () => {
    const[viewproduct,setViewProduct] = useState();
    const { id } = useParams();
    useEffect(()=>{
        AxiosCall.findProduct(id)
          .then(response=>{
            setViewProduct(response.data)
            console.log(viewproduct)
        }
          )
          .catch(error=>alert('Error While Fetching Product Deatils:'+ error.message))
      })
    
     return (
        <div className="container">
            <div><ProductDetailsView product={viewproduct}/></div>
       </div>
    );
};

export default ProductDetails;