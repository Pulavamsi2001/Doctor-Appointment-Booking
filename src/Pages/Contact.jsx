import React from 'react';
import { assets } from '../assets/assets';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
      <p className='p-8 text-gray-700 text-center text-3xl font-'>Contact Us</p>
      <div className='flex flex-col md:flex-row justify-center gap-9 mb-20'>
        <div className='flex justify-center'>
          <img className='w-80 h-80' src={assets.contact_image} alt="Contact" />
        </div>
        <div className='text-left md:text-left'>
          <h1 className='font-semibold text-gray-700'>OUR OFFICE</h1>
          <br />
          <p className='text-sm text-gray-600'>Address: 123 Health St., Vijayawada,</p>  
          <p className='text-sm text-gray-600'>Andhra Pradesh, 521215</p>
          <br />
          <p className='text-sm text-gray-600'>Phone: +91 9876543210</p>
          <p className='text-sm text-gray-600'>Email: support@example.com</p>

          <br />
          <br />
          <h1 className='font-medium text-gray-700'>CAREERS AT DocFinder</h1>
          <p className='text-sm text-gray-600'>Learn more about our teams and job openings.</p>
          <p className='select-none mt-4 text-sm border border-black px-3 py-3 w-fit cursor-pointer hover:bg-black hover:text-white duration-300'>Explore Jobs</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;