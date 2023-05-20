import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const SecondaryLayout = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            <span className='flex justify-center'>{navigation.state === 'loading' && <span className='text-white text-xl bg-sec/20 py-2 px-5 absolute'>Loading...</span>}</span>
            <div className='my-10 max-w-[1280px] mx-auto p-2'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SecondaryLayout;