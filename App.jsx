import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

function AppLayout() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden overflow-y-scroll z-0">
      <div className="snap-center  ">
        <Navbar />
      </div>
      <div className="snap-center  ">
        <Body />
      </div>
      <div className="snap-center  ">
        <Footer />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
