// src/Sections/Hobby.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";
import HobbyData from "../Data/HobbyData";
import HobbyCard from "../Components/HobbyCard";

const Hobby = () => {
  return (
    <section id="hobby" className="py-16 px-6 bg-black text-white ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
          My Hobbies:{" "}
          <span className="text-white">
            <Typewriter
              words={[
                "Reading 📚",
                "Cycling 🚴‍♂️",
                "Gaming 🎮",
                "Coding 💻",
                "Traveling ✈️",
                "Problem Solving 🧩",
              ]}
              loop={0} // 0 means infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {/* Marquee Section */}
        <div className="space-y-14 mt-10 py-1.5 overflow-hidden">
          {/* overflow-hidden দিয়ে scrollbar remove করা হলো */}
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            <div className="flex gap-9 mx-2">
              {HobbyData.map((hobby) => (
                <HobbyCard key={hobby.id} hobby={hobby} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
