import React from 'react';
import Banner from './Banner';
import Gellery from './Gellery';
import Shop from './Shop';
import Newsletter from './Newsletter';
import Services from './Services';
import useTitle from '../../hooks/useTitle';

const HomePage = () => {
    useTitle('Home');
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