"use client";import { useState } from 'react';
import ProductCard from './TailorProductCard';

const products = [
  {
    id: 1,
    title: 'Custom Tailored Suit',
    description: 'Premium wool blend custom tailored suit with perfect fit guarantee.',
    price: '599.99',
    category: 'Suits',
    imageUrl: '/suits.svg',
  },
  {
    id: 2,
    title: 'Wedding Dress Alterations',
    description: 'Expert alterations for wedding dresses, including hemming, taking in, and bustle.',
    price: '249.99',
    category: 'Wedding',
    imageUrl: '/images/wedding-dress.jpg',
  },
  {
    id: 3,
    title: 'Formal Evening Gown',
    description: 'Made-to-measure evening gown in your choice of fabric and design.',
    price: '399.99',
    category: 'Formal',
    imageUrl: '/dress.png',
  },
  {
    id: 4,
    title: 'Custom Tailored Suit',
    description: 'Premium wool blend custom tailored suit with perfect fit guarantee.',
    price: '599.99',
    category: 'Suits',
    imageUrl: '/suit.png',
  },
  {
    id: 5,
    title: 'Wedding Dress Alterations',
    description: 'Expert alterations for wedding dresses, including hemming, taking in, and bustle.',
    price: '249.99',
    category: 'Wedding',
    imageUrl: '/images/wedding-dress.jpg',
  },
  {
    id: 6,
    title: 'Formal Evening Gown',
    description: 'Made-to-measure evening gown in your choice of fabric and design.',
    price: '399.99',
    category: 'Formal',
    imageUrl: '/senator-wear.svg',
  },
];

const options = [
  'Highest Rating',
  'Lowest Rating',
  'Alphabetical (A-Z)',
  'Alphabetical (Z-A)',
];

const filters = ['All Products', 'Wedding', 'Formal', 'Suits', 'Alterations'];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('Highest Rating');
  const [selectedFilter, setSelectedFilter] = useState('All Products');

  // Filter products based on the selected filter
  const filteredProducts = selectedFilter === 'All Products'
    ? products
    : products.filter((product) => product.category === selectedFilter);

  // Sort the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Highest Rating') return parseFloat(b.price) - parseFloat(a.price);
    if (sortBy === 'Lowest Rating') return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === 'Alphabetical (A-Z)') return a.title.localeCompare(b.title);
    if (sortBy === 'Alphabetical (Z-A)') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <a href="#" className="text-gray-500 text-sm">&larr; Back to tailor profile</a>
        <h1 className="text-2xl font-bold mt-2">Elena Crafts's Products</h1>
        <p className="text-gray-500">Browse all products and services offered by this tailor</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`border border-gray-300 text-sm px-4 py-2 rounded-md ${
              selectedFilter === filter
                ? 'bg-[#C5A289] text-white'
                : 'bg-gray-100'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Sorting Section */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-500">
          Showing {filteredProducts.length} products
        </span>
        <CustomDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

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
        className="border border-gray-100 rounded-sm py-2 px-3 text-sm bg-[#C5A289] text-white cursor-pointer"
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
