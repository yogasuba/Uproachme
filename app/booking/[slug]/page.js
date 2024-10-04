"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { eventDetails } from "../../events/[slug]/page"; // Ensure correct import path

export default function BookingPage({ params }) {
  const router = useRouter();
  const slug = params?.slug;


  if (!slug) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold">Invalid Event</h2>
      </div>
    );
  }
// Retrieve the values from localStorage
  const storedDateInfo = JSON.parse(localStorage.getItem('selectedDateInfo'));
  const storedTimeRange = localStorage.getItem('selectedTimeRange');
  // Check if the eventDetails object contains the slug
  const event = eventDetails[slug];

  // Debugging: Log event to check if it’s found
  console.log("Event:", event);

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold">Event Not Found</h2>
        <button
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
          onClick={() => router.push("/")}
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <button
        className="flex items-center text-gray-800 font-bold p-2 ml-2"
        onClick={() => router.back()}
      >
        <Image
          src="/icons/back-arrow.svg" // Path to your back arrow icon
          alt="Back Arrow"
          width={16}
          height={16}
        />
        <span className="ml-2">Back</span>
      </button>


      {/* Main Grid Container */}
      <div className="flex-1 w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr]  pt-1">
        {/* Left Column: Booking Form */}
        <div className="bg-white gap-6 pr-20 pl-20 pt-5 shadow-md w-full">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text -sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter Your Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Call Purpose */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What Is The Call About?
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter Your Message"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                WhatsApp Number
              </label>
              <div className="mt-2 flex items-center border border-gray-300 rounded-md p-2">
                    <div className="flex items-center space-x-2 pr-2 border-r border-gray-300">
                        <img src="/icons/india 1.svg" alt="India Flag" className="h-5 w-5" />
                        <img src="/icons/chevron-down.svg" alt="Arrow Down" className="h-3 w-3" />
                    </div>
                    
                    {/* Input Field */}
                    <input
                    type="text"
                    placeholder="Enter Your Number"
                    className="ml-2 flex-1 focus:outline-none"
                    />
              </div>
                <div className="mt-4 flex items-center">
                    <input type="checkbox" id="phoneCheckbox" className="mr-2" />
                    <label htmlFor="phoneCheckbox" className="text-sm text-gray-500">
                        Receive Booking Details On Phone
                    </label>
                </div>
            </div>

            {/* Terms of Use */}
            <div className="text-xs text-gray-500 ">
                <p className="mb-1 mt-9">
                    By Proceeding, You Confirm That You Have Read and Agree 
                </p>
                <p>
                   To <a href="/terms" className="text-purple-600 font-bold hover:underline">Uproach.Me Terms of Use</a> and{" "}
                    <a href="/privacy" className="text-purple-600 font-bold hover:underline ">Privacy Notes</a>.
                </p>
            </div>

            {/* Confirm And Pay Button */}
            <div className="mt-8">
                <button
                    className="bg-purple-600 text-white hover:bg-purple-500 px-6 py-3 text-lg font-semibold w-full rounded-md"
                    onClick={() => router.push(`/scheduled/${slug}`)} 
                >
                    Confirm And Pay
                </button>
            </div>
          </form>
        </div>

        {/* Right Column: Event Summary */}
        <div className="bg-purple-100 pr-20 pl-20 pt-8 shadow-md w-full">
          <h2 className="text-2xl font-bold">{event.title}</h2>

          {/* Duration and Google Meet */}
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-sm font-medium text-gray-600">
              <Image
                src="/icons/clock.svg" // Clock icon path
                alt="Clock Icon"
                width={20}
                height={20}
              />
              <span className="ml-2">Duration: {event.duration}</span>
            </div>

            <div className="h-6 w-px bg-gray-300 mx-4"></div>

            <div className="flex items-center text-sm font-medium text-gray-600">
              <Image
                src="/icons/google-meet.svg" // Google Meet icon path
                alt="Google Meet Icon"
                width={20}
                height={20}
              />
              <span className="ml-2">Google Meet</span>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-md">
            {storedDateInfo && storedTimeRange && (
                <div className="flex items-center justify-between border-2 p-4 rounded-md space-x-4">
                {/* Left Section: Date Display */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 border-2 border-yellow-400 bg-yellow-300 rounded-md">
                            <div className="text-center">
                                <div className="text-xs font-bold">
                                  {storedDateInfo.month} {/* Display month */}
                                </div>
                                <div className="text-lg font-bold">
                                   {storedDateInfo.day} {/* Display day */}
                                </div>
                            </div>
                        </div>

                        {/* Date and Time Details */}
                        <div>
                            <p className="text-lg font-semibold">
                                {storedDateInfo.fullDate} {/* Complete Date */}
                            </p>
                            <p className="text-sm text-gray-600">
                                {storedTimeRange} (GMT +05:30) {/* Selected Time */}
                            </p>
                        </div>
                    </div>

                {/* Right Section: Button */}
                <button
                    className=" text-gray-800 px-2 py-1 rounded-2xl border-2"
                    onClick={() => router.back()} // Update with your event page route
                >
                    Change
                </button>
                </div>
            )}
            </div>

          {/* Event Description */}
          <h3 className="text-m font-semibold mt-6">Description</h3>
          <p className="text-gray-600 mt-2">{event.description}</p>

          <div className="mt-6">
            <h3 className="text-m font-semibold">Order Summary</h3>

            {event.price === '' ? (
                // Show this content when the event price is empty
                <p className="text-sm text-gray-600 mt-2">Booking is free.</p>
            ) : event.price === '₹500' ? (
                // Show this content when the event price is ₹500
                <div className="mt-2 bg-white p-4 rounded-lg shadow-sm border h-[195px]">
                    {/* First Item */}
                    <div className="flex justify-between py-2 border-b border-dotted border-gray-400 m-3">
                        <p className="text-sm font-medium text-gray-600">1 x quick chat on {event.title}</p>
                        <p className="text-sm font-medium text-gray-600">₹ 300</p>
                    </div>

                    {/* Second Item */}
                    <div className="flex justify-between py-2 border-b border-dotted border-gray-400 m-3">
                        <p className="text-sm font-medium text-gray-600">Add On: Recording</p>
                        <p className="text-sm font-medium text-gray-600">₹ 200</p>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between font-semibold py-2 m-3">
                        <p>Total</p>
                        <p>₹ 500</p>
                    </div>
                </div>
            ) : (
                // Fallback for other prices if necessary
                <div className="mt-2 bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex justify-between py-2 border-b border-dotted border-gray-400">
                        <p className="text-sm font-medium text-gray-600">1 x {event.title}</p>
                        <p className="text-sm font-medium text-gray-600">{event.price}</p>
                    </div>
                    <div className="flex justify-between font-semibold py-2">
                        <p>Total</p>
                        <p>{event.price}</p>
                    </div>
                </div>
            )}
            </div>
            {/* Footer (Powered By) */}
            <div className="text-gray-500 text-sm mt-12 flex justify-center">
                Powered by <a href="#" className="text-purple-600 font-bold hover:underline ml-1">Uproach.Me</a>
            </div>
        </div>
      </div>
    </div>
  );
}
