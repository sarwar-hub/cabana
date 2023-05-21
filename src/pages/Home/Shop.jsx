import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Shop = () => {
    
    // states
    const [tab, setTab] = useState('all');
    const [products, setProducts] = useState([]);



    // load product by category
    useEffect(()=>{

        fetch(`https://cubebuzz-server.vercel.app/products/${tab}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
        .catch(err=>{
            console.log(err.message);
        })
    
    },[tab])
    
  
    return (
        <div className='mt-16'>
            <h1 className='text-5xl text-light mb-10'>Shop</h1>
            
            <div>
                <button className={`${tab=='all'? 'bg-sec text-dark ' : 'text-light'} px-2 md:px-4 py-1 md:py-3 border-sec border-2 border-r-0 border-b-0`} onClick={()=>setTab('all')}>All</button>
                <button className={`${tab=='science'? 'bg-sec text-dark ' : 'text-light'} px-2 md:px-4 py-1 md:py-3 border-sec border-2 border-r-0 border-b-0`} onClick={()=>setTab('science')}>Science</button>
                <button className={`${tab=='math'? 'bg-sec text-dark ' : 'text-light'} px-2 md:px-4 py-1 md:py-3 border-sec border-2 border-r-0 border-b-0`} onClick={()=>setTab('math')}>Math</button>
                <button className={`${tab=='engineering'? 'bg-sec text-dark ' : 'text-light'} px-2 md:px-4 py-1 md:py-3 border-sec border-2 border-r-0 border-b-0`} onClick={()=>setTab('engineering')}>Engineering</button>
                <button className={`${tab=='others'? 'bg-sec text-dark ' : 'text-light'} px-2 md:px-4 py-1 md:py-3 border-sec border-2 border-b-0`} onClick={()=>setTab('others')}>Others</button>
            </div>
           

            {/* products */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 border-2 border-sec p-5'>
                {
                    products.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;