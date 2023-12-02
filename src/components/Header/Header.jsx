import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-orange-500 h-20 w-full px-10'>
            <h2 className='text-3xl font-extrabold'>EmaJon</h2>
            <nav>
                <ul className='flex'>
                    <li><a className='text-lg font-semibold' href="/">Shop</a></li>
                    <li><a className='text-lg ml-5 font-semibold' href="/">Order</a></li>
                    <li><a className='text-lg ml-5 font-semibold' href="/">About</a></li>
                    <li><a className='text-lg ml-5 font-semibold' href="/">Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;