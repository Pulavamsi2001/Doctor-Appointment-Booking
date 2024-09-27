import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 pb-5' >
        <div className='bg-gray-100 flex p-5 '>
            {/* left */}
            <div className='w-1/2'>
                <h1 className='text-3xl font-semibold'>DocFinder</h1>
                <p className='mt-5'>At DocFinder, we simplify healthcare by connecting patients with qualified doctors through our easy-to-use appointment booking platform. Our mission is to enhance your healthcare experience with convenience and efficiency. Join us in making healthcare accessible for everyone!</p>
            </div>


            {/* right */}
            <div className='w-1/2 flex justify-evenly'>
                <div >
                <h1 className='font-medium'>Quick Links</h1>
                <ul>Home</ul>
                <ul>About us</ul>
                <ul>Services</ul>
                <ul>Terms of Service</ul>
                </div>
                <div>
                    <h1 className='font-medium'>GET IN TOUCH</h1>
                    <ul>Phone: +91 9876543210</ul>
                    <ul> Email: support@example.com</ul>
                    <ul></ul>
                    <ul></ul>
                </div>
      
            </div>


        </div>






        <hr />
        <div className='flex justify-center mt-6'>
            <h1>Copyright 2024 @ Vamsi Krishna Pula - All Right Reserved.</h1>
        </div>




    </div>
  )
}

export default Footer