import { useState, useEffect } from "react";

const Eighteen = () => {
  const carouselData = [
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/2a424b4ce6a5f5b2.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/91f975d4cbb7ee07.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/5857935d77b377e1.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/2a424b4ce6a5f5b2.jpg?q=20",
  ];
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carouselWrapper min-h-screen w-full flex justify-center items-center">
      <div className="carousel w-[85%] h-[75%] flex justify-center items-center gap-2">
        <button onClick={handlePrevClick}>⏮️</button>

        <div className="playingCarousel w-full h-full relative flex flex-wrap items-center transition-transform duration-700 overflow-hidden gap-2">
          {carouselData.map((img, idx) => (
            <img
              src={img}
              key={idx}
              className={`w-full h-full object-contain
                ${idx === index ? "block" : "hidden"}
                `}
              alt="carouselData"
            />
          ))}
        </div>

        <button onClick={handleNextClick}>⏭️</button>
      </div>
    </div>
  );
};

export default Eighteen;



