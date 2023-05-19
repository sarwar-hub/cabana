import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    // get data from context
    const {login, googleLogin, loader} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    
   

    // login with email and password
    const handleLogin = async(event) => {
        event.preventDefault();
        setError('');

        const email = event.target.email.value; 
        const password = event.target.password.value;

        try {
            await login(email, password);
            navigate(from, { replace: true });
            event.target.reset();
        } catch(err) {
            setError(err.message);
        }

    }


    // login with google
    const handleGoogleLogin = async(event) => {
        setError('');

        try {
            await googleLogin();
            navigate(from, { replace: true });
        } catch(error) {
            setError(error.message);
        }

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
                        {/* login button */}
                        <button type='submit' className={` px-3 py-1 text-sec hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer`}>{loader?'Please wait...':'Login'}</button>
                    </div>
                    <label className="label">
                        <p className='label-text-alt'>If new, please <Link to='/register'><span className="text-white link link-hover">Register</span></Link></p>
                    </label>
                    <div className="divider">OR</div>
                </form>
                <div className='card-body pt-0 flex'>
                    <button onClick={handleGoogleLogin} className="px-3 py-1 text-sec transition border-2 border-sec hover:border-light cursor-pointer">Login with Google</button>                </div>
            </div>
        </div>
    );
};

export default Login;