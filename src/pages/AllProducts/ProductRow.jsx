import React from 'react';
import { Link } from 'react-router-dom';
const ProductRow = ({ product, sl }) => {

    const { _id, productName, sellerName, stock, category, price } = product;
   console.log(product);
    return (
        <tr>
            <th>{sl+1}</th>
            <td>{productName.slice(0,30)}...</td>
            <td>{category}</td>
            <td>{sellerName}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td><Link to={`/details/${_id}`}><button className='border-[1px] hover:bg-sec/10 transition border-sec hover:text-sec px-3 py-1'>Details</button></Link></td>
        </tr>
    );
};

export default ProductRow;