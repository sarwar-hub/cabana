import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');

    // register with email and password
    const handleLogin = async(event) => {
        event.preventDefault();
        setError('');

        const name = event.target.name.value; 
        const email = event.target.email.value; 
        const password = event.target.password.value;

        
    }

    return (
        <div>
            <h1 className='text-4xl text-center pb-5 border-sec md:text-5xl text-sec'>Register</h1>


            <div className="card rounded-none mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
                        {error &&
                            <div className='bg-red-500/20 text-red-500 p-3 rounded-md'>{error}</div>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="px-3 py-1 text-light hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer">Register</button>
                    </div>
                    <label className="label">
                        <p className='label-text-alt'>If already registered, go for <Link to='/login'><span className="text-white link link-hover">Login</span></Link></p>
                    </label>
                    
                </form>
                
            </div>
        </div>
    );
};

export default Register;