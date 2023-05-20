import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {

    const { _id, image, productName, price, rating } = product;
   
    return (
        <div className="rounded-none card md:card-side bg-base-100 shadow-xl">
            <figure><img className='md:h-[250px] w-full md:w-[220px]' src={image} alt="product image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p><strong>Price: </strong>${price}</p>
                <div className="card-actions flex justify-between">
                    <div className='flex items-center gap-2'>
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                        fullSymbol={<FaStar className='text-yellow-500'></FaStar>}
                    />
                    <span>({rating})</span>
                    </div>
                    <Link to={`/details/${_id}`}><button className="px-3 py-1 border-2 border-sec text-light hover:text-sec transition">View details →</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;