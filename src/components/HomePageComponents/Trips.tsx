import Image from "next/image";

export const Trips = () => {
  const trips = [
    {
      image: "/top-trip-1.webp",
      title: "Road Trip Through the South of Spain",
    },
    {
      image: "/top-trip-2.webp",
      title: "10 Days in Vietnam: Culture & Adventure",
    },
    {
      image: "/top-trip-3.png",
      title: "Romantic Getaway in the Amalfi Coast",
    },
    {
      image: "/top-trip-4.webp",
      title: "Ultimate Summer Escape to Croatia",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Top Trips to Level Up Your Vacation Game
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer"
            >
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {trip.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
