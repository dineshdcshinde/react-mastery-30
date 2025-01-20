import { useState } from "react";

const Three = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-inherit text-white flex items-center justify-center flex-col p-8">
      <label htmlFor="userInput" className="text-[2.3vw] font-semibold mb-2 ">
        Enter the text:
      </label>
      <input
        id="userInput"
        className="w-full max-w-md mt-3 p-3 rounded bg-slate-600 transition-all outline-none focus:ring-2 focus:ring-blue-600  text-[2vw] px-4 text-[#999fab]"
        type="text"
        placeholder="Enter the text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="mt-4 font-semibold text-[#cfd1d4] text-[2vw]">
        User Type: {text}
      </p>
    </div>
  );
};

export default Three;
