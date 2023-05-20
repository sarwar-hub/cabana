import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

// Import Swiper styles
import 'swiper/swiper.min.css';

const Gellery = () => {

    const [products, setProducts] = useState([]);


    useEffect(()=>{

        fetch(`http://localhost:5000/products/all`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    
    },[])


    return (
        <div className=''>
            <h1 className='text-5xl text-light mb-10'>Toy Gellery</h1>

            <Swiper className='border-r-2 border-l-2 border-sec bg-sec/10'
                effect='coverflow'
                autoplay={{delay:1500}}
                loop={true}
                pagination={true}
                navigation={true}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            >
                
                {
                    products.map(product=><SwiperSlide key={product._id}><img src={product.photo} alt="slide image" /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Gellery;