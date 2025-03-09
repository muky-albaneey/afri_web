import { FaSmile, FaChartLine, FaBalanceScale } from 'react-icons/fa';

const CultureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-lg font-medium text-[#8B572A] uppercase tracking-wide">Our</h2>
        <h1 className="text-2xl font-bold text-[#8B572A] uppercase tracking-wide">
          <span className="border-b-2 border-[#8B572A] pb-1">Culture</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center md:bg-[#F9F6F2] rounded-lg md:py-5">
        {/* Column 1 */}
        <div className="flex-1 px-8 py-8">
          <div className="flex items-start gap-4">
            <div className="bg-[#D7B49D] p-2 rounded">
              <FaSmile className="text-[#8B572A] text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Showcasing African Culture</h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li>+ Pride in craftsmanship</li>
                <li>+ Style and self expression</li>
                <li>+ Celebrating diversity</li>
                <li>+ Personalized services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider for Desktop ONLY */}
        <div className="hidden md:block w-px h-45 bg-[#D7B49D] "></div>

        {/* Column 2 */}
        <div className="flex-1 px-8 py-8">
          <div className="flex items-start gap-4">
            <div className="bg-[#D7B49D] p-2 rounded">
              <FaChartLine className="text-[#8B572A] text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Growing</h3>
              <p className="mt-2 text-gray-600">From 0 applicants to 1.5 <br /> million per year</p>
            </div>
          </div>
        </div>

        {/* Divider for Desktop ONLY */}
        <div className="hidden md:block w-px h-45 bg-[#D7B49D]"></div>

        {/* Column 3 */}
        <div className="flex-1 px-8 py-8">
          <div className="flex items-start gap-4">
            <div className="bg-[#D7B49D] p-2 rounded">
              <FaBalanceScale className="text-[#8B572A] text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Well Balance</h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li>+ Work life balance</li>
                <li>+ Enjoyable environment</li>
                <li>+ Collaboration and teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
