"use client";
import React, { useState } from "react";

const CustomCollapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md rounded-2xl transition-all duration-300">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 rounded-2xl"
      >
        <span className="ml-2 font-medium text-base sm:text-lg">{label}</span>
        <span className="text-lg sm:text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-4 text-sm sm:text-base">{children}</div>}
    </div>
  );
};

export default function AccordionComponent() {
  const text1 = "We provide customised solutions and services based on the problems and defaults in your business and make you extract the most from it.";
  const text2 = "We provide customised solutions and services based on the problems and defaults in your business and make you extract the most from it.";
  const text3 = "We provide customised solutions and services based on the problems and defaults in your business and make you extract the most from it.";
  const text4 = "We provide customised solutions and services based on the problems and defaults in your business and make you extract the most from it.";

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4 relative z-30">
      
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <CustomCollapse label="How those your operate?">
          <p>{text1}</p>
        </CustomCollapse>
      </div>
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl">
      <CustomCollapse label="How those your operate?">
           <p>{text2}</p>
        </CustomCollapse>
      </div>
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl">
      <CustomCollapse label="How those your operate?">
          <p>{text3}</p>
        </CustomCollapse>
      </div>
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl">
      <CustomCollapse label="How those your operate?">
          <p>{text4}</p>
        </CustomCollapse>
      </div>
    </div>
  );
}
