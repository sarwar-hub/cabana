/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';

// aos
import Aos from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    // aos init
    useEffect(()=>{
        Aos.init()
    },[])


    return (
        <div className='max-h-[1080px]' style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover'}}>
            <div className='bg-dark/90'>
                <div className='max-w-[1280px] mx-auto flex items-center justify-center md:justify-start px-10 py-[200px]'>
                    <div className='max-w-[500px] space-y-5'>
                        <h1 className='text-5xl md:text-7xl text-white font-bold' data-aos="fade-in">Let's Explore <br /> Yourself</h1>
                        <p data-aos="fade-in"  data-aos-delay="100">Its your store, there are many kinds of best quality toys. You can buy your favorite toy from here.</p>
                        <Link to='/' className="inline-block px-3 py-1 text-light hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer" data-aos="fade-in"  data-aos-delay="400" data-aos-duration="1500">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;