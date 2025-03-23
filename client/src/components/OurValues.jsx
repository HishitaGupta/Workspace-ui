import { Leaf, Users, Lightbulb, LayoutGrid } from "lucide-react";

const values = [
  {
    title: "Community Building",
    description: "Building a space where everyone feels welcome and connected within the group.",
    icon: <Users size={20} />,
    highlight: false,
  },
  {
    title: "Sustainable Actions",
    description: "Committed to eco-friendly practices by reducing our energy usage for the future.",
    icon: <Leaf size={20} />,
    highlight: true, // This box is highlighted
  },
  {
    title: "Incubating Innovations",
    description: "Fostering an environment that encourages new ideas and growth for our users.",
    icon: <Lightbulb size={20} />,
    highlight: false,
  },
  {
    title: "Room for Flexibility",
    description: "Offering various workspaces to suit your unique needs. Be flexible as you need.",
    icon: <LayoutGrid size={20} />,
    highlight: false,
  },
];

export default function OurValues() {
  return (
    <section className="bg-[#f7f3ed] p-8 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {values.map((value, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border shadow-sm transition-all duration-300 ${
              value.highlight
                ? "bg-brown-700 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{value.icon}</span>
              <h3 className="text-lg font-semibold">{value.title}</h3>
            </div>
            <p className="mt-2 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-gray-600 hover:underline">
        See More
      </button>
    </section>
  );
}
