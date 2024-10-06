import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  
  // State to store filtered doctors
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to get filtered doctors based on the speciality
  const getFilteredDoctors = () => {
    if (speciality) {
      return doctors.filter(doc => doc.speciality === speciality);
    }
    return doctors; // Return all doctors if no speciality is specified
  };

  useEffect(() => {
    setFilteredDoctors(getFilteredDoctors());
  }, [doctors, speciality]);

  const handleFilterClick = (filter) => {
    if (speciality === filter) {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${filter}`);
    }
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-11 mt-5'>

        {/* Filters list for larger screens */}
        <div className='hidden sm:flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => handleFilterClick('General physician')} className='p-2 pr-4 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>General physician</p>
          <p onClick={() => handleFilterClick('Gynecologist')} className='p-2 pr-4 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Gynecologist</p>
          <p onClick={() => handleFilterClick('Dermatologist')} className='p-2 pr-4 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Dermatologist</p>
          <p onClick={() => handleFilterClick('Pediatricians')} className='p-2 pr-4 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Pediatrician</p>
          <p onClick={() => handleFilterClick('Neurologist')} className='p-2 pr-16 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Neurologist</p>
          <p onClick={() => handleFilterClick('Gastroenterologist')} className='p-2 pr-16 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Gastroenterologist</p>
        </div>

        {/* Dropdown for mobile screens */}
        <div className='sm:hidden relative'>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='p-2 pr-4 border rounded-md hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>
            Select Speciality
          </button>
          {isDropdownOpen && (
            <div className='absolute mt-2 py-1 px-2 w-44 bg-white border rounded-md shadow-lg'>
              <p onClick={() => handleFilterClick('General physician')} className='p-2 pr-4 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>General physician</p>
              <p onClick={() => handleFilterClick('Gynecologist')} className='p-2 pr-4 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Gynecologist</p>
              <p onClick={() => handleFilterClick('Dermatologist')} className='p-2 pr-4 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Dermatologist</p>
              <p onClick={() => handleFilterClick('Pediatricians')} className='p-2 pr-4 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Pediatrician</p>
              <p onClick={() => handleFilterClick('Neurologist')} className='p-2 pr-16 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Neurologist</p>
              <p onClick={() => handleFilterClick('Gastroenterologist')} className='p-2 pr-16 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out'>Gastroenterologist</p>
            </div>
          )}
        </div>

        {/* Doctor cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {filteredDoctors.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className='bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <img src={item.image} alt="Doctor" className='w-full h-auto object-cover bg-blue-5' />
              <div className='p-6'>
                <div className='mb-0'>
                  <div className='flex items-center'>
                    <p className='w-2 h-2 bg-green-600 rounded-full'></p>
                    <p className='text-sm text-green-500 font-medium ml-2'>Available</p>
                  </div>
                  <p className='text-1xl font-semibold text-gray-800 flex items-start'>{item.name}</p>
                </div>
                <p className='text-sm text-gray-500 flex items-start'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;