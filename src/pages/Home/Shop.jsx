import React, { useEffect, useState } from 'react';
import CubeCard from './cubeCard';

const Shop = () => {
    
    // states
    const [tab, setTab] = useState('all');
    const [cubes, setCubes] = useState([]);



    
    useEffect(()=>{

        fetch(`http://localhost:5000/cubes/${tab}`)
        .then(res=>res.json())
        .then(data=>setCubes(data))
    
    },[tab])
    

    const filterByCategory4 = () => {
        setTab('4x4');

    }
    const filterByCategory3 = () => {
        setTab('3x3');
    }
    const filterByCategory2 = () => {
        setTab('2x2');
    }

    return (
        <div className=''>
            <h1 className='text-5xl text-light mb-10'>Shop by Category</h1>
            
            <div>
                <button className={`${tab=='all'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={()=>setTab('all')}>All</button>
                <button className={`${tab=='4x4'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={filterByCategory4}>4x4</button>
                <button className={`${tab=='3x3'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2 border-r-0`} onClick={filterByCategory3}>3x3</button>
                <button className={`${tab=='2x2'? 'bg-sec text-dark ' : ''} px-4 py-3 border-sec border-2`} onClick={filterByCategory2}>2x2</button>
            </div>
            <hr className='mb-5 border-sec'/>

            {/* products */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 border-2 border-gray-100 p-5'>
                {
                    cubes.map(cube=> <CubeCard key={cube._id} cube={cube}></CubeCard>)
                }
            </div>
        </div>
    );
};

export default Shop;