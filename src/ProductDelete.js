import React from 'react';
import ProductDetailsView from './ProductDetailsView';
import {useEffect,useState} from 'react';
import AxiosCall from './AxiosAPIServer/AxiosCall.js';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const ProductDelete = () => {
    const[delproduct,setDelProduct] = useState();
    const navigate= useNavigate();
    const { id } = useParams();
    useEffect(()=>{   
        AxiosCall.deleteProduct(id)
          .then(response=>{
            setDelProduct(response.data)
            alert("Product Deleted!")
          navigate("/home");
        })
        .catch((err) => {
          alert(err.message);
        })
    },[id]);

          return (
            <div><ProductDetailsView product={delproduct}/></div>
        );
};

export default ProductDelete;