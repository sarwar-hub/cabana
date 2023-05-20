import React, { useContext, useEffect, useState } from 'react';
import ProductRow from './ProductRow';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';


const MyProducts = () => {
    // states
    const [products, setProducts] = useState([]);
   
    // data from context
    const {user} = useContext(AuthContext);


    // 
    const url = `http://localhost:5000/myProducts?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])
    
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
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Successfully Deleted the Toy',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
              })
              .catch(err=>{
                console.log(err.message);
              })
        
        }
    })







      


   }
    

    return (
        <div>
            <h1 className='text-5xl rounded-none text-light mb-10'>My Toys</h1>


            {/* table */}
            
            <p className='mb-2'>Total {products.length} Toys</p>
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
           
        </div>
    );
};

export default MyProducts;