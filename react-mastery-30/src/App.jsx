import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Two from "./Days/Two";
// import One from "./Days/One";
function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#3c3c3c] text-white">
        {/* <One /> */}
        <Two/>

      </div>
    </>
  );
}

export default App;
