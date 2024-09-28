import React from 'react';
import { assets } from '../assets/assets';

const AboutUs = () => {
  return (
    <div>
      <h1 className='text-center text-2xl text-gray-700 font-semibold py-8'>ABOUT <span className='text-blue-800'>US</span></h1>
      <div className='flex flex-col md:flex-row justify-around gap-10'>
        {/* Left side (image) */}
        <div className='w-full md:w-[1100px]'>
          <img src={assets.about_image} alt="About Us Image" />
        </div>
        {/* Right side (text) */}
        <div className='text-sm'>
          <p className='w-full md:w-4/5 h-full align-middle'>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            <br /> <br />
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
        </div>
      </div>

      <div className='mt-10 mb-11'>
        <h2 className='text-xl font-bold mb-6'>WHY CHOOSE US</h2>
        {/* Additional content can go here */}
        <div className='flex flex-col md:flex-row'>
    <div className='w-full md:w-1/3 border py-11 px-14 hover:bg-blue-700 hover:text-white mb-4 md:mb-0'>
        <h1 className='font-medium'>EFFICIENCY:</h1> 
        <p className='text-sm mt-2'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>
    <div className='w-full md:w-1/3 border py-11 px-14 hover:bg-blue-700 hover:text-white mb-4 md:mb-0'>
        <h1 className='font-medium'>CONVENIENCE:</h1> 
        <p className='text-sm mt-2'>Access to a network of trusted healthcare professionals in your area.</p>
    </div>
    <div className='w-full md:w-1/3 border py-11 px-14 hover:bg-blue-700 hover:text-white'>
        <h1 className='font-medium'>PERSONALIZATION:</h1> 
        <p className='text-sm mt-2'>Tailored recommendations and reminders to help you stay on top of your health.</p>
    </div>
</div>

  

      </div>
    </div>
  );
}

export default AboutUs;