import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Register = () => {

    const {user, register, updateNamePhoto, login} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');

    // register with email and password
    const handleRegister = async(event) => {
        event.preventDefault();
        setError('');
        setPassError('');

        const name = event.target.name.value; 
        const photo = event.target.photo.value; 
        const email = event.target.email.value; 
        const password = event.target.password.value;

        if (password.length < 6) {
            setPassError('Password should be at least 6 characters');
            return
        }

        try{
            await register(email, password);
            await updateNamePhoto(name, photo);
            event.target.reset();
        }catch(err){
            setError(err.message);
        }
        
    }

    return (
        <div>
            <h1 className='text-4xl text-center pb-5 border-sec md:text-5xl text-sec'>Register</h1>


            <div className="card rounded-none mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered rounded-none" required />
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
                        {passError &&
                            <div className='bg-red-500/20 text-red-500 p-3 rounded-md'>{passError}</div>
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