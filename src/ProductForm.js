import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';    
import {useNavigate} from "react-router-dom"
import { useParams } from 'react-router-dom';
import AxiosCall from './AxiosAPIServer/AxiosCall.js';
const ProductForm = () => {
    const { id } = useParams();
    console.log(id)
    const { register, handleSubmit,setValue,reset, formState: { errors } } = useForm();
    const[product,setProduct]=useState({});
    const navigate = useNavigate();
    const onSubmit = (data) => {
        if (id) {
          AxiosCall.updateProduct(data,id)
            .then((response) => {
              console.log(response);
              alert("Item Got Updated!");
              navigate("/home");
            })
            .catch((err) => {
              alert(err.message);
            });
          reset({ name: "", price: "", description: "" });
        } else {
          AxiosCall.addProduct(data)
            .then((response) => {
              console.log(response);
              alert("Item Got Saved!");
              navigate("/home");
            })
            .catch((err) => {
              alert(err.message);
            });
          reset({ name: "", price: "", description: "" });
        }
}
    useEffect(()=>{
        console.log(id)
        if(id){
            AxiosCall.findProduct(id)
        .then(response=>{
            const{name,price,description}=response.data;
            setValue('name',name);
            setValue('price',price);
            setValue('description',description);
        })
        
        }
    },[id,setValue])
  
  
    return (
        <div className="container card col-6 text-left">
            <h1>{id?'Update the Form':'Fill the Form'}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                    placeholder='Product Name'
                    name="name"
                    {...register("name",{ required: true })}
                    />
                    <span>
                    {errors.name?.type === 'required' && <p role="alert">Name  is required</p>}
                    </span>
                    </div>
                    <div>
                    <input 
                    placeholder='Price'
                    name="price"
                    {...register("price",{ required: true })}
                    />
                    <span>
                    {errors.price?.type === 'required' && <p role="alert">Price  is required</p>}
                    </span>
                    </div>
                

                <div>
                    <textarea 
                    placeholder='Product Description'
                    name="description"
                    {...register("description",{ required: true })}></textarea>
                    <span>
                    {errors.description?.type === 'required' && <p role="alert">Description is required</p>}
                    </span>
                    
                </div>
                <div>
                    <button>{id?'Update':'Save'}</button>
                </div>
            </form>
            
        </div>
    );
};

export default ProductForm;