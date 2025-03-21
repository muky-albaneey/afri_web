'use client';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaUser, FaRuler, FaHeart, FaClock, FaCog } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import SavedTailors from './SavedTailors';
import AppDownloadSection from '../home/ads/AppDownloadSection';
import Measurements from './Measurements';
import AccountSettings from './AccountSettings';
import Appointments from './Appointments';

function MainSection(){
  const [showOptions, setShowOptions] = useState(false);
  return(
    <>
         <h1 className="text-2xl font-bold">Welcome back, Alex</h1>

{/* Stats */}
<div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
  {[
    { label: 'Saved Tailors', value: 4, change: '+2 from last month' },
    {
      label: 'Upcoming Appointments',
      value: 2,
      change: 'Next: May 15, 2025',
    },
    { label: 'Completed Orders', value: 7, change: '+3 from last year' },
  ].map((stat) => (
    <div
        key={stat.label}
        className="p-4 bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      >


      <h3 className="text-gray-500">{stat.label}</h3>
      <p className="text-3xl font-bold">{stat.value}</p>
      <p className="text-green-500 text-sm">{stat.change}</p>
    </div>
  ))}
</div>

<div className='w-full flex flex-col md:flex-row justify-between'>

{/* Recent Appointments */}
<div className="mt-6 bg-white p-4 rounded-lg shadow-sm w-[100%] md:w-[49%]">
  <h3 className="text-lg font-semibold">Recent Appointments</h3>
  {[
    {
      title: 'Suit Fitting with Elena Crafts',
      date: 'May 15, 2023 at 10:00 AM',
    },
    {
      title: 'Dress Alterations with Stitch Perfect',
      date: 'May 22, 2023 at 2:00 PM',
    },
  ].map((appointment) => (
    <div key={appointment.title} className="flex justify-between mt-4">
      <div>
        <h4 className="font-medium">{appointment.title}</h4>
        <p className="text-gray-500 text-sm">{appointment.date}</p>
      </div>
      <button className="px-4 py-1 bg-gray-100 text-gray-700 border rounded hover:bg-gray-200">
        View
      </button>
    </div>
  ))}
</div>

{/* Your Measurements */}
<div className="mt-6 bg-white p-4 rounded-lg shadow-sm w-[100%] md:w-[48%]">
  <h3 className="text-lg font-semibold">Your Measurements</h3>
  <p className="text-gray-500 text-sm">2 Measurement Sets</p>
  <p className="text-gray-400 text-xs">Last updated: April 10, 2023</p>
  <div className="flex gap-2 mt-4">
    <button className="w-[70%] bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-brown-600">
      Add New Measurements
    </button>
    <button
  className="px-4 py-2 bg-gray-100 border rounded hover:bg-gray-200"
  onClick={() => setShowOptions(!showOptions)}
>
  Manage
</button>
  </div>
  {/* Edit/Delete Buttons */}
  {showOptions && (
<div className="mt-2 relative">
  <button className="absolute right-0 top-0 bg-gray-100 border rounded px-4 py-2 hover:bg-gray-200">
    Edit
  </button>
  <button className="absolute right-0 top-12 bg-red-500 text-white border rounded px-4 py-2 hover:bg-red-600">
    Delete
  </button>
</div>
)}
</div>
</div>
<div className="w-full flex flex-col items-start justify-baseline  gap-7">
<SavedTailors />
<AppDownloadSection />
</div>
    </>
  )
}

export default function Dashboard() {
  const [status, setStatus] = useState("overview");
console.log(status)
  const getHomeComponent = () => {
    switch (status) {
      case "overview":
        return <MainSection />;
      case "measurement":
        return <Measurements />;
      case "saved_tailors":
        return <SavedTailors />;
      case "appointment":
        return <Appointments />;
      case "setting":
        return <AccountSettings />;
      default:
        return <MainSection />;
    }
  };
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const imageUrl = 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg';
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col bg-white  shadow-lg rounded-xl">
        <div className="p-4">
          {/* Profile */}
          <div className="flex items-center gap-3 mb-8">
            <Image
              src={imageUrl}
              alt="Profile"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">Alex Johnson</h2>
              <p className="text-gray-500 text-sm">Member since January 2024</p>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            {[
              { name: 'Overview', icon: <FaUser />, key: 'overview' },
              { name: 'My Measurements', icon: <FaRuler />, key: 'measurement' },
              { name: 'Saved Tailors', icon: <FaHeart />, key: 'saved_tailors' },
              { name: 'Appointments', icon: <FaClock />, key: 'appointment' },
              { name: 'Settings', icon: <FaCog />, key: 'setting' },
            ].map((item) => (
              <button
                          key={item.key}
                          onClick={() => {
                            setStatus(item.key); // Update state
                            setIsSidebarOpen(false); // Close sidebar on mobile
                          }}
                          className={`flex items-center w-full py-3 px-4 mb-2 text-left rounded-lg ${
                            status === item.key
                              ? 'bg-[#8B4513] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="mr-3">{item.icon}</span>
                          {item.name}
                        </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={setIsSidebarOpen}
        >
          <div className="fixed inset-0 bg-opacity-25 transition-opacity" style={{ backgroundColor: 'rgba(0,0,0,.4)' }} />

          <div className="fixed left-4 top-16 right-4 w-[90%]">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-[-100%]"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-[-100%]"
            >
              <Dialog.Panel className="bg-white rounded-xl p-6 shadow-lg">
                {/* Profile */}
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={imageUrl}
                    alt="Profile"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-bold">Alex Johnson</h2>
                    <p className="text-gray-500 text-sm">
                      Member since January 2024
                    </p>
                  </div>
                </div>
                <button
        onClick={() => setIsSidebarOpen(false)}
        className="fixed top-60 right-3 z-20 rounded-full text-white bg-[#8B4513] w-12 h-12 flex items-center justify-center shadow-md md:hidden"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
                {/* Navigation */}
                <nav>
                      {[
                        { name: 'Overview', icon: <FaUser />, key: 'overview' },
                        { name: 'My Measurements', icon: <FaRuler />, key: 'measurement' },
                        { name: 'Saved Tailors', icon: <FaHeart />, key: 'saved_tailors' },
                        { name: 'Appointments', icon: <FaClock />, key: 'appointment' },
                        { name: 'Settings', icon: <FaCog />, key: 'setting' },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setStatus(item.key); // Update state
                            setIsSidebarOpen(false); // Close sidebar on mobile
                          }}
                          className={`flex items-center w-full py-3 px-4 mb-2 text-left rounded-lg ${
                            status === item.key
                              ? 'bg-[#8B4513] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="mr-3">{item.icon}</span>
                          {item.name}
                        </button>
                      ))}
                    </nav>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Open Sidebar Button (Mobile) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-60 right-[-20px] left-0 z-20 rounded-full text-white bg-[#8B4513] w-9 h-8 flex items-center justify-center shadow-md md:hidden"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
        {getHomeComponent()}          
      </div>
      
    </div>
    
  );
}
