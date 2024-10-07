"use client";

import { useRouter } from 'next/navigation'; // Import useRouter for client-side navigation
import { useState } from 'react';
import Image from 'next/image';
import { ProfileHeader } from '../components/ProfileHeader';




export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-width Profile Section without any space */}
      <ProfileHead /> {/* Include the ProfileHead component to render the "Create Your Profile" section */}
      <ProfileHeader />

      {/* Grid Layout for Tabs, Sections, and Event List */}
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
        {/* Left Column (Tabs and Sections) */}
        <div>
          <TabNavigation />
        </div>

        {/* Right Column (Event Cards) */}
        <div>
          <EventList />
        </div>
      </div>
    </div>
  );
}

// ProfileHead Component (used for "Create Your Profile")
export const ProfileHead = () => {
  return (
    <div>
      {/* Header */}
      <header className="w-full h-[44px] bg-purple-200 relative flex justify-center items-center p-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-base leading-[1.3] capitalize font-semibold text-purple-500">
            Create Your Profile
          </h1>
          {/* External Link Image */}
          <Image
            src="/external-link.svg" // Path to your image in the public folder
            alt="External link"
            width={16}
            height={16}
            className="inline"
          />
        </div>
      </header>
    </div>
  );
};

export const TabNavigation = () => {
  const [selectedTab, setSelectedTab] = useState('about');

  return (
    <div>
      <div className="flex space-x-8 pb-2 py-8 p-7">
        <button
          className={`text-gray-600 hover:text-purple-600 font-semibold pb-2 ${
            selectedTab === 'about' ? 'text-purple-600 border-b-2 border-purple-600' : ''
          }`}
          onClick={() => setSelectedTab('about')}
        >
          About
        </button>
        <button
          className={`text-gray-600 hover:text-purple-600 font-semibold pb-2 ${
            selectedTab === 'specialties' ? 'text-purple-600 border-b-2 border-purple-600' : ''
          }`}
          onClick={() => setSelectedTab('specialties')}
        >
          Specialties
        </button>
        <button
          className={`text-gray-600 hover:text-purple-600 font-semibold pb-2 ${
            selectedTab === 'experience' ? 'text-purple-600 border-b-2 border-purple-600' : ''
          }`}
          onClick={() => setSelectedTab('experience')}
        >
          Experience
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {selectedTab === 'about' && <AboutSection />}
        {selectedTab === 'specialties' && <SpecialtiesSection />}
        {selectedTab === 'experience' && <ExperienceSection />}
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => (
  <div className="p-6">
    {/* Languages Section */}
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Languages</h2>
      <div className="space-x-2">
        <button className="text-muted-foreground bg-[rgba(0,0,0,0.07)] text-[#3a3a3a] px-4 py-1 rounded-[70px] text-[16px]">English</button>
        <button className="text-muted-foreground bg-[rgba(0,0,0,0.07)] text-[#3a3a3a] px-4 py-1 rounded-[70px] text-[16px]">Spanish</button>
        <button className="text-muted-foreground bg-[rgba(0,0,0,0.07)] text-[#3a3a3a] px-4 py-1 rounded-[70px] text-[16px]">Dutch</button>
      </div>
    </div>

    {/* About Text */}
    <p className="text-gray-600 mb-6 text-sm">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>

    {/* Horizontal Line */}
    <hr className="border-gray-300 my-6" />

    {/* Follow Me On Section */}
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Follow Me On</h2>
      <div className="space-y-4">
        {/* Social Media Links */}
        <div className="flex items-center">
          <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5 mr-3" />
          <span className="text-gray-700 text-sm">Facebook</span>
        </div>
        <div className="flex items-center">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5 mr-3" />
          <span className="text-gray-700 text-sm">Instagram</span>
        </div>
        <div className="flex items-center">
          <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5 mr-3" />
          <span className="text-gray-700 text-sm">Twitter</span>
        </div>
        <div className="flex items-center">
          <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5 mr-3" />
          <span className="text-gray-700 text-sm">YouTube</span>
        </div>
        <div className="flex items-center">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-3" />
          <span className="text-gray-700 text-sm">WhatsApp</span>
        </div>
      </div>
    </div>
  </div>
);

// Specialties Section Component
const SpecialtiesSection = () => (
  <div>
    <h2 className="text-lg font-semibold mb-2 justify-center">Specialties</h2>
    <p className="text-gray-600">Design, Development, Consulting...</p>
  </div>
);

// Experience Section Component
const ExperienceSection = () => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Experience</h2>
    <p className="text-gray-600">5 years in Web Development...</p>
  </div>
);
// Event List Component
const EventList = () => (
    <div className="p-4 bg-purple-100">
      {/* Event List Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-6">Event List</h2>
  
      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 font-bold">
        <EventCard title="Quick Chat On Design" duration="10 Min" price="Book" type="Video Meeting" />
        <EventCard title="Career Guidance" duration="10 Min" price="₹500" type="Video Meeting" />
        <EventCard title="1:1 Mentorship" duration="10 Min" price="₹500" type="Video Meeting" />
        <EventCard title="Designer’s Resume Review" duration="10 Min" price="₹500" type="Video Meeting" />
        <EventCard title="Design Portfolio Review" duration="10 Min" price="₹500" type="Video Meeting" />
        <EventCard title="UI Design Kickstarter" duration="10 Min" price="₹500" type="Video Meeting" />
      </div>
    </div>
  );
  
  // EventCard Component
  const EventCard = ({ title, duration, price, type }) => {
    const router = useRouter();
  
    const handleCardClick = () => {
        // Convert title to slug for the URL
        const slug = title
          .toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with dashes
          .replace(/:/g, '-')
          .replace(/’/g, '-');   // Remove colons (if any)
        router.push(`/events/${slug}`);
    };

  return (
    <div
      className="p-4 bg-white rounded-3xl shadow-md border border-gray-200 w-full max-w-full h-[164px] flex flex-col justify-between cursor-pointer"
      onClick={handleCardClick} // Navigate to the next page when clicked
    >
      <h3 className="text-lg font-bold">{title}</h3>

      {/* Bordered Section that covers both time, meeting type, and price */}
      <div className="flex justify-between items-center p-2 border border-gray-50 rounded-lg mt-4 bg-gray-50">
        {/* Left: Duration and Meeting Type */}
        <div className="flex items-center space-x-2">
          <Image
            src="/calendar.svg" // Path to the image inside public folder
            alt="Calendar Icon"
            width={20}
            height={20}
          />
          <div>
            <p className="text-gray-600 text-sm">{duration}</p>
            <p className="text-gray-500 text-xs">{type}</p>
          </div>
        </div>

        {/* Right: Price with arrow icon */}
        <div className="flex items-center space-x-2 border border-gray-300 px-3 py-1 rounded-full">
          <span className="text-gray-700 font-medium">{price}</span>
          <Image
            src="/icons/arrow-right.svg" // Path to your arrow icon
            alt="Arrow Icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};
