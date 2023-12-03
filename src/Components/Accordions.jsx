import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Accordions = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-full w-full cursor-pointer">
      {items.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-400">
          <div
            className={`py-3 cursor-pointer flex flex-row justify-between transition-all duration-300 ${
              openIndex === index ? "text-actionColor" : "text-gray-600"
            }`}
          >
            <h2 className="text-medium font-medium">{item.title}</h2>
            <button
              onClick={() => toggleAccordion(index)}
              className="transition-all duration-300"
            >
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {openIndex === index && (
            <div className="py-2 text-sm">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
