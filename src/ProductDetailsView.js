import React from 'react';

const ProductDetailsView = (props) => {
    
    let{product}= props;
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
        </tr>
    );
};

export default ProductDetailsView;