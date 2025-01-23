import React, { useState } from "react";

const Five = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-inherit text-white justify-center items-center">
      <input
        type="checkbox"
        id="check"
        className="inline-flex m-4 w-6 h-6"
        onChange={handleToggle}
      />
      <label htmlFor="check" className="text-2xl mb-3 ">
        Toggle
      </label>

      <p className="text-2xl font-semibold ">{toggle ? "On" : "Off"}</p>
    </div>
  );
};

export default Five;
