import Image from 'next/image';

const OrderConfirmation = () => {
  return (
    <div className="bg-white text-black">
      <div className="max-w-5xl mx-auto p-4">
        {/* Header */}
        <h1 className="text-xl md:text-2xl font-semibold text-center mt-4">
          Order Number <span className="font-bold">345809</span> has been confirmed.
        </h1>

        {/* Status Bar */}
        <div className="bg-[#8B4513] p-2 mt-4">
  <div className="bg-white p-4 rounded-md flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
    {/* Order Confirmed */}
    <div className="flex flex-col items-center md:items-start space-y-1">
      <div className="flex items-center">
        <div className="w-5 h-5 border-2 border-[#8B4513] rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-[#8B4513] rounded-full"></div>
        </div>
        <div className="w-36 md:w-32 h-1 bg-[#c6a58f] ml-2"></div>
      </div>
      <p className="text-sm text-black">Order Confirmed</p>
    </div>

    {/* Order Processing */}
    <div className="flex flex-col items-center md:items-start space-y-1">
      <div className="flex items-center">
        <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
        <div className="w-36 md:w-32 h-1 bg-gray-300 ml-2"></div>
      </div>
      <p className="text-sm text-gray-500">Order Processing</p>
    </div>

    {/* Order Shipped */}
    <div className="flex flex-col items-center md:items-start space-y-1">
      <div className="flex items-center">
        <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
        <div className="w-36 md:w-32 h-1 bg-gray-300 ml-2"></div>
      </div>
      <p className="text-sm text-gray-500">Order Shipped</p>
    </div>

    {/* Order Delivered */}
    <div className="flex flex-col items-center md:items-start space-y-1">
    <div className="flex items-center">
        <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
        <div className="w-36 md:w-32 h-1 bg-gray-300 ml-2 md:hidden"></div>
      </div>
      <p className="text-sm text-gray-500">Order Delivered</p>
    </div>
  </div>
</div>


        {/* Order Confirmation Info */}
        <div className="mt-4 ">
          <p>Your order has been successfully confirmed by <span className="font-semibold">David Ojo</span> and is now being processed.</p>
          <div className="mt-2 flex justify-between gap-10 text-sm">
            <div>
              <p className="text-gray-500">Placed on:</p>
              <p className="font-semibold">12th November, 2024</p>
            </div>
            <div>
              <p className="text-gray-500">Estimated Time of Arrival:</p>
              <p className="font-semibold">20th November to 22nd November, 2024</p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-6">
          <div className="bg-[#8B4513] text-white text-center py-2 font-semibold">
            Order Details
          </div>
          <div className="p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">    
            <div className="md:w-56 h-32">
              <Image
                src="/ankara.svg" // Replace with actual image path
                alt="Radiant Ankara Fabric"
                width={400}
                height={400}
                className="object-cover rounded-md"
              />
            </div>
            <div className='mt-28 md:mt-0'>
              <h2 className="font-semibold text-[#8B4513]">
                Radiant Ankara Fabric
              </h2>
              <p className="text-sm text-gray-500">
                Radiant fabrics, with neat stitches of multi hemming for casual wear
              </p>
              <p className="text-sm mt-2">
                <span className="font-semibold">Qty:</span> 3 yards
              </p>
              <p className="text-sm">
                <span className="font-semibold">Price:</span> $100
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="mt-6">
          <div className="bg-[#8B4513] text-white text-center py-2 font-semibold">
            Shipping Information
          </div>
          <div className="md:w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Sender Address */}
            <div className="md:w-96 border border-[#8B4513] p-4 rounded-md h-44">
              <h3 className="font-semibold border-b border-[#050505] py-3">David Ojo's Shipping Address</h3>
              <p className="text-sm text-gray-500 text-[1rem] md:text-[1.5rem] mt-2">
                No 23, Suite 10, Gwarinpa Plaza, Abuja
              </p>
            </div>
            {/* Receiver Address */}
            <div className="md:w-96 border border-[#8B4513] p-4 rounded-md">
              <h3 className="font-semibold border-b border-[#050505] py-3">Your Shipping Address</h3>
              <p className="text-[1rem] md:text-[1.5rem] text-gray-500 mt-2">
                No 23, Suite 10, Gwarinpa Plaza, Abuja
              </p>
            </div>
          </div>
        </div>

        {/* Track Order Button */}
        <div className="text-center mt-4">
          <button className="bg-[#8B4513] text-white py-2 px-6 rounded-md hover:bg-[#4e2c0d] transition">
            Track Order
          </button>
        </div>

        {/* Help Section */}
        <div className="text-center mt-4">
          <p className="text-[#8B4513] font-semibold cursor-pointer">
            NEED HELP?
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
