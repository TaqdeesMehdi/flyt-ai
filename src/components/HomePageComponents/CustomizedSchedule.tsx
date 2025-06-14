import { scheduleFeatures } from "../../../data/data";
export const CustomizedSchedule = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Customized Itineraries for Every Travel Dream
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Flyt.ai is the AI travel planner that families, couples, and
            honeymooners rely on for seamless multi-city adventures. Whether you
            Google &quot;Flyt ai&quot; or simply say &quot;Ask Layla&apos;&quot;
            our smart platform turns bucket-list ideas into perfectly-timed
            routes, live reservations, and share-ready plans—so you spend less
            time searching and more time celebrating.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {scheduleFeatures.map((feature) => {
            const { icon, description, title, id } = feature;
            const IconComponent = icon;
            return (
              <div key={id} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <IconComponent size={32} className="text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
