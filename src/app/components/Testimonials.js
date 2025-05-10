"use client";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Alice Smith",
    role: "IT Manager",
    company: "TechCorp",
    image: "/assets/alice.png",
    message:
      "Credex Technology offers expert development and integration support taht helped us accelerate time-to-market and deliever greater value to our customers.",
  },

  {
    name: "John Doe",
    role: "CTO",
    company: "SoftCloud",
    image: "/assets/john.png",
    message:
      "The Credex Technology is responsive, skilled, and made our integration process seamless and efficient",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-gray-200 py-24 px-4 min-h-[400px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-left text-gray-800 mb-10">
          Client Speak
        </h2>

        <div className="relative bg-gray-50 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={current.image}
              alt={current.name}
              className="w-24 h-34 rounded-full object-cover border-2 border-blue-600"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                {current.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {current.role}, {current.company}
              </p>
              <p className="text-sm text-gray-800">{current.message}</p>
            </div>
          </div>

          {/* Quote Mark */}
          <div className="absolute top-4 left-4 text-5xl text-blue-600 font-serif leading-none">
            “
          </div>

          {/* Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-blue-600 hover:text-blue-800 transition"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
