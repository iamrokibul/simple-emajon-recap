import React from 'react';

const Products = ({products}) => {
    const {img, name, price, quantity} = products;
    return (
        <div className='border border-orange-500 rounded-md p-2'>
            <img className='w-full' src={img} alt="" />
            <h3 className='my-3 text-xl font-semibold'>{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button className='text-lg font-medium bg-orange-500 rounded-md w-full p-2'>Add to Cart</button>
        </div>
    );
};

export default Products;