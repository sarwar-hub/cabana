import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ProductRow = ({ product, sl }) => {

    const { _id, productName, sellerName, stockQuantity, category, price } = product;
   console.log(product);
    return (
        <tr>
            <th>{sl+1}</th>
            <td>{productName}</td>
            <td>{category}</td>
            <td>{sellerName}</td>
            <td>{stockQuantity}</td>
            <td>{price}</td>
            <td><Link to={`/details/${_id}`}><button className='border-[1px] hover:bg-sec/10 transition border-sec hover:text-sec px-3 py-1'>Details</button></Link></td>
        </tr>
    );
};

export default ProductRow;