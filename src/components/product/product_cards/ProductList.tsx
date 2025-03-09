"use client"
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
// import { ChevronDown, Filter } from 'lucide-react'; // Install lucide-react if needed

const products = [
  {
    imageSrc: '/armless-wedding-gown.svg',
    title: 'Armless Wedding Gown',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/shorts.png',
    title: 'Casual Jean',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Ghana',
    store:'Viva Store'
  },
  {
    imageSrc: '/suit.png',
    title: 'Marque Uniform',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Kenya',
    store:'Viva Store'
  },
  {
    imageSrc: '/brown-cardigan.svg',
    title: 'Brown Cardigan',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/ankara.svg',
    title: 'Ankara',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/senator-wear.svg',
    title: 'Senator Wear',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/green-ankara.svg',
    title: 'Green Ankara',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/native-designer-caps.svg',
    title: 'Native Designer Caps',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Ghana',
    store:'Viva Store'
  },
  {
    imageSrc: '/fabrics.svg',
    title: 'Senator Wear',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Muky Store'
  },
  {
    imageSrc: '/ankara.svg',
    title: 'Ankara',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/senator-wear.svg',
    title: 'Senator Wear',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/armless-wedding-gown.svg',
    title: 'Armless Wedding Gown',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Viva Store'
  },
  {
    imageSrc: '/shorts.png',
    title: 'Casual Jean',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Ghana',
    store:'Viva Store'
  },
  {
    imageSrc: '/native-designer-caps.svg',
    title: 'Native Designer Caps',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Ghana',
    store:'Viva Store'
  },
  {
    imageSrc: '/fabrics.svg',
    title: 'Senator Wear',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '$100',
    country: 'Nigeria',
    store:'Muky Store'
  },
];


const ProductList = () => {
  const [selectedStore, setSelectedStore] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const stores = [...new Set(products.map(product => product.store))];
  const countries = [...new Set(products.map(product => product.country))];

  const filteredProducts = products.filter(product => 
    (selectedStore === '' || product.store === selectedStore) &&
    (selectedCountry === '' || product.country === selectedCountry)
  );

  return (
    <div className="container mx-auto p-4">
      {/* Filter Section */}
      <div className="flex justify-between flex-col-reverse md:flex-row items-center mb-4 gap-7 md:gap-2">
        <div className="flex gap-7 md:gap-4 items-center bg-[#C5A2891A] p-2 rounded-md flex-col md:flex-row">
          {/* Store Filter */}
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Categories:</span>
            <select
              className="bg-transparent border-none outline-none font-semibold cursor-pointer"
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
            >
              <option value="">Stores</option>
              {stores.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
            </select>
            <BiChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Country Filter */}
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Sort by:</span>
            <select
              className="bg-transparent border-none outline-none font-semibold cursor-pointer"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <BiChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-1">
            <FiFilter className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 font-semibold">Filter</span>
            <BiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Pagination Info */}
        <div className="text-gray-500 text-sm">
          Showing 1–{filteredProducts.length} of {products.length} Stores
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className=" rounded-lg p-4">
            <img src={product.imageSrc} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-bold text-[#8B4513]">{product.title}</h2>
            <p className="text-[#000000]">{product.description}</p>
            <p className="text-[#000000] font-semibold">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Product List of only first 1 to 10*/}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {filteredProducts.slice(0, 10).map((product, index) => (
    <div key={index} className="border rounded-lg p-4">
      <img src={product.imageSrc} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-black font-semibold">{product.price}</p>
    </div>
  ))}
</div> */}

    </div>
  );
};

export default ProductList;
