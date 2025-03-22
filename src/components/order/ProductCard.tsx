import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Image src={image} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#854d0e] mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-black font-semibold">${price}</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-400 hover:text-red-500 transition"
            >
              <path d="M12 21l-1-1c-5-5-8-8-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3-3 6-8 11z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
