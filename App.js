import React from "react";
import ReactDOM from "react-dom/client";

function AppLayout() {
  return (
    <>
      <></>
      <h1>embedding react component inside react compo</h1>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
