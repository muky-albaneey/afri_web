import Image from "next/image";

export default function Ads() {
  return (
    <div className="bg-[#8B572A] text-white h-90 md:h-auto md:py-6 flex flex-col items-center justify-center md:px-4">
      {/* Title */}
      <h1 className="w-full text-2xl md:text-5xl font-bold text-center mt-10">
        Enjoy Seamless Navigation on The Mobile App
      </h1>
      <p className="text-lg md:text-xl text-center mt-2">
        Download on the App Store and Get it on Google Play
      </p>

      {/* Desktop Buttons (Above Images) */}
      <div className="hidden md:flex flex-row gap-4 mt-6">
        <button className="bg-black flex items-center gap-2 px-6 py-2 rounded-md">
          <Image src="/logos_google-play-icon.svg" alt="Google Play" width={20} height={20} />
          Download on Google Play
        </button>
        <button className="bg-black flex items-center gap-2 px-6 py-2 rounded-md">
          <Image src="/apple-store.svg" alt="Apple Store" width={20} height={20} />
          Download on Apple Store
        </button>
      </div>
 {/* Mobile Buttons - Centered Below the Images */}
 <section className="w-full flex justify-center relative mt-5 md:hidden">
  <div className="flex flex-col items-center gap-2 absolute top-2">
    <button className="bg-black flex items-center gap-1 px-3 py-1.5 rounded-md shadow-lg text-[10px]">
      <Image src="/logos_google-play-icon.svg" alt="Google Play" width={14} height={14} />
      Download on Google Play
    </button>
    <button className="bg-black flex items-center gap-1 px-3 py-1.5 rounded-md shadow-lg text-[10px]">
      <Image src="/apple-store.svg" alt="Apple Store" width={14} height={14} />
      Download on Apple Store
    </button>
  </div>
</section>

      {/* Mobile View - Two Tilted Images & Buttons in the Center */}
      <div className="w-full flex flex-col items-end justify-end  md:hidden">
        <div className="w-full flex items-end mt-3.5">
          {/* First Image (Tilted Left) */}
          <div className="w-full flex justify-between items-end">
            <div className="w-35 drop-shadow-lg">
              <Image
                src="/mobile_2.svg"
                alt="Mobile App Screen"
                width={100}
                height={300}
                layout="responsive"
              />
            </div>

            {/* Second Image (Tilted Right) */}
            <div className="w-30 drop-shadow-lg ">
              <Image
                src="/mobile_1.svg"
                alt="Mobile App Screen"
                width={120}
                height={320}
                layout="responsive"
              />
          </div>
          </div>
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
