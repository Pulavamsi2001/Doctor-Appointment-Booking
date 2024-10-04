import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';
import About from './About';

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
          <p className='flex gap-2 font-medium text-2xl'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
          </div>
          <div>
            <p className='flex gap-1'>About <img className='w-3' src={assets.info_icon} alt="" /> </p>
            <p>{docInfo.about}</p>
          </div>


         </div>
      </div>

    </div>
  );
};

export default Appointment;