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
            <div className='px-0 lg:px-5 max-w-full md:max-w-[1280px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;