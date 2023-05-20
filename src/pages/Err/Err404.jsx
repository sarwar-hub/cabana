import React from 'react';
import err404 from '../../assets/404.png';
import { Link } from 'react-router-dom';
const Err404 = () => {
    return (
        <div className='h-[100vh] w-[100vw]' style={{backgroundImage: `url(${err404})`, backgroundSize: 'cover'}}>
            <p className='pt-10 flex justify-center'>Back to <Link className='hover:underline ml-2 text-sec' to='/'> HOME</Link></p>
            
        </div>
    );
};

export default Err404;