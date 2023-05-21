import React, { useContext, useEffect, useState } from 'react';
import ProductRow from './ProductRow';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';


const MyProducts = () => {
    useTitle('My Products');

    // states
    const [products, setProducts] = useState([]);
    const [fetchLoader, setFetchLoader] = useState(true);
    const [sortBy, setSortBy] = useState(null);
    console.log(sortBy);

    // data from context
    const { user } = useContext(AuthContext);


    // load data based on email
    const url = `https://cubebuzz-server-k2vlqeyne-sarwar-hub.vercel.app/myProducts?email=${user?.email}&sort=${sortBy}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFetchLoader(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [user, sortBy])



    // delete data
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d63031',
            cancelButtonColor: '#0dcaf0',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cubebuzz-server-k2vlqeyne-sarwar-hub.vercel.app/deleteProduct/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = products.filter(product => product._id !== id)
                            setProducts(remaining);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Successfully Deleted the Toy',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err.message);
                    })

            }
        })

    }

    // if loading
    if(fetchLoader){
        return <span className='flex justify-center'><span className='text-white text-xl bg-sec/20 py-2 px-5 absolute'>Loading...</span></span>;
         
    }


    return (
        
        <div>
            <h1 className='text-5xl rounded-none text-light mb-10'>My Toys</h1>
            

            {/* before table */}
            <div className='md:flex justify-between'>
                <div>
                    <p className='mb-2'>Total {products.length} Toys</p>
                </div>
                <div>
                    <span>Sort by Price</span>
                    <select onChange={(e) => setSortBy(e.target.value)} name="price" className='bg-sec/10 ml-2'>
                        <option value="1">Ascending</option>
                        <option value="-1">Descending</option>
                    </select>
                </div>
            </div>

            {/* table */}
            {products.length>0
            ?
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className='bg-dark'>
                        <tr className='rounded-none'>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow key={product._id} product={product} sl={index} handleDelete={handleDelete}></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            :
            <p className='text-center text-sec'>You havn't added any toy. Go to <Link className='text-white underline' to='/addProduct'>Add Toy</Link></p>
            }

        </div>
        
    );
};

export default MyProducts;