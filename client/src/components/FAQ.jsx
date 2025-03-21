import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Button from "./Button";

const faqs = [
  {
    id: 1,
    question: "How much does a co-working space cost?",
    answer: "There is no minimum rental term when using our co-working spaces. You can use a co-working space in any of our centres around the world for a minimum of one hour or reserve a dedicated desk for as long as you need.",
  },
  {
    id: 2,
    question: "Can I book a co-working desk for a day?",
    answer: "There is no minimum rental term when using our co-working spaces. You can use a co-working space in any of our centres around the world for a minimum of one hour or reserve a dedicated desk for as long as you need.",
  },
  {
    id: 3,
    question: "Is there a minimum rental term?",
    answer:
      "There is no minimum rental term when using our co-working spaces. You can use a co-working space in any of our centres around the world for a minimum of one hour or reserve a dedicated desk for as long as you need.",
  },
  {
    id: 4,
    question: "Is there a minimum rental term?",
    answer:
      "There is no minimum rental term when using our co-working spaces. You can use a co-working space in any of our centres around the world for a minimum of one hour or reserve a dedicated desk for as long as you need.",
  },
  {
    id: 5,
    question: "Is there a minimum rental term?",
    answer:
      "There is no minimum rental term when using our co-working spaces. You can use a co-working space in any of our centres around the world for a minimum of one hour or reserve a dedicated desk for as long as you need.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-[5vw] py-10 bg-white poppins h-screen pt-20">
      {/* Title and See More */}
      <div className="flex justify-between items-center py-8">
      <h1 className="text-2xl md:text-5xl font-medium">Questions.</h1>
        <Button className="flex items-center text-black font-medium cursor-pointer">
          See More <FaChevronRight className="ml-2 cursor-pointer" />
        </Button>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border-b border-gray-300 pb-4">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-black"
              onClick={() => toggleFAQ(index)}
            >
              <span>{`0${faq.id}. ${faq.question}`}</span>
              {openIndex === index ? (
                <FaChevronDown className="text-gray-500 cursor-pointer" />
              ) : (
                <FaChevronRight className="text-gray-500 cursor-pointer" />
              )}
            </button>

            {openIndex === index && faq.answer && (
              <p className="mt-2 text-gray-500 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
