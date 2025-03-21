import React from 'react';

const Measurements = () => {
  const measurements = [
    {
      type: 'Formal Wears',
      lastUpdated: 'March 10, 2025',
      data: {
        Chest: '42 inches',
        Waist: '42 inches',
        Hip: '42 inches',
        Shoulder: '18.5 inches',
        'Sleeve Length': '42 inches',
        Neck: '42 inches',
      },
    },
    {
      type: 'Casual Wear Measurement',
      lastUpdated: 'March 10, 2025',
      data: {
        Chest: '42 inches',
        Waist: '42 inches',
        Hip: '42 inches',
        Shoulder: '18.5 inches',
        'Sleeve Length': '42 inches',
        Neck: '42 inches',
      },
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">My Measurements</h1>
        <button className="bg-[#7B491D] text-white px-4 py-2 rounded-md ml-3.5 md:ml-0">
          Add New Measurements
        </button>
      </div>

      {/* Saved Measurements Section */}
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">Saved Measurement</h2>
        <p className="text-gray-500 text-sm">your body measurement for tailors</p>

        {/* Measurements List */}
        {measurements.map((measurement, index) => (
          <div key={index} className="mt-4 border rounded-md p-4">
            <div className="flex flex-col md:flex-row items-start gap-3 justify-between md:items-center">
              <div>
                <h3 className="text-lg font-semibold">{measurement.type}</h3>
                <p className="text-gray-400 text-sm">
                  Last updated: {measurement.lastUpdated}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="border border-gray-300 px-3 py-1 rounded-md">
                  Edit
                </button>
                <button className="bg-[#7B491D] text-white px-3 py-1 rounded-md">
                  Share
                </button>
              </div>
            </div>

            {/* Measurement Data */}
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
              {Object.entries(measurement.data).map(([key, value]) => (
                <div key={key}>
                  <p className="font-semibold">{key}</p>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Measurements;
