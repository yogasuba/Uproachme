import { useState } from 'react';
import Image from 'next/image';

export const ProfileHeader = ({ showShareButton = true, roundedClass = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`bg-white p-6 shadow flex flex-col items-start w-full ${roundedClass}`}>
      {/* Profile Header Content */}
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Profile Picture and Details */}
        <div className="flex items-center space-x-4">
          <Image
            src="/profile-photo.png" // Replace with your image path
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            {/* Name */}
            <h1 className="text-2xl font-bold">Vignesh Kumar</h1>

            {/* Location with Map Icon */}
            <div className="flex items-center text-gray-500">
              <Image
                src="/icons/map-pin.svg" // Path to your map icon in the public folder
                alt="Map Icon"
                width={16} 
                height={16}
                className="mr-1"
              />
              <p>Mangalampet, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Right Section: Share Button */}
        {showShareButton && (
          <button
            className="ml-auto text-purple-500 flex items-center space-x-2"
            onClick={toggleModal} // Toggle modal on click
          >
            <span>Share</span>
            <Image
              src="/icons/download.svg" // Path to your custom share icon in the public folder
              alt="Share Icon"
              width={16}
              height={16}
            />
          </button>
        )}
      </div>

      {/* Share Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white pl-2 pr-2 pt-5 pb-5 rounded-lg shadow-lg relative w-97">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={toggleModal}
            >
              <span>&times;</span> {/* Close button */}
            </button>
            {/* Modal Content */}
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <Image
                src="/profile-photo.png"
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full mb-4"
              />
              {/* Name and Social Handle */}
              <h2 className="text-lg font-semibold">Vignesh Kumar</h2>
              <p className="text-gray-500 text-sm">@Vignesh0303</p>

              {/* Share Links */}
              <div className="flex flex-col items-center space-y-4 mt-4 mb-4">
                <div className="flex justify-center space-x-3"> {/* Adjusted spacing */}
                    <div className="flex flex-col items-center" style={{ width: '60px' }}> {/* Fixed width */}
                        <a href="#" className="p-2 bg-gray-800 rounded-full">
                            <Image
                            src="/icons/mdi_link-variant.svg"
                            alt="Link Icon"
                            width={20}
                            height={20}
                            />
                        </a>
                        <p className="mt-2 text-xs text-center text-gray-600">Copy url</p>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '60px' }}>
                        <a href="#" className="p-2 bg-[#26D367] rounded-full">
                            <Image
                            src="/icons/ic_baseline-whatsapp.svg"
                            alt="WhatsApp Icon"
                            width={20}
                            height={20}
                            />
                        </a>
                        <p className="mt-2 text-xs text-center text-gray-600">WhatsApp</p>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '60px' }}>
                        <a href="#" className="p-2 bg-gradient-to-br from-[#8C48DB] via-[#CC4499] via-[#F7416C] via-[#FE7C4A] to-[#FFB133] rounded-full">
                            <Image
                            src="/icons/ion_logo-instagram.svg"
                            alt="Instagram Icon"
                            width={20}
                            height={20}
                            />
                        </a>
                        <p className="mt-2 text-xs text-center text-gray-600">Instagram</p>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '60px' }}>
                        <a href="#" className="p-2 bg-[#27A1FC] rounded-full">
                            <Image
                            src="/icons/icons8-telegram-app.svg"
                            alt="Telegram Icon"
                            width={20}
                            height={20}
                            />
                        </a>
                        <p className="mt-2 text-xs text-center text-gray-600">Telegram</p>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '60px' }}>
                        <a href="#" className="p-2 bg-[#1DA1F3] rounded-full">
                            <Image
                            src="/icons/radix-icons_twitter-logo.svg"
                            alt="Twitter Icon"
                            width={20}
                            height={20}
                            />
                        </a>
                        <p className="mt-2 text-xs text-center text-gray-600">Twitter</p>
                    </div>
                    <div className="flex flex-col items-center" style={{ width: '60px' }}>
                        <a href="#" className="p-2 bg-[#3B3B3B] rounded-full">
                            <Image
                            src="/icons/icon_doted.svg"
                            alt="More Icon"
                            width={20}
                            height={20}
                            />
                        </a>
                        <p className="mt-2 text-xs text-center text-gray-600">More</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
