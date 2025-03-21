import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const FeedbackSlider = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
  const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         // const response = await axios.get("https://Syntara-startup-backend.onrender.com/api/ui/feedback"); // Replace with your actual API endpoint
//         const response = await axios.get("https://jatayu-startup-backend.onrender.com/api/ui/feedback"); // Replace with your actual API endpoint
//         setFeedbacks(response.data);
//       } catch (error) {
//         console.error("Error fetching feedbacks:", error);
//       }
//     };

//     fetchFeedbacks();
//   }, []);

const feedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, Elevate Co.",
      feedback: "This workspace completely transformed our team's productivity and creativity. The thoughtful design and amenities made our transition to a hybrid work model seamless. I've never seen our team more motivated!",
      image: "https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Tech Lead, Innovate Solutions",
      feedback: "The private workspace exceeded all our expectations. The blend of functionality and aesthetics creates the perfect environment for deep work and collaboration. Our team's output has increased by 30% since moving here.",
      image: "https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg"
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      position: "CEO, Startup Ventures",
      feedback: "As a growing startup, finding the right workspace was crucial. This space not only met our practical needs but provided an inspiring environment that aligns perfectly with our company culture. Worth every penny!",
      image: "https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg"
    },
    {
      id: 4,
      name: "David Patel",
      position: "Design Director, Creative Hub",
      feedback: "The workspace's commitment to sustainability resonates deeply with our company values. The green elements integrated throughout not only look beautiful but create a healthier, more energizing environment for our creative team.",
      image: "https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg"
    },
    {
      id: 5,
      name: "Emily Washington",
      position: "Operations Manager, Global Innovations",
      feedback: "The flexibility of the workspace configurations has been invaluable as our team size fluctuates with projects. The staff's responsiveness and attention to detail have made managing our office needs effortless.",
      image: "https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg"
    }
  ];

  const nextFeedback = () => {
    setCurrent((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrent((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  if (feedbacks.length === 0) {
    return <p className="text-center text-gray-500">Loading feedbacks...</p>;
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] py-10  lg:py-16 bg-white flex flex-col lg:flex-row items-center gap-10 h-screen poppins">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center px-6 h-[60vh]">
        <img
          src={feedbacks[current].image}
          alt={feedbacks[current].name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Testimonial Content */}
      <div className="w-full lg:w-2/3">
        <p className="text-2xl lg:text-3xl  leading-snug text-black">
          “{feedbacks[current].feedback}”
        </p>
        <p className="mt-4 text-lg font-bold text-black">{feedbacks[current].name}</p>
        <p className="text-gray-500 text-sm">{feedbacks[current].position}</p>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={prevFeedback}
            className="p-4 text-black border border-gray-300 hover:text-white duration-300 cursor-pointer hover:bg-black rounded-full transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextFeedback}
            className="p-4 text-black border border-gray-300 hover:text-white duration-300 cursor-pointer hover:bg-black rounded-full transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;