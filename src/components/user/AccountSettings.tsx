import React from 'react';

const AccountSettings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      {/* Personal Information */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-1">Personal information</h2>
        <p className="text-gray-500 text-sm mb-4">Update your account details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Alex Johnson"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="AlexJohnson@gmail.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            type="text"
            placeholder="+234 3495 9594 34"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>

        {/* Address */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            rows={3}
            placeholder="No.2 maitama comlex. abuka"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
          ></textarea>
        </div>

        <button className="mt-6 bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-brown-700 transition duration-200">
          Save changes
        </button>
      </div>

      {/* Password */}
      <div className="w-full md:w-[40%] bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-1">Password</h2>
        <p className="text-gray-500 text-sm mb-4">Update your password</p>

        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            placeholder="Alex Johnson"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>

        {/* New Password */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="Alex Johnson"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Alex Johnson"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>

        <button className="mt-6 bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-brown-700 transition duration-200">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
