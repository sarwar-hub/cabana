import React from 'react';
import Banner from './Banner';
import Gellery from './Gellery';
import Shop from './Shop';
import Newsletter from './Newsletter';

const HomePage = () => {
    return (
        <div>
            <Gellery></Gellery>
            <Shop></Shop>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;