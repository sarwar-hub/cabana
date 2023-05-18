import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');


     // login with email and password
     const handleLogin = async(event) => {
        event.preventDefault();
        setError('');

        const email = event.target.email.value; 
        const password = event.target.password.value;

        console.log(email, password);
    }



    
    return (
        <div>
            <h1 className='text-4xl text-center pb-5 border-sec md:text-5xl text-sec'>Login</h1>
            

            <div className="card rounded-none mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
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
                        <label className="label">
                            <Link to='/reset'><span className="label-text-alt link link-hover">Forgot password?</span></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="px-3 py-1 text-sec hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer">Login</button>
                    </div>
                    <label className="label">
                        <p className='label-text-alt'>If new, please <Link to='/register'><span className="text-white link link-hover">Register</span></Link></p>
                    </label>
                    <div className="divider">OR</div>
                </form>
                <div className='card-body pt-0 flex'>
                    <button className="px-3 py-1 text-sec transition border-2 border-sec hover:border-light cursor-pointer">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;