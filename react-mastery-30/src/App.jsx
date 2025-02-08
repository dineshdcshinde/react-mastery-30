import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ten from "./Days/Ten";
// import Nine from "./Days/Nine";
// import Eight from "./Days/Eight";
// import Seven from "./Days/Seven";
// import Six from "./Days/Six";
// import Five from "./Days/Five";
// import Four from "./Days/Four";
// import Three from "./Days/Three";
// import Two from "./Days/Two";
// import One from "./Days/One";
function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#3c3c3c] text-white">
        {/* <One /> */}
        {/* <Two/> */}
        {/* <Three/> */}
        {/* <Four/> */}
        {/* <Five /> */}
        {/* <Six/> */}
        {/* <Seven/> */}
        {/* <Eight /> */}
        {/* <Nine /> */}
        <Ten />
      </div>
    </>
  );
}

export default App;
