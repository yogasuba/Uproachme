"use client";
import { useState,useEffect  } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ProfileHeader } from '../../components/ProfileHeader';

// Dummy event data
export const eventDetails = {
    'quick-chat-on-design': {
      title: 'Quick Chat On Design',
      duration: '10 Min',
      price: '',
      type: 'Video Meeting',
      description:
        'This quick chat is perfect for brainstorming ideas, discussing a design challenge, or getting quick feedback on your current project.',
    },
    'career-guidance': {
      title: 'Career Guidance',
      duration: '10 Min',
      price: '₹500',
      type: 'Video Meeting',
      description:
        'Get personalized career advice from industry experts to help you navigate your professional journey.',
    },
    '1-1-mentorship': {
      title: '1:1 Mentorship',
      duration: '10 Min',
      price: '₹500',
      type: 'Video Meeting',
      description:
        'One-on-one mentorship to help you grow your career and get professional guidance tailored to your goals.',
    },
    'designer-s-resume-review': {
      title: 'Designer’s Resume Review',
      duration: '10 Min',
      price: '₹500',
      type: 'Video Meeting',
      description:
        'Get feedback on your resume from design professionals to enhance your chances of landing a job.',
    },
    'design-portfolio-review': {
      title: 'Design Portfolio Review',
      duration: '10 Min',
      price: '₹500',
      type: 'Video Meeting',
      description:
        'Receive constructive feedback on your design portfolio to help improve your work.',
    },
    'ui-design-kickstarter': {
      title: 'UI Design Kickstarter',
      duration: '10 Min',
      price: '₹500',
      type: 'Video Meeting',
      description:
        'Kickstart your UI design project with expert guidance and insights.',
    },
  };
  
  export default function EventDetailPage({ params }) {
    const router = useRouter();
    const { slug } = params;
  
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Set default to current month
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
      // Times for time selection
    const times = [
      '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
      '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
      '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
    ];

// Function to get the next 7 days starting from the 1st of the selected month
const getNextSevenDays = (year, month) => {
    const daysArray = [];
    const firstDayOfMonth = new Date(year, month, 1);
  
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(firstDayOfMonth);
      nextDay.setDate(firstDayOfMonth.getDate() + i);
  
      const day = nextDay.toLocaleString('en-US', { weekday: 'short' });
      const date = nextDay.toLocaleString('en-US', { day: 'numeric', month: 'short' });
  
      // Return the actual Date object instead of formatted strings
      daysArray.push({ day, date, fullDate: nextDay });
    }
  
    return daysArray;
  };
  
  const [days, setDays] = useState(getNextSevenDays(currentYear, selectedMonth));
  
  // Function to format selected date based on the full date
  const formatSelectedDate = (selectedDay) => {
    if (selectedDay !== null && days[selectedDay]) {
      const { fullDate } = days[selectedDay];
  
      const month = fullDate.toLocaleString('en-US', { month: 'short' });
      const day = fullDate.toLocaleString('en-US', { day: 'numeric' });
      const fullDateString = fullDate.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short'
      });
  
      return { month, day, fullDate: fullDateString };
    }
    return {};
  };

    // Function to get the end time based on the selected time
    const getTimeRange = (selectedTime) => {
        if (selectedTime !== null) {
            const startTime = times[selectedTime];
            const [time, modifier] = startTime.split(" ");
            let [hours, minutes] = time.split(":").map(Number);
    
            // Calculate end time (30 minutes later)
            minutes += 30;
            if (minutes >= 60) {
                minutes = minutes - 60;
                hours = (hours + 1) % 12;
            }

            // Handle cases when hours reach 12
            if (hours === 0) hours = 12; // Adjust hours if it is 0

            const endTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${modifier}`;
            return `${startTime} to ${endTime}`; // Return formatted time range
        }
        return ""; // Return empty if no time is selected
    };

    // Render Selected Date and Time
    const selectedDateInfo = selectedDate !== null ? formatSelectedDate(selectedDate) : {};
    const selectedTimeRange = getTimeRange(selectedTime); // Get the time range

  // Save the date and time to localStorage
localStorage.setItem('selectedDateInfo', JSON.stringify(selectedDateInfo));
localStorage.setItem('selectedTimeRange', selectedTimeRange);
    const event = eventDetails[slug];
  
    if (!event) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-red-600">Event Not Found</h1>
          <button
            className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
            onClick={() => router.push('/home')}
          >
            Go Back to Profile
          </button>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen flex flex-col">
        {/* Back Button */}
        <button className="flex items-center text-gray-800 font-bold p-2 ml-2" onClick={() => router.back()}>
          <Image src="/icons/back-arrow.svg" alt="Back Arrow" width={16} height={16} />
          <span className="ml-2">Back</span>
        </button>
        <ProfileHeader />
  
        <div className="flex-1 w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-1 pt-1">
          <div className="bg-white p-6 shadow-md w-full">
            {/* Month Selection with Dropdown */}
            <div className="flex items-center mb-4 cursor-pointer" onClick={toggleDropdown}>
              <h2 className="text-xl font-semibold">{months[selectedMonth]} {currentYear}</h2>
              <Image src="/icons/arrow-down-icon.svg" alt="Arrow Down Icon" width={24} height={24} className="ml-2" />
            </div>
  
            {isDropdownOpen && (
              <div className="absolute left-0 ml-2 w-48 bg-white border border-gray-200 shadow-md rounded-lg z-10 max-h-48 overflow-y-auto scrollbar-thin">
                {months.map((month, index) => (
                  <button
                    key={index}
                    onClick={() => { 
                      setSelectedMonth(index); 
                      setDays(getNextSevenDays(currentYear, index)); 
                      setIsDropdownOpen(false); 
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
  
            {/* Date Boxes */}
            <div className="grid grid-cols-7 gap-2 text-center mb-6">
            {days.map((item, index) => (
                <button
                key={index}
                onClick={() => setSelectedDate(selectedDate === index ? null : index)} // Toggle selection
                className={`flex flex-col items-center justify-center py-4 border rounded ${
                    selectedDate === index
                    ? 'border-purple-500 bg-purple-100'
                    : 'border-[1px solid rgba(0, 0, 0, 0.15)]'
                }`}
                >
                <div className="text-sm font-medium text-gray-400">{item.day}</div>
                <div className="text-lg font-semibold">{item.date}</div>
                </button>
            ))}
            </div>
  
            {/* Conditionally Render Content Based on Month */}
            {selectedMonth === new Date().getMonth() ? (
              <>
                {/* Time Zone */}
                <div className="mb-4">
                  <strong className="text-m font-semibold mb-3">Time Zone:</strong>
                  <div className="text-sm text-gray-500 mt-2 mb-6 flex items-center">
                    (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi (IST)
                    <Image src="/icons/chevron-down.svg" alt="Arrow Down Icon" width={24} height={24} className="ml-2" />
                  </div>
                </div>
  
                {/* Time Selection */}
                <h3 className="text-m font-semibold mb-2">Select Time Of Day</h3>
                <div className="grid grid-cols-6 gap-2 mt-4">
                {times.map((time, index) => (
                    <button
                    key={index}
                    onClick={() => setSelectedTime(selectedTime === index ? null : index)} // Toggle selection
                    className={`border py-2 w-full rounded-md ${
                        selectedTime === index
                        ? 'border-purple-500 bg-purple-100'
                        : 'border-[1px solid rgba(0, 0, 0, 0.15)]'
                    }`}
                    >
                    {time}
                    </button>
                ))}
                </div>
              </>
            ) : (
              <div className="text-center ">
                <Image className="ml-60" src="https://tresmares.com/wp-content/uploads/2023/03/Searching-1.svg" data-src="https://tresmares.com/wp-content/uploads/2023/03/Searching-1.svg" 
                alt="Seguros de caza en Cantabria"  width={250} height={250} />
                <p className="text-lg text-gray-500 ">
                    Description
                </p>
              </div>
            )}

          {/* Footer */}
        <div className="mt-10 text-sm text-gray-500 text-center">
            Powered by <a href="#" class="text-purple-600 font-bold hover:underline ml-1">Uproach.Me</a>
        </div>
        </div>


        {/* Right Column: Event Details */}
        <div className="bg-white p-6 shadow-md w-full">
          {/* Event Title */}
          <div >
            <h1 className="text-xl font-bold text-gray-800">{event.title}</h1>

            {/* Price (if not free) */}
            {event.price && event.price !== 'free' && (
              <div className="text-2xl font-bold text-gray-800 mt-4">{event.price}
              <span className="text-gray-800 text-sm ml-2">Price</span></div>
              
            )}

            <div className="flex items-center space-x-4 mt-4">
            {/* Duration 30 Min */}
            <div className="flex items-center text-gray-600 font-bold space-x-2 text-sm">
                <Image src="/icons/clock.svg" alt="Clock Icon" width={20} height={20} />
                <span>Duration 30 Min</span>
            </div>
            <div className="h-6 w-px bg-gray-300" />
            {/* Google Meet */}
            <div className="flex items-center text-gray-600 font-bold space-x-2 text-sm">
                <Image src="/icons/google-meet.svg" alt="Google Meet Icon" width={20} height={20} />
                <span>Google Meet</span>
            </div>
            </div>

            {/* Description Heading */}
            <h3 className="text-lg font-semibold mt-6">Description</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 leading-relaxed">
              {event.description}
            </p>
            <div className="mt-6">
                {selectedDate !== null && selectedTime !== null && (
                <div className="flex items-center border-2 border-gray-200 p-4 rounded-md space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 border-2 border-yellow-400 bg-yellow-300 rounded-md">
                        <div className="text-center">
                            <div className="text-xs font-bold">
                                {selectedDateInfo.month} {/* Display month */}
                            </div>
                            <div className="text-lg font-bold">
                                {selectedDateInfo.day} {/* Display day */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold">
                            {selectedDateInfo.fullDate} {/* Complete Date */}
                        </p>
                        <p className="text-sm text-gray-600">
                            {selectedTimeRange} (GMT +05:30) {/* Selected Time */}
                        </p>
                    </div>
                </div>
                )}
            </div>

            {/* Confirm Details Button */}
            <div className="mt-8">
                <button
                    className={`px-6 py-3 text-lg font-semibold w-full rounded-md ${
                        selectedDate !== null && selectedTime !== null 
                        ? 'bg-purple-600 hover:bg-purple-500 text-white' // Purple when selected
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed' // Grey when not selected
                    }`}
                    onClick={() => {
                        if (selectedDate !== null && selectedTime !== null) {
                            router.push(`/booking/${slug}`);
                        }
                    }} 
                    disabled={selectedDate === null || selectedTime === null} // Disable the button if not selected
                >
                    Confirm Details
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
