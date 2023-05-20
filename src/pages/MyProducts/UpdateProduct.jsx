import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {

    const existingInfo = useLoaderData();
    const { _id, photo, productName, description, stock, category, rating, price } = existingInfo;
    const {user} = useContext(AuthContext);
    console.log(existingInfo);

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;

        const updatedInfo = {productName, photo, category, stock, price, rating, description, sellerName, sellerEmail};
        
        // fetch(`http://localhost:5000/updateProduct/${_id}`, {
        //      method: 'PUT',
        //      headers: { 'content-type': 'application/json'},
        //      body: JSON.stringify(updatedInfo)
        // })
        // .then(res=>res.json())
        // .then(data=>console.log(data))
        
    }



    
    return (

        <form onSubmit={handleUpdateProduct} className='md:w-[90%] mx-auto'>
            {/* form field row */}
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Toy name</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="text" name="name" placeholder="Toy name" value={productName} required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Toy Photo (URL)</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="url" name="photo" placeholder="URL" value={photo} required />
                </div>
            </div>
            {/* form field row */}
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Category</label>
                    <select name="category" className='p-3 w-full text-light bg-base-200 outline-non' value={category} required>
                        <option value="others" disabled>Select Category</option>
                        <option value='science'>Science</option>
                        <option value='math'>Math</option>
                        <option value='engineering'>Engineering</option>
                        <option value='others'>Others</option>
                    
                    </select>
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Rating</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="rating" placeholder="Rating Ex: 4.5" value={rating} required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Available stock</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="stock" placeholder="Stock" value={stock} required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Price</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="number" name="price" placeholder="$ Price" value={price} required />
                </div>
            </div>
            {/* form field row */}
            <div className="mt-10">
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Description</label>
                     <textarea className='p-3 w-full text-light bg-base-200 outline-none focus:outline-sec' name="description" cols="30" rows="5" placeholder='About this toy...' value={description}></textarea>
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
    );
};

export default UpdateProduct;