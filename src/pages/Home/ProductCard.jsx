import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ProductCard = ({ product }) => {

    const { _id, photo, productName, price, rating } = product;

     const clickedOnDetails = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'You have to Login first.',
            showConfirmButton: false,
            timer: 2000
          })
     }
   
    return (
        <div className="rounded-none card md:card-side bg-base-100 shadow-xl">
            <figure><img className='md:h-auto w-full object-cover' src={photo} alt="product image" /></figure>
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
                    <Link onClick={clickedOnDetails} to={`/details/${_id}`}><button className="px-3 py-1 border-2 border-sec text-light hover:text-sec transition">View details →</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;