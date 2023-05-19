import React from 'react';

const AddCube = () => {


    const handleAddProduct = (event) => {
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

        console.log(productName, photo, category, stock, price, rating, description, sellerName, sellerEmail);
    }



    const categories = [
        'Sports',
        'Police',
        'Regular',
    ]
    return (

        <form onSubmit={handleAddProduct} className='md:w-[90%] mx-auto'>
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
                    <select name="category" className='p-3 w-full text-light bg-base-200 outline-non' required>
                        {
                            categories.map(cat => <option name={cat}>{cat}</option>)
                        }
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
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="text" name="sellerName" placeholder="Seller Name" required />
                </div>
                <div className="w-full">
                    <label className="font-semibold text-light mb-2 block">Seller Email</label>
                    <input className=" p-3 w-full text-light bg-base-200 outline-none focus:outline-sec" type="email" name="sellerEmail" placeholder="Seller Email" required />
                </div>
            </div>
            {/* submit button */}
            <input className="mt-10 font-rancho text-3xl p-2 bg-pri hover:bg-sec/10 transition text-sec border-sec border-2 w-full rounded cursor-pointer" type="submit"  value="Add This Toy"/>
        </form>
    );
};

export default AddCube;