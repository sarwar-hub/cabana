import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const {user} = useContext(AuthContext);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const photo = form.photo.value;
        const category = selectedCategory;
        const stock = form.stock.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;

        const product = {productName, photo, category, stock, price, rating, description, sellerName, sellerEmail};
        console.log(product);
        
        fetch(`http://localhost:5000/addProduct`, {
             method: 'POST',
             headers: { 'content-type': 'application/json'},
             body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
            form.reset();
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully Added the Toy',
                showConfirmButton: false,
                timer: 1500
            }) 
            }

        })
        .catch(err =>{
            console.log(err.message);
        })
        
        
        
    }



    
    return (
        <div className='md:w-[90%] mx-auto'>
        <h1 className='text-5xl rounded-none text-light mb-10'>Add a Toy</h1>
         
        <form onSubmit={handleAddProduct}>
            {/* form field row */}
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Toy name</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="text" name="name" placeholder="Toy name" required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Toy Photo (URL)</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="url" name="photo" placeholder="URL" required />
                </div>
            </div>
            {/* form field row */}
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Category</label>
                    <select onChange={(e)=>setSelectedCategory(e.target.value)} name="category" className='p-3 w-full text-light bg-base-200 outline-non' required>
                        <option value='others' >Select Category</option>
                        <option value='science'>Science</option>
                        <option value='math'>Math</option>
                        <option value='engineering'>Engineering</option>
                        <option value='others'>Others</option>
                    
                    </select>
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Rating</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="rating" placeholder="Rating Ex: 4.5" required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Available stock</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="stock" placeholder="Stock" required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Price</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="price" placeholder="$ Price" required />
                </div>
            </div>
            {/* form field row */}
            <div className="mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Description</label>
                     <textarea className='p-3 w-full text-light bg-base-200 outline-none focus:outline-sec' name="description" cols="30" rows="5" placeholder='About this toy...'></textarea>
                </div>
            </div>

            {/* User info */}

            {/* form field row */}
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Seller Name</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="text" name="sellerName" value={user?.displayName} placeholder="Seller Name" required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Seller Email</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="email" name="sellerEmail" value={user?.email} placeholder="Seller Email" required />
                </div>
            </div>
            {/* submit button */}
            <input className="mt-10 font-rancho text-3xl p-2 bg-pri hover:bg-sec/10 transition text-sec border-sec border-2 w-full rounded cursor-pointer" type="submit"  value="Add This Toy"/>
        </form>
        </div>
    );
};

export default AddProduct;