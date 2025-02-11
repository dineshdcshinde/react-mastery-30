import { nanoid } from "nanoid";
import React, { useState } from "react";

const Insurance = () => {
  const [otherInsurance, setotherInsurance] = useState([
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Health Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/health-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Investment Plans",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/investment-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Child Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/child-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Money Back Plans",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/money-insur.svg",
    },
    {
      id: nanoid(),
      text: "Employee Health",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/employee-health-insur.avif",
    },
    {
      id: nanoid(),
      text: "Travel Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/Travel-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/health-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
    {
      id: nanoid(),
      text: "Life Insurance",
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
    },
  ]);

  return (
    <>
      <div className="otherInsurance mt-5">
        <h2 className="font-bold text-center text-[2rem] ">OTHER INSURANCE</h2>

        <hr className="w-[80%] m-auto mt-2" />

        <div className="otherProductsInsurance w-[90%] md:w-[80%] m-auto mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
          {otherInsurance.map((insurance) => (
            <div
              key={insurance.id}
              className="insuranceBox flex flex-col justify-center items-center gap-4 border p-2 rounded-md hover:scale-105 transition-all cursor-pointer w-full sm:w-[45%] md:w-[30%] lg:w-[23%]"
            >
              <img
                className="insuranceImage h-[50px] w-[50px]"
                src={insurance.image}
                alt={insurance.text}
              />
              <h3 className="insuranceText text-center">{insurance.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Insurance;