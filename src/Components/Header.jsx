import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-primary rounded-lg px-6 md:px-[80px] h-auto md:h-[550px] py-8 md:py-0'>
      {/* --------------------------------- Left side ------------------------------------ */}
      <div className='max-w-lg flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <p className='text-white text-2xl md:text-4xl font-bold leading-tight mb-6'>
          Book Appointments <br /> With Trusted Doctors
        </p>

        <p className='text-white'>Discover our extensive network of reputable doctors and set your appointment quickly and conveniently.</p> <br />
        <a className='inline-block px-6 py-3 bg-white text-primary font-semibold rounded shadow hover:bg-gray-100 transition' href="#speciality">
          Book Appointment
        </a>
      </div>

      {/* --------------------------------- Right side ------------------------------------ */}
      <div className='flex-shrink-0 w-full md:w-auto mt-8 md:mt-0'>
        <img className='w-full h-auto max-w-md object-cover' src={assets.header_img} alt="Header Image" />
      </div>
    </div>
  );
}

export default Header;