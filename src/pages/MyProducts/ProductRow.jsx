import React from 'react';
import { Link } from 'react-router-dom';

const ProductRow = ({ product, sl, handleDelete }) => {

    const { _id, photo, productName, description, stock, category, rating, price } = product;


    return (
        
            <tr>
                <th>{sl + 1}</th>
                <td><img className='w-[40px] h-auto' src={photo} alt="product image" /></td>
                <td>{productName}</td>
                <td>{category}</td>
                <td>{rating}</td>
                <td>{description}</td>
                <td>{stock}</td>
                <td>{price}</td>
                <td>
                    <Link to={`/updateProduct/${_id}`}><button className='mr-2 border-[1px] hover:bg-sec/10 transition border-sec hover:text-sec px-3 py-1'>Update</button></Link>
                    <Link ><button onClick={() => handleDelete(_id)} className='border-[1px] hover:bg-red-600/10 transition border-red-600 hover:text-red-700 px-3 py-1'>Delete</button></Link>
                </td>
            </tr>
        
    );
};

export default ProductRow;