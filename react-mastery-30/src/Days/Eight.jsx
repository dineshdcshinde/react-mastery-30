import React, { useState } from "react";
const Eight = () => {
  const [bgColor, setBgColor] = useState("");

  //   const randomColor = () => {
  //     let red = Math.round(Math.random() * 255);
  //     let green = Math.round(Math.random() * 255);
  //     let blue = Math.round(Math.random() * 255);
  //     return `rgba(${red}, ${green}, ${blue})`;
  //   };

  const randomColor = () => {
    return `rgba(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)} )`;
  };

  const handleBackgroundColor = () => {
    setBgColor(randomColor());
  };

  console.log;
  return (
    <div
      className={`flex justify-center items-center min-h-screen w-full
       `}
      style={{ backgroundColor: bgColor }}
    >
      <button
        onClick={handleBackgroundColor}
        className="py-2 px-3 bg-sky-600 text-white rounded
       hover:bg-sky-700 transition-all cursor-pointer"
      >
        Change Background
      </button>
    </div>
  );
};

export default Eight;
