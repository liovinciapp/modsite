import React from 'react';

const ProductDescription = ({productCompany, productName})=> {
    return (<span><span className="product-company"><h6>{productCompany}</h6></span><span className="product-name"><h4>{productName}</h4></span></span>);
};

export default ProductDescription;