import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Banner from '../pages/Home/Banner';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='px-2 lg:px-5 max-w-full md:max-w-[1280px] mx-auto my-10 md:my-16'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;