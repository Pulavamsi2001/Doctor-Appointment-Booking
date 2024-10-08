import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';
import Footer from '../Components/Footer';

// Popup Component for Booking Confirmation
const Popup = ({ doctorName, specialty, time, date, onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <h2 className="text-lg font-semibold">Appointment Confirmation</h2>
        <p className="mt-2">Doctor: {doctorName}</p>
        <p className="mt-1">Specialty: {specialty}</p>
        <p className="mt-1">Date: {date}</p>
        <p className="mt-1">Time: {time}</p>
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Close
          </button>
          <button onClick={onConfirm} className="bg-primary text-white px-4 py-2 rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// Confirmation Popup Component
const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <h2 className="text-lg font-semibold">Appointment Confirmed!</h2>
        <p className="mt-2">Your appointment has been successfully booked.</p>
        <div className="flex justify-center mt-4">
          <button onClick={onClose} className="bg-primary text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState({});
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isConfirmedVisible, setIsConfirmedVisible] = useState(false);

  // Fetch Doctor Information
  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  // Get Available Slots for the Doctor
  const getAvailableSlots = async () => {
    const slotsByDay = {};
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const dayKey = currentDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
      const dayDate = currentDate.getDate();
      let endTime = new Date(currentDate);
      endTime.setHours(20, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const dailySlots = { date: dayDate, slots: [] };

      const isSunday = dayKey === 'SUN';

      while (currentDate < endTime) {
        const formattedTime = {
          time: currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          available: true
        };

        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        if (isSunday) {
          if (currentDate.getHours() < 12 || (currentDate.getHours() === 12 && currentDate.getMinutes() < 30)) {
            dailySlots.slots.push(formattedTime);
          }
        } else {
          if (!(hours === 12 && minutes >= 30) && !(hours === 13) && !(hours === 14 && minutes < 0)) {
            dailySlots.slots.push(formattedTime);
          }
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // Only add the day if it has slots available
      if (dailySlots.slots.length > 0 || currentDate.getDate() !== today.getDate()) {
        slotsByDay[dayKey] = dailySlots;
      }
    }

    setDocSlots(slotsByDay);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    if (docSlots && Object.keys(docSlots).length > 0 && selectedDayIndex >= 0) {
      const dayKey = Object.keys(docSlots)[selectedDayIndex];
      if (docSlots[dayKey] && docSlots[dayKey].slots.length > 0) {
        setSlotTime(docSlots[dayKey].slots[slotIndex].time);
      } else {
        setSlotIndex(0); // Reset slotIndex if no slots are available
      }
    }
  }, [slotIndex, selectedDayIndex, docSlots]);

  const handleBookAppointment = () => {
    setIsPopupVisible(true);
  };

  const handleConfirmAppointment = () => {
    // Implement your booking logic here (e.g., API call)
    console.log(`Appointment confirmed for ${docInfo.name} on ${slotTime}`);
    setIsPopupVisible(false);
    setIsConfirmedVisible(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmedVisible(false);
  };

  const selectedDate = docSlots[Object.keys(docSlots)[selectedDayIndex]]?.date;
  const formattedDate = selectedDate ? new Date(new Date().setDate(selectedDate)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
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
          <p className='text-gray-600 text-lg font-medium'>Appointment fee: <span className='text-black'>₹{docInfo.fees}</span></p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='mt-8 mb-2'>Booking slots</p>

        {/* Horizontal Scroll for Day Buttons */}
        <div className='flex overflow-x-auto mb-2'>
          {Object.keys(docSlots).map((day, dayIndex) => (
            <button
              key={day}
              className={`flex-shrink-0 text-black border border-gray-500 px-4 py-4 rounded-lg mr-2 ${selectedDayIndex === dayIndex ? 'bg-primary text-white' : 'bg-gray-50'}`}
              onClick={() => {
                setSelectedDayIndex(dayIndex);
                setSlotIndex(0); // Reset slot index when selecting a new day
              }}
            >
              {day} {docSlots[day].date}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll for Timing Buttons */}
        {selectedDayIndex !== null && (
          <div className='flex overflow-x-auto mt-2'>
            {docSlots[Object.keys(docSlots)[selectedDayIndex]] && 
              docSlots[Object.keys(docSlots)[selectedDayIndex]].slots.map((slot, index) => (
                <button
                  key={`${Object.keys(docSlots)[selectedDayIndex]}-${slot.time}`}
                  className={`flex-shrink-0 text-gray-600 px-4 py-2 rounded-2xl m-1 border border-gray-500 ${slot.available ? (index === slotIndex ? 'bg-primary text-white' : 'bg-gray-50') : 'bg-gray-300'}`}
                  onClick={() => slot.available && setSlotIndex(index)}
                >
                  {slot.time}
                </button>
              ))}
          </div>
        )}

        <button className='bg-primary text-white border border-gray-700 rounded-full px-20 py-3 mt-5 mb-11 text-sm' onClick={handleBookAppointment}>
          Book an appointment
        </button>
      </div>

      {/* Popup for Appointment Confirmation */}
      {isPopupVisible && (
        <Popup
          doctorName={docInfo.name}
          specialty={docInfo.speciality}
          time={slotTime}
          date={formattedDate}
          onClose={() => setIsPopupVisible(false)}
          onConfirm={handleConfirmAppointment}
        />
      )}

      {/* Confirmation Popup */}
      {isConfirmedVisible && (
        <ConfirmationPopup onClose={handleCloseConfirmation} />
      )}

      <Footer />
    </div>
  );
};

export default Appointment;
