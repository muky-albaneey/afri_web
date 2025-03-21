"use client";
import { useState } from 'react';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      title: 'Suit Fitting with Elena Crafts',
      date: 'May 15, 2023 at 10:00 AM',
    },
    {
      id: 2,
      title: 'Dress Alterations with Stitch Perfect',
      date: 'May 22, 2023 at 2:00 PM',
    },
  ];

  const pastAppointments = [
    {
      id: 1,
      title: 'Suit Fitting with Elena Crafts',
      date: 'May 15, 2023 at 10:00 AM',
    },
    {
      id: 2,
      title: 'Dress Alterations with Stitch Perfect',
      date: 'May 22, 2023 at 2:00 PM',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 border rounded ${
            activeTab === 'upcoming'
              ? 'bg-[#8B4513] text-white border-[#8B4513]'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 border rounded ${
            activeTab === 'past'
              ? 'bg-[#8B4513] text-white border-[#8B4513]'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Past
        </button>
      </div>

      {/* Upcoming Appointments */}
      {activeTab === 'upcoming' && (
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h2 className="font-medium">{appointment.title}</h2>
              <p className="text-gray-500 text-sm">{appointment.date}</p>
              <div className="mt-2 flex space-x-2">
                <button className="border border-gray-300 rounded px-3 py-1 text-sm">
                  Reschedule
                </button>
                <button className="border border-[#808080] text-[#FF0000] rounded px-3 py-1 text-sm">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past Appointments */}
      {activeTab === 'past' && (
        <div className="space-y-4">
          {pastAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h2 className="font-medium">{appointment.title}</h2>
              <p className="text-gray-500 text-sm">{appointment.date}</p>
              <div className="mt-2 flex space-x-2">
                <button className="border border-gray-300 rounded px-3 py-1 text-sm">
                  Book again
                </button>
                <button className="border border-gray-300 rounded px-3 py-1 text-sm">
                  Leave review
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
