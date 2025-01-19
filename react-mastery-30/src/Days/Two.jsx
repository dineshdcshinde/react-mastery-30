import React, { useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl text-center pt-5 font-semibold leading-6">Counter Application</h1>
      <div className="min-h-screen w-full bg-inherit flex items-center justify-center  text-white">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 rounded-lg  bg-gray-600 text-white font-semibold m-7 hover:bg-gray-700 transition-colors pointer text-2xl"
        >
          -
        </button>
        <p className="text-2xl">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 rounded-lg  bg-gray-600 text-white font-semibold m-7 hover:bg-gray-700 transition-colors pointer text-2xl"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Two;
