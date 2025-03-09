import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({ imageSrc, title, description, price }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-gray-900 font-semibold">{price}</span>
          <button className="text-red-400">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
