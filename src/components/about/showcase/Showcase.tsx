import Image from 'next/image';

const Showcase = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-2 gap-12 items-center w-full">
        {/* Left section */}
        <div className=''>
          <Image
            src="/blue-outfit.svg" // Replace with your actual image path
            alt="Blue Outfit"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="border border-[#E0E0E0] rounded-t-2xl p-6 w-full">
          <h2 className="text-xl font-bold text-[#5C3A1F] mb-4">
            What we offer
          </h2>
          <p className="text-gray-600">
            Afrigo brings you authentic African fabrics like kente, ankara, and
            mudcloth, crafted into bespoke outfits by skilled tailors. Enjoy a
            seamless shopping experience where you can browse, customize, and
            order easily through our app.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div className="hidden md:grid grid-cols-2 gap-12 items-center mt-12">
      <div className="border border-[#E0E0E0] rounded-t-2xl p-6 w-full">
          <h2 className="text-xl font-bold text-[#5C3A1F] mb-4">
            Why choose afrigo
          </h2>
          <p className="text-gray-600">
            Afrigo offers high-quality, authentic fabrics and designs that reflect
            Africa’s rich craftsmanship and traditions. With full control over the
            design process, you can create custom outfits tailored to your style.
            Every purchase supports local artisans, fostering sustainable
            development and uplifting communities.
          </p>
        </div>
        <div>
          <Image
            src="/green-outfit.svg" // Replace with your actual image path
            alt="Green Outfit"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col items-center gap-6">
        {/* First section */}
        <Image
          src="/blue-outfit.svg" // Replace with your actual image path
          alt="Blue Outfit"
          width={400}
          height={400}
          className="rounded-lg"
        />
        <div className="border border-[#E0E0E0] rounded-t-lg p-6 w-full">
          <h2 className="text-xl font-bold text-[#5C3A1F] mb-4">
            What we offer
          </h2>
          <p className="text-gray-600">
            Afrigo brings you authentic African fabrics like kente, ankara, and
            mudcloth, crafted into bespoke outfits by skilled tailors. Enjoy a
            seamless shopping experience where you can browse, customize, and
            order easily through our app.
          </p>
        </div>

        {/* Second section */}
        <Image
          src="/green-outfit.svg" // Replace with your actual image path
          alt="Green Outfit"
          width={400}
          height={400}
          className="rounded-lg"
        />
        <div className="border border-[#E0E0E0] rounded-t-lg p-6 w-full">
          <h2 className="text-xl font-bold text-[#5C3A1F] mb-4">
            Why choose afrigo
          </h2>
          <p className="text-gray-600">
            Afrigo offers high-quality, authentic fabrics and designs that reflect
            Africa’s rich craftsmanship and traditions. With full control over the
            design process, you can create custom outfits tailored to your style.
            Every purchase supports local artisans, fostering sustainable
            development and uplifting communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
