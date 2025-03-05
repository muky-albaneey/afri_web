import React from "react";

const stats = [
  { value: "570+", label: "Active users" },
  { value: "3.5", label: "Years experience" },
  { value: "40", label: "Investors" },
  { value: "1000+", label: "Positive Reviews" },
];

const Stats = () => {
  return (
    <div className="bg-[#7A492B] flex justify-center items-center  h-auto py-10 px-4">
      <div className="bg-white rounded-xl p-6 sm:p-10 w-full max-w-5xl flex flex-col sm:flex-row justify-between gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#FCF9F7] p-6 rounded-lg text-center flex-1"
          >
            <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
            <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
