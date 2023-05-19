import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
const CubeCard = ({ cube }) => {

    const { _id, image, category, cubeName, price, rating } = cube;
    console.log(image);
    return (
        <div className="rounded-none card md:card-side bg-base-100 shadow-xl">
            <figure><img className='md:h-[250px] w-full md:w-[220px]' src={image} alt="cube image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cubeName}</h2>
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
                    <button className="px-3 py-1 border-2 border-sec text-light hover:text-sec transition">View details →</button>
                </div>
            </div>
        </div>
    );
};

export default CubeCard;