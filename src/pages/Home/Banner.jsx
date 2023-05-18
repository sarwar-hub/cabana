/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import banner2 from '../../assets/banner2.png';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='max-h-[1080px]' style={{backgroundImage: `url(${banner2})`, backgroundSize: 'cover'}}>
            <div className='bg-dark/60'>
                <div className='max-w-[1280px] mx-auto flex items-center justify-center md:justify-start px-10 py-[200px]'>
                    <div className='max-w-[500px] space-y-5'>
                        <h1 className='text-5xl md:text-7xl text-white font-bold'>Let's Explore <br /> Yourself</h1>
                        <p>Its your store, there are many kinds of best quality cubes. You can buy magic cubes from here.</p>
                        <Link to='/' className="inline-block px-3 py-1 text-light hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;