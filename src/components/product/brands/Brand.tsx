// pages/index.js
import Image from 'next/image';

export default function Brand() {
  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className=" max-w-6xl w-full px-4 md:px-8 py-10">
        {/* Header Section */}
        <h1 className='font-bold text-3xl text-gray-900'>
            Tops Brands
        </h1>

        {/* Product Sections */}
        <div className="mt-8">
          {['Brands', 'Fashion stylist'].map((category, index) => (
            <div key={index} className="mt-8">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-900">{category}</h3>
                <a href="#" className="text-yellow-600 text-sm font-medium">View All &gt;</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {products.map((product, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="relative w-full h-48">
                      <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <h4 className="text-md font-bold text-[#8B4513] mt-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <p className="text-black font-bold mt-1">$ {product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    name: 'House of fashion',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
    image: '/dress.png',
  },
  {
    name: 'Wear it Now',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
    image: '/shorts.png',
  },
  {
    name: 'Yomi casual',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
    image: '/suit.png',
  },
];
