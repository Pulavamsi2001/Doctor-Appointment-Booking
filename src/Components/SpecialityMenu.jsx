import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets'; // Ensure this import is correct

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-full text-center text-sm px-4 sm:px-0'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className='flex sm:justify-center gap-1 pt-5 w-full overflow-x-auto px-4 sm:px-0'>
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} key={index} to={`/doctors/${item.speciality}`} className='flex-shrink-0 w-40 sm:w-48'>
            <img
              src={item.image}
              alt={item.speciality}
              className='w-full h-32 object-fill transition-transform duration-300 ease-in-out transform hover:scale-105 '
            />
            <p className='text-center text-sm mt-2'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;