"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Product_detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Big");
  const [selectedColor, setSelectedColor] = useState("#FFD700");
  const [selectedImage, setSelectedImage] = useState("/anakara_detail.svg");

  const availableColors = ["#FFD700", "#0000FF", "#FF0000", "#00FF00", "#8B4513", "#000000", "#800080"];
  const availableImages = [
    "/ankara.svg",
    "/ankara.svg",
    "/ankara.svg",
    "/ankara.svg",
  ];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <span>Stores {'>'} House of fashions {'>'} Ankara</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side */}
        <div className="flex flex-row">
          {/* Main Image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt="Ankara Fabric"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Image Thumbnails */}
          <div className="flex flex-col gap-2 h-[400px] overflow-y-auto ">
  {availableImages.map((img, index) => (
    <div
      key={index}
      className={`relative w-19 h-[25%] rounded-lg overflow-hidden border ${
        selectedImage === img ? "border-orange-400" : "border-gray-200"
      } cursor-pointer`}
      onClick={() => setSelectedImage(img)}
    >
      <Image
        src={img}
        alt={`Ankara Fabric ${index + 1}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  ))}
</div>

        </div>

        {/* Right side */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Ankara Fabric</h2>
          <p className="text-gray-600">
            This type of Ankara is made using the traditional wax-resist dyeing method, where both sides of the fabric are equally vibrant.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <span className="ml-2 text-gray-700">4.5</span>
          </div>

          {/* Price */}
          <div className="text-xl font-semibold ">
            NGN 12,000 <span className="text-gray-500">(1 yard)</span>
          </div>

          {/* Size */}
          <div className="">
            <h4 className="text-gray-700 font-medium">Size</h4>
            <div className="flex gap-2">
              {["Small", "Big", "Medium"].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded-md ${
                    size === selectedSize
                      ? "bg-orange-400 text-white"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="">
            <h4 className="text-gray-700 font-medium">Color</h4>
            <div className="flex gap-2">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-5 h-5 rounded-full cursor-pointer border ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <h4 className="text-gray-700 mb-2 font-medium">Quantity</h4>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <FiMinus />
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Stock */}
          <div className="text-sm text-red-500 mb-4">
            Only <strong>12 Items Left!</strong> Don’t miss it
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-lg">
              Buy Now
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden mt-6">
        <h3 className="text-xl font-bold">House of wear limited</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <HiOutlineLocationMarker />
          <span>3b Idumota, Lagos Island, Nigeria</span>
        </div>
        <div className="text-green-500 text-sm">✔️ Available</div>
        <div className="text-gray-500 text-sm">8:00AM – 10:00PM</div>
      </div>
    </div>
  );
};

export default Product_detail;
