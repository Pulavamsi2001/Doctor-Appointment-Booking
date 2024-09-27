import React from 'react'
import { doctors } from '../assets/assets';

const AllDoctors = () => {
  return (
    <div className='py-16'>
    <div className='container mx-auto text-center'>
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>ALL Doctors to Book</h1>
      <p className='text-md text-gray-600 mb-8'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {doctors.map((item, index) => (
          <div key={index} onClick={()=>navigate(`/appointment/${item._id}`)} className='bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden hover:shadow-xl transition-shadow duration-300'>
            <img src={item.image} alt="Doctor" className='w-full h-auto object-cover bg-blue-50' />
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
  )
}

export default AllDoctors