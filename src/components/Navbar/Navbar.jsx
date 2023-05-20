import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {

    // get data from context
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async() => {
        await logout();
        navigate('/');
    }

    // navigation items
    const items = [
        <Link to='/'>Home</Link>,
        <Link to='/allProducts'>All Products</Link>,
        <Link to='/blog'>Blog</Link>,
    ]
    const privateItems = [
        <Link to='/myproducts'>My Products</Link>,
        <Link to='/addproduct'>Add Product</Link>,
    ]


    return (
        <div className='bg-dark'>
        <div className="max-w-[1280px] mx-auto flex justify-between items-center  p-2">
            <div className="flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="p-1 hover:bg-sec/10 transition h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="space-y-2 menu-compact dropdown-content mt-3 p-2 shadow bg-dark  w-52">
                        {/* public items */}
                        {items.map((item, index)=> <li key={index} className='text-light hover:text-sec transition'>{item}</li>)}
                        {user&&privateItems.map((item, index)=> <li key={index} className='text-light hover:text-sec transition'>{item}</li>)}
                        
                    </ul>
                </div>
                <Link to='/'><img className='h-[40px]' src={logo} alt="" /></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="space-x-5 menu-horizontal px-1">
                    {/* items */}
                    {items.map((item, index)=> <li key={index} className='text-light hover:text-sec transition'>{item}</li>)}
                    {user&&privateItems.map((item, index)=> <li key={index} className='text-light hover:text-sec transition'>{item}</li>)}
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                {/* login button and user */}
                {!user?
                <Link to='/login' className="px-3 py-1 text-sec hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer">Login</Link>
                :
                <div className="relative group">
                    <label tabIndex={0} className="cursor-pointer avatar">
                        <div className="w-14 border-2 border-light hover:border-sec transition rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="space-y-2 group-hover:block hidden absolute right-0 top-10 menu-compact dropdown-content mt-3 p-2 shadow bg-dark  w-52">
                        {/* profile items */}
                        <li className='text-sec hover:text-sec transition'>{user?.displayName}</li>
                        <li className='text-light hover:text-sec transition'><Link to='/editProfile'>Edit profile</Link></li>
                        <button onClick={handleLogout} className="px-3 py-1 text-red-500 hover:text-red-600 transition border-2 border-light hover:border-red-600 cursor-pointer">Log out</button>
                    </ul>
                </div>
                }  
            </div>
        </div>
        </div>
    );
};

export default Navbar;