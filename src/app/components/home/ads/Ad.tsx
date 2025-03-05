import Image from "next/image";

export default function Ads() {
  return (
    <div className="bg-[#8B572A] text-white h-90 md:h-auto py-6 flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Enjoy Seamless Navigation on The Mobile App
      </h1>
      <p className="text-lg md:text-xl text-center mt-2">
        Download on the App Store and Get it on Google Play
      </p>

      {/* Desktop Buttons (Above Images) */}
      <div className="hidden md:flex flex-row gap-4 mt-6">
        <button className="bg-black flex items-center gap-2 px-6 py-2 rounded-md">
          <Image src="/google-play.png" alt="Google Play" width={20} height={20} />
          Download on Google Play
        </button>
        <button className="bg-black flex items-center gap-2 px-6 py-2 rounded-md">
          <Image src="/apple-store.png" alt="Apple Store" width={20} height={20} />
          Download on Apple Store
        </button>
      </div>

      {/* Mobile View - Two Tilted Images & Buttons in the Center */}
      <div className="relative flex flex-col items-center mt-10 md:hidden">
        <div className="flex gap-x-10 justify-center relative">
          {/* First Image (Tilted Left) */}
          <div className="w-35 drop-shadow-lg transform  absolute -top-6 -left-50">
            <Image
              src="/mobile_2.svg"
              alt="Mobile App Screen"
              width={200}
              height={400}
              layout="responsive"
            />
          </div>

          {/* Second Image (Tilted Right) */}
          <div className="w-30 drop-shadow-lg transform absolute -top-3  -right-49">
            <Image
              src="/mobile_1.svg"
              alt="Mobile App Screen"
              width={200}
              height={400}
              layout="responsive"
            />
          </div>
        </div>

        {/* Mobile Buttons - Centered Below the Images */}
        <div className="flex flex-col items-center gap-3 ">
          <button className="bg-black flex items-center gap-2  py-2 rounded-md shadow-lg text-xs">
            <Image src="/google-play.png" alt="Google Play" width={10} height={10} />
            Download on Google Play
          </button>
          <button className="bg-black flex items-center gap-2 py-2 rounded-md shadow-lg text-xs">
            <Image src="/apple-store.png" alt="Apple Store" width={10} height={10} />
            Download on Apple Store
          </button>
        </div>
      </div>

      {/* Desktop View - Multiple Images in a Row */}
      <div className="hidden md:flex mt-10 gap-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative w-32 md:w-40 lg:w-48">
            <Image
              src="/mobile-screen.svg"
              alt="Mobile App Screen"
              layout="responsive"
              width={100}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
