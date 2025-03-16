import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Wedding Dress Alterations',
    description:
      'Expert alterations for wedding dresses, including hemming, taking in, and bustle.',
    price: '$249.99',
    image: '/dress.png', // Replace with actual image path
    tag: 'Wedding',
  },
  {
    id: 2,
    title: 'Formal Evening Gown',
    description:
      'Made-to-measure evening gown in your choice of fabric and design.',
    price: '$399.99',
    image: '/images/evening-gown.jpg', // Replace with actual image path
    tag: 'Formal',
  },
];

const RelatedProducts = () => {
  return (
    <div className="px-4 md:px-24 py-8 md:m-auto">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="w-full flex flex-col md:flex-row gap-3 overflow-hidden">
      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden"> */}
  {products.map((product) => (
    <div key={product.id} className="w-full md:w-[20%] border rounded-xl overflow-hidden shadow-sm m-0">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-[#8B4513] text-white text-xs px-2 py-1 rounded-full">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="text-lg font-semibold mt-2">{product.price}</p>
        <button className="mt-4 w-full bg-brown-700 text-white py-2 rounded-md hover:bg-brown-800 transition">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default RelatedProducts;
