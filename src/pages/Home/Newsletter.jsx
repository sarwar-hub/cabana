import React from 'react';

const Newsletter = () => {
    return (
        <div className='mt-10 bg-sec/20 flex flex-col md:flex-row justify-between md:justify-center items-center p-10'>
            <div className=''>
                <h2 className='text-white text-5xl'>Subscribe to our Newsletter</h2>
                <p className='text-light md:w-[50%]'>We'll send your notification throw your email when we update our collection of toys. Thank you.</p>
            </div>
            <div>
                <input className='p-3 border-white outline-none bg-sec/10 text-sec' type="email" placeholder='Your email'/>
                 <button className='p-3 border-white hover:bg-sec/20 bg-sec/10 text-sec' onClick={''} type='submit'>SEND</button>            
            </div>
        </div>
    );
};

export default Newsletter;