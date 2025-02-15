import React, { useState } from "react";

const Sixteen = () => {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(!state);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <p className="text-2xl mb-4">
        Hi, I am going to toggle{" "}
        <span
          className={`font-bold transition-colors duration-500 ${
            state ? "text-yellow-500" : "text-green-500"
          }`}
        >
          {state ? "Initial Value" : "Updated Value"}
        </span>
      </p>
      <button
        onClick={handleToggle}
        className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        Toggle
      </button>
    </div>
  );
};

export default Sixteen;