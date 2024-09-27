import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { assets } from './../assets/assets';

// Navbar component
const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility
  const [token, setToken] = useState(true); // State to manage authentication token

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt='logo' />
      
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'> HOME </li>
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'> ALL DOCTORS </li>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'> ABOUT </li>
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'> CONTACT </li>
        </NavLink>
      </ul>

      {/* Account Button or Profile Dropdown */}
      <div className='flex items-center gap-4'>
        {
          token ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-7 right-0 text-base font-medium text-gray-500 z-20 hidden group-hover:block bg-white shadow-lg rounded-md'>
                <div className='p-4 flex flex-col'>
                  <p onClick={()=>navigate('my-profile')} className='py-2 hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className='py-2 hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='py-2 hover:text-black cursor-pointer'>Logout</p>
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
    </div>
  );
};

export default Navbar;