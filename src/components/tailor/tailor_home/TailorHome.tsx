"use client";
import { TbCurrencyNaira } from "react-icons/tb"; 
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai"; 
import { CiLocationOn } from "react-icons/ci"; 

const initialProducts = [
  {
    id: 1,
    imageSrc: "/tailor1.svg",
    title: "Bena Crafts",
    description: "Mastering embroidery and threadwork with over 10 years of experience. Bookings always available.",
    rating: 4.5,
    location: "Lagos",
    specialization: ["Embroidery"],
    price: 200, // ✅ Add price
  },
  {
    id: 2,
    imageSrc: "/shorts.png",
    title: "Urban Perfect",
    description:
      "Expert in denim tailoring and alterations. Bespoke designs are also available.",
    rating: 4.8,
    location: "Abuja",
    specialization: ["Denim"],
    price: 350, // ✅ Add price
  },
  {
    id: 3,
    imageSrc: "/tailor2.svg",
    title: "Marvels Designs",
    description:
      "Contemporary casual and chic professional styles. Book appointments online and in person.",
    rating: 4.0,
    location: "Port Harcourt",
    specialization: ["Suits", "Wedding Dresses"],
    price: 150, // ✅ Add price
  },
];



const FilterSidebar = ({ onFilter, onReset }: { onFilter: (filters: any) => void; onReset: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState(500);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onFilter({ selectedLocation, selectedSpecialization, selectedRating, priceRange });
  }, [selectedLocation, selectedSpecialization, selectedRating, priceRange]);

  const handleReset = () => {
    setSelectedLocation([]);
    setSelectedSpecialization([]);
    setSelectedRating(null);
    setPriceRange(500);
    onReset();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[7rem] text-[#8B4513] py-2 px-4 flex justify-between items-center rounded-md font-semibold border-0 border-gray-300"
        >
          Filters
          <IoChevronDownCircleOutline
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-74 right-20 z-50 w-[18rem] bg-white shadow-lg rounded-lg p-4 border border-gray-200 md:hidden"
        >
          {/* Same content as the desktop sidebar */}
          <SidebarContent
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedSpecialization={selectedSpecialization}
            setSelectedSpecialization={setSelectedSpecialization}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            handleReset={handleReset}
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[18rem] bg-white shadow-md rounded-lg p-4 border border-gray-200">
        <SidebarContent
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedSpecialization={selectedSpecialization}
          setSelectedSpecialization={setSelectedSpecialization}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          handleReset={handleReset}
        />
      </div>
    </>
  );
};

const SidebarContent = ({
  selectedLocation,
  setSelectedLocation,
  selectedSpecialization,
  setSelectedSpecialization,
  selectedRating,
  setSelectedRating,
  priceRange,
  setPriceRange,
  handleReset,
}: any) => {
  return (
    <>
      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="mb-4 bg-gray-100 hover:bg-gray-200 text-gray-700 w-full py-2 rounded-md"
      >
        Reset Filters
      </button>

      {/* Location */}
      <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
      {["Lagos", "Abuja", "Port Harcourt", "Kaduna", "Ibadan"].map((location) => (
        <div key={location} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedLocation.includes(location)}
            onChange={() => {
              setSelectedLocation((prev) =>
                prev.includes(location) ? prev.filter((loc) => loc !== location) : [...prev, location]
              );
            }}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
      ))}

      <hr className="my-2" />

      {/* Specialization */}
      <h3 className="font-semibold text-gray-700 mb-2">Specialization</h3>
      {["Embroidery", "Denim", "Suits", "Wedding Dresses"].map((spec) => (
        <div key={spec} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedSpecialization.includes(spec)}
            onChange={() => {
              setSelectedSpecialization((prev) =>
                prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
              );
            }}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">{spec}</span>
        </div>
      ))}

      <hr className="my-2" />

      {/* Rating */}
      <h3 className="font-semibold text-gray-700 mb-2">Rating</h3>
      {[5, 4, 3, 2, 1].map((rating) => (
        <div key={rating} className="flex items-center mb-2">
          <input
            type="radio"
            name="rating"
            value={rating}
            checked={selectedRating === rating}
            onChange={() => setSelectedRating(rating)}
            className="mr-2"
          />
          {Array.from({ length: 5 }).map((_, i) =>
            i < rating ? (
              <AiFillStar key={i} className="text-yellow-500" />
            ) : (
              <AiOutlineStar key={i} className="text-gray-300" />
            )
          )}
          <span className="text-sm text-gray-600 ml-2">{rating} stars & up</span>
        </div>
      ))}

      <hr className="my-2" />

      {/* Price Range */}
      <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
      <input
            type="range"
            min="0"
            max="500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="
              w-full h-2 bg-red-900 rounded-lg 
              appearance-none 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:h-5 
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:cursor-pointer 
              [&::-webkit-slider-thumb]:shadow-md 
              [&::-moz-range-thumb]:w-5 
              [&::-moz-range-thumb]:h-5 
              [&::-moz-range-thumb]:bg-white
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:cursor-pointer 
              [&::-moz-range-thumb]:shadow-md
            "
          />

      <div className="text-sm text-gray-600 mt-1 w-full flex justify-between">
        <span><TbCurrencyNaira /> 0</span>
        <span><TbCurrencyNaira /> {priceRange}</span>
      </div>
    </>
  );
};

const options = [
  'Highest Rating',
  'Lowest Rating',
  'Alphabetical (A-Z)',
  'Alphabetical (Z-A)',
];

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
}
function CustomDropdown({ value, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-100 rounded-sm py-2 px-3 text-sm bg-[#fff] cursor-pointer"
      >
        {value}
      </div>
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-100 rounded-sm shadow-md z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="py-2 px-3 text-sm cursor-pointer hover:bg-[#C5A289] hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const TailorListing = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState("Highest Rating");
  const [searchQuery, setSearchQuery] = useState("");
  // const [products, setProducts] = useState(initialProducts);

  const handleFilter = (filters: any) => {
    let filtered = initialProducts;
  
    if (filters.selectedLocation.length) {
      filtered = filtered.filter((product) =>
        filters.selectedLocation.includes(product.location)
      );
    }
  
    if (filters.selectedSpecialization.length) {
      filtered = filtered.filter((product) =>
        product.specialization.some((spec) =>
          filters.selectedSpecialization.includes(spec)
        )
      );
    }
    
  
    // Fix: Directly compare rating without Math.floor
    if (filters.selectedRating !== null && filters.selectedRating !== undefined) {
      filtered = filtered.filter(
        (product) =>
          product.rating !== null &&
          product.rating !== undefined &&
          product.rating >= filters.selectedRating
      );
    }
  
    // ✅ Remove this if no price field exists in initialProducts
    // filtered = filtered.filter((product) => product.price <= filters.priceRange);
    if (filters.priceRange) {
      filtered = filtered.filter((product) => product.price <= filters.priceRange);
    }
    
    setProducts(filtered);
  };
  

  useEffect(() => {
    const filtered = initialProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  }, [searchQuery]);
  
  // Handle Reset Filters
  const handleReset = () => {
    setProducts(initialProducts);
    setSortBy("Highest Rating");
  };

  // Handle Sorting
  // const handleSort = (value: string) => {
  //   setSortBy(value);
  //   const sortedProducts = [...products];
  //   if (value === "Highest Rating") {
  //     sortedProducts.sort((a, b) => b.rating - a.rating);
  //   } else if (value === "Lowest Rating") {
  //     sortedProducts.sort((a, b) => a.rating - b.rating);
  //   }
  //   setProducts(sortedProducts);
  // };
  const handleSort = (value: string) => {
    setSortBy(value);
    const sortedProducts = [...products];

    if (value === "Highest Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (value === "Lowest Rating") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (value === "Alphabetical (A-Z)") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "Alphabetical (Z-A)") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="md:text-left text-center font-bold text-2xl">Find Tailors</h1>
      <p className="md:text-left text-center text-sm">Browse and filter tailors based on your preferences</p>
      {/* Search and Sort Bar */}
      <div className="flex flex-col justify-between items-center mb-6 gap-4">
        {/* Search Bar */}
        <div className="relative flex flex-col md:flex-row items-center w-full md:w-3/4 gap-2">
  <div className="relative w-full">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
       <AiOutlineSearch /> {/* You can replace this with an actual icon from your icon library */}
    </span>
    <input
        type="text"
        placeholder="Search by name, location, or specialty..."
        className="border-[0] rounded-md py-2 pl-10 pr-3 w-full text-sm bg-gray-100 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
  </div>
      <button className="bg-[#8B4513] text-white px-4 py-2  rounded-md text-sm font-medium w-[70%] md:w-[15rem]">
          Search
      </button>
    </div>

          <div className="w-full flex  items-center justify-between p-5">
          <h1 className="hidden md:block">Filters</h1>
          <div className="flex items-center gap-4 md:mr-80">
            {/* Reset Button (Moved to Top) */}
          <button
            onClick={()=>{}}
            className="bg-white hover:bg-gray-300 md:block hidden"
          >
            Reset Filters
          </button>
          <div className="text-sm text-gray-600">
              Showing {products.length} {products.length === 1 ? "result" : "results"}
          </div>
          </div>
        {/* Sort Dropdown */}
        <div className="flex justify-center items-center gap-2 
    absolute top-[300px] right-3 md:static z-10 pointer-events-auto">

          <h6>Sort by</h6>
          <CustomDropdown value={sortBy} onChange={handleSort} />
         {/* <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-100 rounded-sm py-2 px-3 text-sm outline-none md:mt-0 mt-1 bg-[#C5A289] text-white appearance-none"
          >
            <option className="bg-[#C5A289]">Highest Rating</option>
            <option className="bg-[#C5A289]">Lowest Rating</option>
            <option className="bg-[#C5A289]">Alphabetical (A-Z)</option>
            <option className="bg-[#C5A289]">Alphabetical (Z-A)</option>
          </select> */}

        </div>
          </div>
      </div>

      {/* Length of Items */}
     

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
  
        <FilterSidebar onFilter={handleFilter} onReset={() => setProducts(initialProducts)} />
        {/* Product Cards */}
        <div className="flex-1 flex flex-col gap-6">
  {products.map((product) => (
    <div
      key={product.id}
      className="flex flex-col md:flex-row border-[0] rounded-lg shadow-sm hover:shadow-md transition duration-300"
    >
      {/* Product Image */}
      <div className="relative md:w-[30%] w-full h-40">
        <Image
          src={product.imageSrc}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className=" text-gray-800 text-lg mb-1 flex gap-2 items-center">
          <span className="font-bold">{product.title}</span>
          <span className="font-semibold text-sm">
            ⭐ {product.rating}
          </span>
          <span className="font-semibold text-sm">(124 reviews)</span>
        </h3>
        <p className="text-sm text-gray-500 mb-2 flex gap-2 items-center"><CiLocationOn />{product.location}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.specialization.map((specialization, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="px-0.5 py-0.5  text-[10px] shadow-sm rounded-lg bg-gray-100">{specialization}</div>
            </div>
        ))}
      </div>

        <button className="bg-[#ffffff] py-1 px-1 rounded-lg text-sm shadow-sm border-[0.1px] border-[#808080] mt-3 text-[#8B4513]">
            Contact me
          </button>
      </div>
      <section className="md:w-[30%] w-full flex flex-row md:flex-col px-2 md:items-end justify-center">
        <button className="bg-[#8B4513] text-white py-2 px-1 rounded-lg text-sm shadow-sm md:mb-3 w-[90%] md:w-[70%]">
            View Profile
          </button>
          <button className="bg-[#ffffff] py-2 px-1 rounded-lg text-sm shadow-sm md:w-[70%] w-[90%]">
            View Profile
          </button>
      </section>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default TailorListing;
