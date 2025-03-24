import { Leaf, Users, Lightbulb, LayoutGrid, ArrowRight } from "lucide-react";
import Button from "./Button";

const values = [
  {
    title: "Community Building",
    description: "Building a space where everyone feels welcome and connected within the group. Building a space where everyone feels welcome and connected within the group.",
    icon: <Users size={20} />,
    highlight: false,
  },
  {
    title: "Sustainable Actions",
    description: "Committed to eco-friendly practices by reducing our energy usage for the future. Building a space where everyone feels welcome and connected within the group.",
    icon: <Leaf size={20} />,
    highlight: false, // This box is highlighted
  },
  {
    title: "Incubating Innovations",
    description: "Fostering an environment that encourages new ideas and growth for our users. Building a space where everyone feels welcome and connected within the group.",
    icon: <Lightbulb size={20} />,
    highlight: false,
  },
  {
    title: "Room for Flexibility",
    description: "Offering various workspaces to suit your unique needs. Be flexible as you need. Building a space where everyone feels welcome and connected within the group.",
    icon: <LayoutGrid size={20} />,
    highlight: false,
  },
];

export default function OurValues() {
  return (
    <section className=" rounded-lg  items-center px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw]  poppins">
      <h2 className="text-2xl md:text-5xl font-medium mb-6 poppins w-1/3 py-8 text-start">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border  shadow-md hover:scale-105 transition-all transform duration-300 ${
              value.highlight
                ? "bg-brown-700 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{value.icon}</span>
              <h3 className="text-2xl font-semibold">{value.title}</h3>
            </div>
            <p className="mt-2 text-sm">{value.description}</p>
          </div>
        ))}
        
      </div>
      <div className="flex justify-center items-center py-6">
      <Button className="mt-4 text-center">
        See More <ArrowRight className="ml-2" size={18} />
      </Button>
      </div>
      
      
    </section>
  );
}
