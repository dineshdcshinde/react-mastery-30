import { nanoid } from "nanoid";
import React, { useState } from "react";

const Strengths = () => {
  const [strengths, setstrengths] = useState([
    {
      id: nanoid(),
      title: "Claims Assistance",
      desc: "Easy & Reliable",
      image: "https://www.notioninsurance.com/images/feature-claim.jpg",
    },
    {
      id: nanoid(),
      title: "Data Security",
      desc: "Guranteed",
      image: "https://www.notioninsurance.com/images/feature-security.jpeg",
    },
    {
      id: nanoid(),
      title: "Best Prices",
      desc: "in Market",
      image: "https://www.notioninsurance.com/images/feature-best.jpeg",
    },

    {
      id: nanoid(),
      title: "24/7 Support",
      desc: "Every Day of the week",
      image: "https://www.notioninsurance.com/images/feature-service24.jpeg",
    },
  ]);
  return (
    <>
      <div className="strengths-section mt-4">
        <div className="head">
          <h2 className="text-center text-[2rem] font-bold mb-2">
            Our Unique Strengths
          </h2>
          <p className="text-center mb-4">
            Experience excellence with our tailored solutions and commitment to
            customer satisfaction.
          </p>
        </div>

        <div className="strengthsContainer flex flex-wrap w-[95%] m-auto justify-center md:justify-between items-center gap-4 mb-4">
          {strengths.map((strength) => (
            <div
              className="strengthItem flex flex-col justify-center items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border p-2 rounded-xl hover:scale-105 cursor-pointer transition-transform"
              key={strength.id}
            >
              <div className="strengthImage">
                <img
                  src={strength.image}
                  alt={strength.title}
                  className="h-[160px] w-[160px]"
                />
              </div>
              <div className="strengthDescSec">
                <p className="text-center mt-2 text-[1.3rem]">
                  <strong>{strength.title}</strong>
                </p>
                <p className="mt-2 text-center">{strength.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Strengths;