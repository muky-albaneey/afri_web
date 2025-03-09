import { FaStore, FaChartLine, FaGift, FaHeadset, FaTruck } from 'react-icons/fa';
import FeatureCard from './FeatureCard';
import { FaScissors } from 'react-icons/fa6';

export default function Feature() {
  const features = [
    {
      icon: <FaStore  color='#8B4513'/>,
      title: 'Online Marketplace',
      description:
        "Afrigoja is your go-to platform for showcasing and selling your products or services. Whether you're a shop owner, tailor, or artisan, our marketplace is designed to amplify your reach and attract customers locally and globally.",
      points: [
        'Easily create your online store.',
        'Display and sell products or services with secure payment options.',
        'Reach a wider audience with targeted promotions and marketing.'
      ],
    },
    {
      icon: <FaScissors color='#8B4513' />,
      title: 'Custom Tailoring Services',
      description:
        'Enable customers to upload measurements and designs. Manage bookings and track project timelines seamlessly. Offer tailored solutions and receive feedback through our interactive platform.',
      points: [
        'Tailors and fashion designers can connect with clients in need of custom clothing or alterations.'
      ],
    },
    {
      icon: <FaChartLine color='#8B4513' />,
      title: 'Business Growth Tools',
      description:
        'We are committed to your success. Use our tools to manage and grow your business effectively.',
      points: [
        'Inventory management for shop owners.',
        'Order tracking and delivery coordination.',
        'Detailed sales analytics to understand customer preferences.'
      ],
    },
    {
      icon: <FaGift color='#8B4513' />,
      title: 'Exclusive Promotions and Rewards',
      description:
        'Enjoy exclusive promotions and loyalty rewards as a valued Afrigoja user.',
      points: [
        'Seasonal discounts for buyers.',
        'Performance-based rewards for sellers.',
        'Early access to new features and updates.'
      ],
    },
    {
      icon: <FaHeadset color='#8B4513' />,
      title: 'Customer Support and Dispute Resolution',
      description:
        'Your satisfaction is our priority. Our support team is always available to address any challenges you may face.',
      points: [
        '24/7 customer support via chat, email, and phone.',
        'Hassle-free dispute resolution for buyers and sellers.',
        'Comprehensive FAQ and Help Center.'
      ],
    },
    {
      icon: <FaTruck color='#8B4513' />,
      title: 'Seamless Logistics and Delivery Service',
      description:
        'We understand that timely delivery is key to your success. Our logistics service ensures that products reach customers quickly and safely.',
      points: [
        'Real-time order tracking.',
        'Affordable shipping rates for local and international deliveries.',
        'Partnerships with trusted courier services.'
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        {features.map((feature, index) => (
          <div key={index} className={`relative ${index % 2 !== 0 ? 'md:pl-6' : ''}`}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
