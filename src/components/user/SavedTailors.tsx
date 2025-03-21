import Image from 'next/image';
import React from 'react';

const tailors = [
  {
    id: 1,
    name: 'Elena Crafts',
    rating: 4.9,
    reviews: 124,
    location: 'New York, NY',
    tags: ['Wedding', 'Formal'],
    image: '/placeholder.png',
  },
  {
    id: 2,
    name: 'Marcus Designs',
    rating: 4.7,
    reviews: 98,
    location: 'Los Angeles, CA',
    tags: ['Casual', 'Alterations'],
    image: '/placeholder.png',
  },
  {
    id: 3,
    name: 'Stitch Perfect',
    rating: 4.8,
    reviews: 156,
    location: 'Chicago, IL',
    tags: ['Suits', 'Dresses'],
    image: '/placeholder.png',
  },
];

const SavedTailors = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-3x">
      <h2 className="text-xl font-semibold mb-2">Saved Tailors</h2>
      <p className="text-gray-500 mb-4">Tailors you've favorited</p>

      {tailors.map((tailor) => (
        <div
          key={tailor.id}
          className="flex items-start p-4 bg-white shadow-sm rounded-lg border mb-4"
        >
          {/* Image */}
          <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
            <Image
              src={tailor.image}
              alt={tailor.name}
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{tailor.name}</h3>
                <div className="flex items-center">
                  {/* Stars */}
                  <div className="text-yellow-400 mr-1">
                    {'★'.repeat(Math.floor(tailor.rating))}
                    {'☆'.repeat(5 - Math.floor(tailor.rating))}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {tailor.rating} ({tailor.reviews})
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{tailor.location}</p>
              </div>
              {/* Heart */}
              <button>
                ❤️
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tailor.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-gray-600 text-xs bg-gray-100 rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-3 flex gap-2 flex-col md:flex-row">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-md">
                View Profile
              </button>
              <button className="px-4 py-2 text-sm bg-[#8B4513] text-white rounded-md">
                Share Measurements
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Footer Button */}
      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-sm">
          View All Saved Tailors
        </button>
      </div>
    </div>
  );
};

export default SavedTailors;
