import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';


const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);


  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);



  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4' >
         <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
         </div>
         <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex gap-2 font-semibold text-2xl'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
          </div>
          <br />
          <div>
            <p className='flex gap-1 font-medium'>About <img className='w-3' src={assets.info_icon} alt="" /> </p>
            <p className='text-gray-700'>{docInfo.about}</p>
          </div>
          <p className='text-gray-700 font-medium'>Appointment fee: <span className='text-black'>₹{docInfo.fees}</span></p>
         </div>
      </div>







      <div className=' my-10 text-center text-2xl font-medium text-gray-600 '> <p>----------- Booking Slots -----------</p> <br /> <h1>Coming Soon</h1></div>

    </div>
  );
};

export default Appointment;