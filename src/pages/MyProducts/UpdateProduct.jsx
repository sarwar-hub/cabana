import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateProduct = () => {
    const exInfo = useLoaderData();
    const { _id, productName, description, stock, price } = exInfo;

    const handleAddProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const stock = form.stock.value;
        const price = form.price.value;
        const description = form.description.value;

        const newInfo = { stock, price, description };
        
        fetch(`http://localhost:5000/updateProduct/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(newInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully Updated the Toy',
                showConfirmButton: false,
                timer: 1500
            })
            }
        })
        .catch(err=>{
            console.log(err.message);
        })

    }




    return (
        <div className='md:w-[90%] mx-auto'>
            <Link to='/myProducts'><button className='p-3 text-sec underline hover:text-sec/80 transition'>← Back to my Product</button></Link>
            <h1 className='text-5xl rounded-none text-light mb-10'>Update {productName}</h1>

            <form onSubmit={handleAddProduct}>
                
                {/* form field row */}
                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    
                    
                    <div className="w-full">
                        <label className="font-semibold text-light mb-2 block">Available stock</label>
                        <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="stock" placeholder="Stock" defaultValue={stock} required />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-light mb-2 block">Price</label>
                        <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="price" placeholder="$ Price" defaultValue={price} required />
                    </div>
                </div>
                {/* form field row */}
                <div className="mt-10">
                    <div className="w-full">
                        <label className="font-semibold text-light mb-2 block">Description</label>
                        <textarea className='p-3 w-full text-light bg-base-200 outline-none focus:outline-sec' name="description" cols="30" rows="5" placeholder='About this toy...' defaultValue={description} required></textarea>
                    </div>
                </div>
                {/* submit button */}
                <input className="mt-10 font-rancho text-3xl p-2 bg-pri hover:bg-sec/10 transition text-sec border-sec border-2 w-full rounded cursor-pointer" type="submit"  value="Update"/>
            </form>
        </div>
    );
};

export default UpdateProduct;