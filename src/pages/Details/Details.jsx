import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Details = () => {
    useTitle('Product Details');
    const product = useLoaderData();
    const { _id, photo, category, productName, price, rating, sellerName, sellerEmail, stockQuantity, description } = product;

    return (
        <>
            <h1 className='text-5xl text-light mb-10'>Details</h1>

            <div className="rounded-none card md:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full' src={photo} alt="product image" /></figure>
                <div className="card-body">
                    <div className='flex flex-col md:flex-row justify-center md:justify-between'>
                        <div>
                            <h2 className="card-title">{productName}</h2>
                            <p><strong>Category: </strong>{category}</p>
                            <p><strong>Seller Name: </strong>{sellerName}</p>
                            <p><strong>Seller Email: </strong>{sellerEmail}</p>
                            <p><strong>Stock Available: </strong>{stockQuantity}</p>
                            <p><strong>Price: </strong>${price}</p>
                        </div>
                        <div>
                            <p><strong>Description: </strong>{description}</p>
                        </div>
                    </div>
                    <div className="mt-auto card-actions flex justify-between">
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