import React from 'react';
import Banner from './Banner';
import Gellery from './Gellery';
import Shop from './Shop';
import Newsletter from './Newsletter';
import Services from './Services';

const HomePage = () => {
    return (
        <div>
            <Gellery></Gellery>
            <Shop></Shop>
            <Services></Services>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;