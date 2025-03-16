"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function ProductDetail() {
  const [selectedFabric, setSelectedFabric] = useState('Premium Wool');
  const [selectedColor, setSelectedColor] = useState('Navy Blue');
  const [selectedStyle, setSelectedStyle] = useState('Classic Fit');
  const [mainImage, setMainImage] = useState('/jacket.svg');

  const fabrics = ['Premium Wool', 'Wool-Cashmere Blend', 'Italian Merino', 'Super 120s'];
  const colors = ['Navy Blue', 'Charcoal Grey', 'Black', 'Dark Brown'];
  const styles = ['Classic Fit', 'Slim Fit', 'Modern Cut'];

  const thumbnails = [
    '/suit.png',
    '/standing_suit.svg',
    '/two_suit.svg',
    '/stand.svg'
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-5 md:p-0">
      {/* Back to profile link */}
      <a href="#" className="text-gray-500 text-sm mb-4 block">
        &larr; Back to tailor profile
      </a>

      {/* Product image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left column: Main image and thumbnails */}
  <div>
    {/* Main image */}
    <Image
      src={mainImage}
      alt="Custom Tailored Suit"
      width={500}
      height={500}
      className="w-full h-auto rounded-lg object-cover"
      priority
    />

    {/* Thumbnails */}
    <div className="flex gap-4 mt-4">
      {thumbnails.map((thumb, index) => (
        <Image
          key={index}
          src={thumb}
          alt={`Suit Thumbnail ${index + 1}`}
          width={96}
          height={96}
          className={`w-20 md:w-24 md:h-24 object-cover rounded-md cursor-pointer ${
            mainImage === thumb ? 'ring-2 ring-[#C5A289]' : ''
          }`}
          onClick={() => setMainImage(thumb)}
        />
      ))}
    </div>
  </div>

  {/* Right column: Product details */}
  <div>
    <span className="inline-block bg-[#C5A289] text-white text-sm px-3 py-1 rounded-md mb-2">
      Suits
    </span>
    <h1 className="text-2xl font-bold mb-2">Custom Tailored Suit</h1>
    <p className="text-xl font-semibold mb-1">$599.99</p>
    <p className="text-gray-500 text-sm mb-2">By Elena Crafts</p>

    {/* Star rating */}
    <div className="flex items-center gap-1 mb-4">
      {renderStars(4.5)}
      <span className="text-gray-500 text-sm">(124 reviews)</span>
    </div>

    {/* Fabric options */}
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-1">Fabric</h3>
      <div className="flex flex-wrap gap-2">
        {fabrics.map((fabric) => (
          <button
            key={fabric}
            onClick={() => setSelectedFabric(fabric)}
            className={`px-3 py-1 border rounded-md text-sm ${
              selectedFabric === fabric
                ? 'bg-[#C5A289] text-white'
                : 'border-gray-300 text-gray-700'
            }`}
          >
            {fabric}
          </button>
        ))}
      </div>
    </div>

    {/* Color options */}
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-1">Color</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`px-3 py-1 border rounded-md text-sm ${
              selectedColor === color
                ? 'bg-[#C5A289] text-white'
                : 'border-gray-300 text-gray-700'
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>

    {/* Style options */}
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-1">Style</h3>
      <div className="flex flex-wrap gap-2">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(style)}
            className={`px-3 py-1 border rounded-md text-sm ${
              selectedStyle === style
                ? 'bg-[#C5A289] text-white'
                : 'border-gray-300 text-gray-700'
            }`}
          >
            {style}
          </button>
        ))}
      </div>
    </div>

    {/* Turnaround time */}
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-1">Turnaround Time</h3>
      <p className="text-gray-500 text-sm">3-4 weeks</p>
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <button className="bg-[#A87442] text-white px-6 py-2 rounded-md shadow-md transition hover:bg-[#8B5E34] w-full">
        Book Consultation
      </button>
      <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md w-full">
        Contact Tailor
      </button>
    </div>
  </div>
</div>


      {/* Description section */}
      <div className="mt-8">
        <button className="w-full bg-[#A87442] text-white py-2 rounded-md mb-2">
          Description
        </button>
        <p className="text-gray-600 text-sm leading-relaxed">
          Premium wool blend custom tailored suit with a perfect fit guarantee.
          Our custom suits are made with the finest materials and crafted to
          your exact measurements for an impeccable fit. Each suit includes a
          jacket and trousers, with options for additional pieces.
        </p>
      </div>
    </div>
  );
}
