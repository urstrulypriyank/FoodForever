import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import CustomError from "./src/components/CustomError";

// Pages specific imports
import About from "./src/components/About";

// Routing specific
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenuDynamic from "./src/components/ResturantMenuDynamic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <CustomError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resturant/:id",
    element: <ResturantMenuDynamic/>
  },
]);

function AppLayout() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll z-0">
      <div className="snap-center  ">
        <Navbar />
      </div>
      <div className="snap-start snap-mandatory ">
        <Outlet />
      </div>
      <div className="snap-center backdrop-blur-lg h-screen w-screen -z-10 ">
        <Footer />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
