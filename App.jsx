import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";

function AppLayout() {
  return (
    <div>
      <Navbar className="" />
      <Body className=""/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
