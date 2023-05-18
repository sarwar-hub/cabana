import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-light.png';

const Navbar = () => {
    const items = [
        <li className='text-light hover:text-sec transition'><Link>Home</Link></li>,
        <li className='text-light hover:text-sec transition'><Link>All Cubes</Link></li>,
        <li className='text-light hover:text-sec transition'><Link>My Cubes</Link></li>,
        <li className='text-light hover:text-sec transition'><Link>Add Cube</Link></li>,
        <li className='text-light hover:text-sec transition'><Link>Blog</Link></li>,
    ]
    return (
        <div className="flex justify-between items-center bg-dark p-2">
            <div className="flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="p-1 hover:bg-sec/10 transition h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="space-y-5 menu-compact dropdown-content mt-3 p-2 shadow bg-dark  w-52">
                        {/* items */}
                        {items}
                    </ul>
                </div>
                <Link><img className='h-[40px]' src={logo} alt="" /></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="space-x-5 menu-horizontal px-1">
                    {/* items */}
                    {items}
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <a className="px-3 py-1 text-light hover:text-sec transition border-2 border-light hover:border-sec cursor-pointer">Login</a>
                {/* user */}

                <div className=" group">
                    <label tabIndex={0} className="cursor-pointer avatar">
                        <div className="w-14 border-2 border-light hover:border-sec transition rounded-full">
                            <img src={''} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="space-y-2 group-hover:block hidden absolute right-0 top-10 menu-compact dropdown-content mt-3 p-2 shadow bg-dark  w-52">
                        {/* profile items */}
                        <li className='text-light hover:text-sec transition'><Link>Name</Link></li>
                        <li className='text-light hover:text-sec transition'><Link>Edit profile</Link></li>
                        <button className="px-3 py-1 text-red-500 hover:text-red-600 transition border-2 border-light hover:border-red-600 cursor-pointer">Log out</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;