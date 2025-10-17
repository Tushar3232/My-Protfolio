// src/Components/HobbyCard.jsx
import React from "react";

const HobbyCard = ({ hobby }) => {
  return (
    <div className="relative group">
      {/* Animated Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

      {/* Card Content */}
      <div className="relative bg-[#111111] p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transition-transform transform hover:-translate-y-2">
        <div className="text-5xl mb-4">{hobby.icon}</div>
        <h3 className="text-xl font-bold text-cyan-400 mb-2">{hobby.name}</h3>
        <p className="text-gray-300 text-sm">{hobby.description}</p>
      </div>
    </div>
  );
};

export default HobbyCard;
