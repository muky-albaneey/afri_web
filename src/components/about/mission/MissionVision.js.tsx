import React from "react";

const MissionVision = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Our Mission */}
        <div>
          <h3 className="text-xl font-semibold text-[#8B572A] mb-2">Our <span className="font-bold">Mission</span></h3>
          <h2 className="text-3xl font-bold mb-4">Empowering Artisans,<br /> Celebrating Heritage</h2>
          <p className="text-gray-600 leading-relaxed">
            Afrigo is more than just an app—it’s a movement to empower African artisans and celebrate Africa’s rich cultural heritage. 
            By connecting global buyers directly with African designers and tailors, we aim to support local businesses and artisans 
            across Africa, make African fashion accessible to everyone, anywhere in the world, celebrate diversity and encourage the 
            world to embrace African style.
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <h3 className="text-xl font-semibold text-[#8B572A] mb-2">Our <span className="font-bold">Vision</span></h3>
          <h2 className="text-3xl font-bold mb-4">Bridging Cultures<br /> Through Fashion</h2>
          <p className="text-gray-600 leading-relaxed">
            Afrigo envisions a world where African fashion and materials are celebrated on every runway, wardrobe, and occasion. 
            We aim to build bridges through fashion, connecting people, cultures, and stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
