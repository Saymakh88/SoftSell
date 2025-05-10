"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faMoneyCheckAlt,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  const steps = [
    { title: "Upload License", icon: <FontAwesomeIcon icon={faUpload} /> },
    {
      title: "Get Valuation",
      icon: <FontAwesomeIcon icon={faMoneyCheckAlt} />,
    },
    { title: "Get Paid", icon: <FontAwesomeIcon icon={faSackDollar} /> },
  ];

  return (
    <section className="mx-8 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((steps, index) => (
          <div
            key={index}
            className="shadow-md bg-white rounded p-6 w-full md:w-1/3"
          >
            <div className="text-4xl mb-4">{steps.icon}</div>
            <h3 className="font-semibold text-lg">{steps.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
