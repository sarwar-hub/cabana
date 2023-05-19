import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const cube = useLoaderData();
    const { _id, image, category, cubeName, price, rating, sellerName, sellerEmail, stockQuantity } = cube;

    return (
        <>
            <h1 className='text-5xl text-light mb-10'>Details</h1>

            <div className="rounded-none card md:card-side bg-base-100 shadow-xl">
                <figure><img className='md:h-[400px] w-full md:w-[420px]' src={image} alt="cube image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cubeName}</h2>
                    <p><strong>Type: </strong>{category}</p>
                    <p><strong>Seller Name: </strong>{sellerName}</p>
                    <p><strong>Seller Email: </strong>{sellerEmail}</p>
                    <p><strong>Stock Available: </strong>{stockQuantity}</p>
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
                        <Link to={`/`}><button className="px-3 py-1 border-2 border-sec text-light hover:text-sec transition">← Back to Home</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Details;