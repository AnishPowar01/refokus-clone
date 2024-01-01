import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes/Stripes";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white font-['Work_Sans'] select-none">
      <Navbar />
      <Work />
      <Stripes/>
      <Products/>
    </div>
  );
};

export default App;
