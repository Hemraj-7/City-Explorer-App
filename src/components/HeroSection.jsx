import React, { useState } from "react";

const HeroSection = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <section className="bg-blue-50 py-20 px-4 text-center" style={{
      background: "rgb(227, 244, 250)"
    }}>
      <div className=" mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans text-gray-700 font-bold p-8 ">
          Explore Cities <span className="text-[rgb(24,158,199)]">Around the World</span>
        </h1>

        <p className="lg:mt-4 text-[rgb(98,112,133)] text-lg">
          Discover locations, weather conditions, and essential information about any city in a single platform
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex w-full sm:w-[500px] lg:w-[40%] rounded-full overflow-hidden shadow-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400">
            <input
              type="text"
              placeholder="Search for any city... (e.g., Paris, Tokyo, New York)"
              className="flex-grow px-5 py-3 text-gray-800 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              className="bg-[rgb(24,158,199)] text-white px-6 py-3 hover:bg-[rgb(14,142,181)] transition"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
