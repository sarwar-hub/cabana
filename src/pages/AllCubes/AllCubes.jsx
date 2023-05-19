import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CubeRow from './CubeRow';

const AllCubes = () => {
    const loadedCubes = useLoaderData();

    const [cubes, setCubes] = useState(loadedCubes);
    const [searchText, setSearchText] = useState('');

    const search = async(event) => {
        event.preventDefault();
        try{
            const res = await fetch(`http://localhost:5000/searchBy/${searchText}`);
            const data = await res.json();
            setCubes(data);
        } catch(err) {
            console.log(err.message);
        }     
    }

    return (
        <div>
            <h1 className='text-5xl rounded-none text-light mb-10'>All cubes</h1>

            {/* search form */}
            <form onSubmit={search} className="form-control my-5">
                <div className="input-group">
                    <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search…" className="rounded-none border-2 border-sec bg-base-100 outline-none text-sec px-2 py-1" />
                    <button type='submit' className="rounded-none border-2 transition border-sec bg-base-100 text-sec px-2 py-1 hover:bg-sec/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </form>

            {/* table */}
            {cubes.length>0
            ?
            <>
            <p className='mb-2'>Found {cubes.length} result</p>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead className='bg-dark'>
                        <tr className='rounded-none'>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Seller</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cubes.map((cube, index) => <CubeRow key={cube._id} cube={cube} sl={index}></CubeRow>)
                        }
                    </tbody>
                </table>
            </div>
            </>
            :
            <p className='text-center text-sec'>Search result not found, try with different name.</p>
            }
        </div>
    );
};

export default AllCubes;