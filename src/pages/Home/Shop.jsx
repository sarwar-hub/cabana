import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Shop = () => {
    
    // states
    const [tab, setTab] = useState('all');
    const [products, setProducts] = useState([]);



    // load product by category
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
                <button className={`${tab=='science'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('science')}>Science</button>
                <button className={`${tab=='math'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('math')}>Math</button>
                <button className={`${tab=='engineering'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('engineering')}>Engineering</button>
                <button className={`${tab=='others'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2`} onClick={()=>setTab('others')}>Others</button>
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