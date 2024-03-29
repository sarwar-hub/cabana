import React, { useEffect, useState } from 'react';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// aos
import 'aos/dist/aos.css';
import Aos from 'aos';

const Gellery = () => {
    // aos init
    useEffect(()=>{
        Aos.init()
    },[])

    const [products, setProducts] = useState([]);


    useEffect(()=>{

        fetch(`https://cubebuzz-server.vercel.app/products/all`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    
    },[products])


    return (
        <div className=''>
            <h1 className='text-5xl text-light mb-10'>Gellery</h1>


            <div className='border-r-2 border-l-2 border-sec bg-sec/10 p-10 mx-auto' data-aos="fade-in">
            <Swiper
                autoplay={{delay:1500}}
                loop={true}
                pagination={true}
                navigation={true}
                spaceBetween={50}
                slidesPerView={3}
                modules={[Autoplay, Pagination, Navigation, A11y ]}
            >
                
                
                {
                    products.map(product=><SwiperSlide key={product._id}><img className='max-h-[150px] w-[150px] md:max-h-[200px] md:max-w-[200px]' src={product.photo} alt="slide image" /></SwiperSlide>)
                }
                
            </Swiper>
            </div>



        </div>
    );
};

export default Gellery;