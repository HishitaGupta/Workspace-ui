import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const workspaces = [
  {
    id: 1,
    name: "Ambarukmo Space",
    price: "$140.55 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 2,
    name: "Commodities Space",
    price: "$30.00 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 3,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 4,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 5,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 6,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
  {
    id: 7,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },

  {
    id: 8,
    name: "Equity Work & Cafe",
    price: "$80.80 / Day",
    image: "https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2020/03/Ergonomic-Workspace.jpg",
    amenities: ["75 Mbps", "50 Seat", "100 m²"],
  },
];

const WorkspaceGrid = () => {
  return (
    <section className="px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] py-10 min-h-screen bg-white poppins">
      {/* Heading */}
      <div className="flex justify-between items-center py-10">
      <h1 className="text-2xl md:text-5xl font-medium">Explore Spaces</h1>
        <Button className="flex items-center text-gray-700 hover:text-black transition">
          See More <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>

      {/* Workspace Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {workspaces.map((space) => (
          <div key={space.id} className="bg-white rounded-xl  overflow-hidden">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img src={space.image} alt={space.name} className="w-full h-120  object-cover rounded-xl hover:scale-110 transition-all transform duration-300  " />
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
              <h3 className="text-lg ">{space.name}</h3>
              <p className="text-gray-600 text-sm">{space.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkspaceGrid;
