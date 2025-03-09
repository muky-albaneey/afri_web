"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      {/* Left Side */}
      <div className="bg-white p-6 border rounded-lg shadow-md md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-4">
          Stay updated with the latest news and exclusive offers. Subscribe now to not miss out!
        </p>

        {/* Email Input */}
      <label htmlFor="email" className="block text-sm font-medium text-#050505]">
          Email
        </label>
        <div className="relative mt-2">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#050505]" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
        </div>

        {/* Subscribe Button */}
        <button className="w-full mt-4 bg-[#8B4513] text-white py-2 rounded-lg hover:bg-[#8B4513] transition">
          Subscribe
        </button>
      </div>

      {/* Right Side (Placeholder for Image) */}
      <div className="w-full md:w-1/2 md:ml-6 mt-2">
        <div className="w-full h-40 md:h-64 bg-[#050505]"></div>
      </div>
    </section>
  );
};

export default Newsletter;
