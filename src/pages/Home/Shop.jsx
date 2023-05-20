import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Shop = () => {
    
    // states
    const [tab, setTab] = useState('all');
    const [products, setProducts] = useState([]);



    
    useEffect(()=>{

        fetch(`http://localhost:5000/products/${tab}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    
    },[tab])
    
    
    return (
        <div className=''>
            <h1 className='text-5xl text-light mb-10'>Shop</h1>
            
            <div>
                <button className={`${tab=='all'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('all')}>All</button>
                <button className={`${tab=='4x4'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('4x4')}>4x4</button>
                <button className={`${tab=='3x3'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('3x3')}>3x3</button>
                <button className={`${tab=='2x2'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2`} onClick={()=>setTab('2x2')}>2x2</button>
            </div>
            <hr className='mb-5 border-sec'/>

            {/* products */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 border-2 border-gray-100 p-5'>
                {
                    products.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;