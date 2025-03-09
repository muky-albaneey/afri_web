import Image from 'next/image';

interface ProductCardProps {
  imgSrc: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
}

const ProductSimilarCard = ({ imgSrc, title, price, rating, reviews }: ProductCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-2 shadow-sm">
      <div className="relative w-full h-40">
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-sm font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">(1 yard)</p>
      <div className="flex items-center justify-between mt-1">
        <span className="font-bold">NGN {price}</span>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`h-4 w-4 ${
                index < rating ? 'text-orange-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.75l-6.183 3.247 1.183-6.898L2 9.253l6.908-1.003L12 2l3.092 6.25 6.908 1.003-5 4.846 1.183 6.898z" />
            </svg>
          ))}
          <span className="ml-1 text-sm text-gray-500">({reviews})</span>
        </div>
      </div>
      <button className="mt-2 w-full bg-gray-100 border border-gray-300 py-1 rounded-md hover:bg-gray-200 flex items-center justify-center gap-2">
        <svg
          className="h-5 w-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h18l-1.68 8.39a2 2 0 01-1.97 1.61H7.65a2 2 0 01-1.97-1.61L3 3z" />
          <path d="M7 22h10M5 11h14M9 16v6m6-6v6" />
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductSimilarCard;
