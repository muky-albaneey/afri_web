// components/HeroSection.tsx
import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="/hero.svg" // Make sure to place the image in the public/images folder
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-3.5">
        <button className="w-[35%] md:w-[15%] bg-[#8B5E3C] text-white px-6 py-2 rounded-md hover:bg-[#71492F] transition">
          About us
        </button>
        <button className="w-[35%] md:w-[15%] border border-white text-white text-[.7rem] px-6 py-2 rounded-md hover:bg-white hover:text-[#8B5E3C] transition">
          Download app
        </button>
      </div>
    </div>
  );
};

export default AboutHeroSection;
