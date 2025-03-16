import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    category: string;
    imageUrl: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <div className="flex justify-between items-start flex-col mt-4">
          <span className="font-bold text-lg">${product.price}</span>
          <button className="w-full bg-[#8B4513] text-white px-4 py-2 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
