import { features } from "../../../data/data";
const FeaturedButtons = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <button
                key={feature.id}
                className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
              >
                <IconComponent
                  size={20}
                  className={`${feature.color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-gray-700 text-sm font-medium">
                  {feature.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedButtons;
