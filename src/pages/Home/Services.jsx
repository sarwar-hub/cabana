import React, { useEffect } from 'react';
import { FaCheck, FaRegClock } from "react-icons/fa";


import 'aos/dist/aos.css';
import Aos from 'aos';



const Services = () => {
    // aos init
    useEffect(()=>{
        Aos.init();
    },[])
    
    return (
        <div className='bg-sec/20 p-10 mt-16'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-light'>
                <div>
                    <h1 className='text-5xl'>Our <span className='text-white'>Services</span>, <br /> We provide our best service</h1>
                </div>
                <div className='flex justify-center text-center flex-col gap-y-5 bg-base-100 shadow-md hover:shadow-xl transition p-10' data-aos="fade-right">
                    <FaCheck className='text-sec w-[100px] mx-auto h-[100px]'></FaCheck>
                    <h3 className='text-3xl font-semibold'>Quality</h3>
                    <p>We provide best quality of our products. We are very concern to ensure best quality.</p>
                </div>
                <div className='flex justify-center text-center flex-col gap-y-5 bg-base-100 shadow-md hover:shadow-xl transition p-10' data-aos="fade-right" data-aos-delay="200">
                    <FaRegClock className='text-sec w-[100px] mx-auto h-[100px]'></FaRegClock>
                    <h3 className='text-3xl font-semibold'>In Time</h3>
                    <p>Time management is an important metter ti us. We are allways deliver you in time.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;