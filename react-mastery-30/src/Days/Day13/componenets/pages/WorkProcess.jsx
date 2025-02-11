import { nanoid } from "nanoid";
import React, { useState } from "react";

const WorkProcess = () => {
  const [process, setprocess] = useState([
    {
      id: nanoid(),
      image: "https://www.notioninsurance.com/images/select-insur.png",
      process: "Select Insurance",
    },
    {
      id: nanoid(),
      image: "https://www.notioninsurance.com/images/meet-agent.png",
      process: "Meet agent",
    },
    {
      id: nanoid(),
      image: "https://www.notioninsurance.com/images/get-insur.png",
      process: "Get Insurance",
    },
  ]);
  return (
    <>
      <div className="workprocesscover mt-8 flex flex-col justify-center items-center gap-5">
        <div className="workProcessHead">
          <h2 className="text-center font-bold text-[2rem] leading-3 mb-4">
            Our Easy Work Process in 4 Steps
          </h2>
          <p className="text-center mt-5">Work Process</p>
        </div>

        <div className="workProcess w-[90%] m-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
          {process.map((item, index) => {
            return (
              <div
                className="workProcessSection w-full sm:w-[300px] flex justify-center items-center flex-col gap-4"
                key={item.id}
              >
                <div className="imageSection h-[160px] w-[160px] rounded-full border flex justify-center items-center shadow-md relative hover:scale-105 cursor-pointer transition-all group">
                  <img
                    src={item.image}
                    alt="abc"
                    className="h-[70px] w-[70px]"
                  />

                  <span className="processNumber bg-[#3c3c3c] h-[60px] w-[60px] rounded-full text-center flex justify-center items-center absolute left-[-5px] top-[2px] font-bold text-white text-[1.3rem] group-hover:bg-[#3c3cee] transition-all">
                    {index + 1}
                  </span>
                </div>
                <div className="content text-center">
                  <p className="font-bold text-[1.4rem]">{item.process}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkProcess;