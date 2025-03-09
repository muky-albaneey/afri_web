"use client";
import React from "react";

export default function WelcomeSection() {
  return (
    <div className="flex items-center justify-end h-auto py-10 px-4 md:px-14 bg-white">
      <div className="w-full max-w-sm text-justify">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Welcome to Afrigora
        </h1>
        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
          Afrigora is a vibrant e-commerce platform dedicated to empowering shop
          owners and tailors across Africa. Our mission is to provide an
          engaging marketplace where creativity meets commerce, enabling
          artisans to showcase their unique products and services. We are
          committed to fostering innovation, supporting local businesses, and
          enhancing customer experiences through cutting-edge technology and a
          community-driven approach.
        </p>
        <div className="mt-6 flex md:justify-start justify-center">
          <button className="bg-[#8B4513] text-white px-16 py-2 rounded-md text-sm md:text-base">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
