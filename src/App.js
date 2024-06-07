import React from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    //this top level div contains Navbar and Main
    <div className="bg-gray-300 h-full">
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
