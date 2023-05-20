import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const SecondaryLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10 max-w-[1280px] mx-auto p-2'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SecondaryLayout;