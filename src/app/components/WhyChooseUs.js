import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldAlt,
  faStar,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faBolt,
    text: "Fast and secure license resale process",
  },
  {
    icon: faMoneyCheckAlt,
    text: "Expert valuation to ensure you get the best price",
  },
  {
    icon: faStar,
    text: "Trusted by leading software partners",
  },
  {
    icon: faShieldAlt,
    text: "No hidden fees — 100% transparent service",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-lg">
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-blue-600 mt-1"
              />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;
