import React, { useState } from "react";
import { nanoid } from "nanoid";

const HeroProductCover = () => {
  const [motorInsurance, setMotorInsurance] = useState([
    {
      id: nanoid(),
      text: "Car Insurance",
      image: " https://www.notioninsurance.com/images/car-product.jpg",
    },
    {
      id: nanoid(),
      text: "Wheeler  Insurance",
      image: " https://www.notioninsurance.com/images/bike-product.jpg",
    },
    {
      id: nanoid(),
      text: "Commericial Vehicle",
      image: "  https://www.notioninsurance.com/images/csv-product.jpg",
    },
  ]);

  const [lifeInsurance, setlifeInsurance] = useState([
    {
      id: nanoid(),
      text: "Term Insurance",
      image: "  https://www.notioninsurance.com/images/termlife-product.jpg",
    },
    {
      id: nanoid(),
      text: "Endownment Plan",
      image: "  https://www.notioninsurance.com/images/endowment-product.jpg",
    },
  ]);

  const [healthInsurance, sethealthInsurance] = useState([
    {
      id: nanoid(),
      text: "Health Insurance",
      image: "https://www.notioninsurance.com/images/wholelife-product.jpg",
    },
    {
      id: nanoid(),
      text: "Family  Insurance",
      image: "https://www.notioninsurance.com/images/family2-product.jpg",
    },
    {
      id: nanoid(),
      text: "Senior  Citizen",
      image: "https://www.notioninsurance.com/images/seniorcitizen-product.jpg",
    },
  ]);
  return (
    <>
      {/* Motor Insurance */}
      <div className="motorInsurance flex justify-between items-center  border-2 p-6 w-[300px]  ">
        {motorInsurance.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 ">
            <div className="motor-imgae mb-2">
              <img
                src={item.image}
                alt={item.text}
                className="h-[67px] w-[67px]"
              />
            </div>
            <div className="item-name">
              <p className="mt-3 text-center">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="endownment flex justify-between items-center  border-2 p-6 w-[300px]  ">
        {healthInsurance.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-4 "
          >
            <div className="motor-imgae mb-2">
              <img
                src={item.image}
                alt={item.text}
                className="h-[67px] w-[67px]"
              />
            </div>
            <div className="item-name">
              <p className="mt-3 text-center">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="healthInsurance flex justify-between items-center  border-2 p-6 w-[300px]  ">
        {healthInsurance.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 ">
            <div className="motor-imgae mb-2">
              <img
                src={item.image}
                alt={item.text}
                className="h-[67px] w-[67px]"
              />
            </div>
            <div className="item-name">
              <p className="mt-3 text-center">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroProductCover;
