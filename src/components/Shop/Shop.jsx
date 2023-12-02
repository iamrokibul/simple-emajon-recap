import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

    return (
        <div className='flex flex-col-reverse md:grid md:grid-cols-5'>
            <div className='p-5 col-span-4 grid md:grid-cols-4 gap-5'>
                {
                    products.map(product => <Products
                        key={product.id}
                        products={product}
                    ></Products>)
                }
            </div>
            <div className='p-5 bg-orange-500 mt-5 md:mt-0'>
                <h2>Cart Will go here</h2>
            </div>
        </div>
    );
};

export default Shop;