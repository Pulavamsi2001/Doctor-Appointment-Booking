import React from 'react';

const Footer = () => {
  return (
    <div className='border-t-2 pb-5'>
      <div className=' flex flex-col md:flex-row p-5'>
        {/* left */}
        <div className='w-full md:w-1/2 mb-5 md:mb-0'>
          <h1 className='text-3xl text-blue-800 font-bold  '>DocFinder</h1>
          <p className='mt-5'>
            At DocFinder, we simplify healthcare by connecting patients with qualified doctors through our easy-to-use appointment booking platform. Our mission is to enhance your healthcare experience with convenience and efficiency. Join us in making healthcare accessible for everyone!
          </p>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2 flex flex-col md:flex-row justify-evenly'>
          <div className='mb-5 md:mb-0'>
            <h1 className='font-medium text-[17px]'>QUICK LINKS</h1>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium text-[17px]'>GET IN TOUCH</h1>
            <ul>
              <li>Phone: +91 9876543210</li>
              <li>Email: support@example.com</li>
              <li>Adress: 123 Health St., Vijayawada, 521215</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className='py-3 px-1 text-center'>Copyright 2024 Vamsi Krishna Pula - All Right Reserved.</p>
    </div>
  );
};

export default Footer;