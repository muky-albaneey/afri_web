interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    points: string[];
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, points }) => (
    <div className="flex flex-col border border-gray-200 shadow-md rounded-xl p-6 bg-white">
      <div className="flex items-start mb-4">
        <div className="text-3xl text-brown-700 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <ul className="list-disc pl-6 space-y-1 text-[#8B4513] text-sm">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
  
  export default FeatureCard;
  