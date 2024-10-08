import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Ensure this import is correct

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility
  const [token, setToken] = useState(true); // State to manage authentication token
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 md:px-8'>
      <h1 onClick={() => navigate('/')} className='text-3xl text-blue-800 font-bold cursor-pointer select-none'>DocFinder</h1>

      {/* Navigation Links */}
      <ul className={`fixed top-0 left-0 ml-[-15px] w-full h-20 bg-white z-50 flex  items-center justify-center gap-5 font-medium transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:flex md:flex-1 md:justify-center md:items-center md:gap-5 md:bg-transparent md:translate-x-0`}>
        <button onClick={() => setShowMenu(false)} className='absolute top-4 right-4 focus:outline-none md:hidden'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMenu(false)}>
          <li className='py-1'> HOME </li>
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMenu(false)}>
          <li className='py-1'> ALL DOCTORS </li>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMenu(false)}>
          <li className='py-1'> ABOUT </li>
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMenu(false)}>
          <li className='py-1'> CONTACT </li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5.121 17.804A9.953 9.953 0 0112 15c2.21 0 4.21.722 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z'></path>
              </svg>
              <div className='absolute top-7 right-0 text-base font-medium text-gray-500 z-20 hidden group-hover:block bg-white shadow-lg rounded-md'>
                <div className='p-4 flex flex-col'>
                  <p onClick={() => navigate('my-profile')} className='py-2 hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className='py-2 hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={() => { setToken(false); navigate('login'); }} className='py-2 hover:text-black cursor-pointer flex items-center gap-2'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 6H7'></path>
                    </svg> Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className='bg-primary text-white outline-none px-8 py-3 rounded-full font-semibold hidden md:block'>
              Create Account
            </button>
          )
        }
      </div>

      {/* Hamburger Menu for Mobile View */}
      <div className='md:hidden'>
        <button onClick={() => setShowMenu(!showMenu)} className='focus:outline-none'>
          {showMenu ? (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          ) : (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;