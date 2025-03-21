import React from "react";
import { ArrowRight } from "lucide-react";

const workspaces = [
  {
    id: 1,
    name: "Ambarukmo Space",
    price: "$140.55 / Day",
    image: "https://source.unsplash.com/400x300/?office,meetingroom",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 2,
    name: "Commodities Space",
    price: "$30.00 / Day",
    image: "https://source.unsplash.com/400x300/?modern,workspace",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 3,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://source.unsplash.com/400x300/?coworking,office",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
];

const WorkspaceGrid = () => {
  return (
    <section className="px-6 py-10 min-h-screen bg-white">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Explore Space</h2>
        <button className="flex items-center text-gray-700 hover:text-black transition">
          See More <ArrowRight className="ml-2" size={18} />
        </button>
      </div>

      {/* Workspace Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workspaces.map((space) => (
          <div key={space.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img src={space.image} alt={space.name} className="w-full h-60 object-cover" />
              {/* Amenities */}
              <div className="absolute top-3 left-3 flex space-x-2">
                {space.amenities.map((amenity, index) => (
                  <span key={index} className="bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{space.name}</h3>
              <p className="text-gray-600">{space.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkspaceGrid;
