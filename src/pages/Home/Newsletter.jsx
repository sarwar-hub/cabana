import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const subscribe = async(event) => {
        event.preventDefault();
        event.target.reset();
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Thank You!',
            text: 'You\'ll get our newsletter.',
            showConfirmButton: false,
            timer: 1500
          })

    }
    return (
        <div className='mt-10 bg-sec/20 flex flex-col md:flex-row justify-between md:justify-center items-center px-5 py-10 md:p-10'>
            <div className='text-center md:text-left'>
                <h2 className='text-white text-5xl'>Subscribe to our Newsletter</h2>
                <p className='text-light md:w-[50%]'>We'll send your notification throw your email when we update our collection of toys. Thank you.</p>
            </div>
            <form onSubmit={subscribe} className='mt-8 md:mt-0'>
                <input className='p-3 border-white outline-none bg-sec/10 text-sec' type="email" placeholder='Your email' required/>
                 <button className='p-3 border-white hover:bg-sec/20 bg-sec/10 text-sec' type='submit'>SEND</button>            
            </form>
        </div>
    );
};

export default Newsletter;