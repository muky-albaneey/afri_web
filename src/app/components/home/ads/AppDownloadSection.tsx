import Image from "next/image";

const AppDownloadSection = () => {
  return (
    <div className="bg-[#8B4513] md:py-12 md:px-8 lg:px-16 text-white relative">
     <div className="w-full md:hidden">
     <h1 className="text-2xl md:text-5xl font-bold text-center">
        Enjoy Seamless Navigation on The Mobile App
      </h1>
      <p className="text-lg md:text-xl text-center mt-2">
        Download on the App Store and Get it on Google Play
      </p>
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
       
     </div>
     <div className="w-full hidden md:flex flex-col absolute top-40">
     <h1 className="md:text-2xl font-bold text-center">
        Enjoy Seamless Navigation on The Mobile App
      </h1>
      <p className="text-lg md:text-xl text-center mt-2">
        Download on the App Store and Get it on Google Play
      </p>
       {/* Mobile Buttons - Centered Below the Images */}
              <section className="w-full flex justify-center relative mt-8">
              <div className="flex flex-col items-center gap-3 absolute top-3.5">
                        <button className="bg-black flex items-center gap-2  py-2 rounded-md shadow-lg text-xm">
                          <Image src="/logos_google-play-icon.svg" alt="Google Play" width={50} height={40} />
                          Download on Google Play
                        </button>
                        <button className="bg-black flex items-center gap-2 py-2 rounded-md shadow-lg text-xm">
                          <Image src="/apple-store.svg" alt="Apple Store" width={50} height={40} />
                          Download on Apple Store
                        </button>
                      </div>
              </section>
            </div>
            {/* Mobile View - Two Tilted Images & Buttons in the Center */}
            <div className="w-full flex flex-col items-end justify-end  md:hidden">
              <div className="w-full flex items-end j">
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
            <div className="w-full hidden md:flex flex-col items-center justify-center mt-8">
                <div className="w-full flex justify-between items-end space-x-8">
                    {/* First Image (Tilted Left) */}
                    <div className="w-[45%] max-w-[300px] md:max-w-[400px] lg:max-w-[500px] drop-shadow-lg transform -rotate-6">
                    <Image
                        src="/mobile_2.svg"
                        alt="Mobile App Screen"
                        width={500}
                        height={600}
                        layout="responsive"
                    />
                    </div>

                    {/* Second Image (Tilted Right) */}
                    <div className="w-[40%] max-w-[250px] md:max-w-[350px] lg:max-w-[450px] drop-shadow-lg transform rotate-6">
                    <Image
                        src="/mobile_1.svg"
                        alt="Mobile App Screen"
                        width={500}
                        height={600}
                        layout="responsive"
                    />
                    </div>
                </div>
                </div>

    </div>
  );
};

export default AppDownloadSection;
