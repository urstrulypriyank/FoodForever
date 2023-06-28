import React, { useEffect, useState } from "react";
import styles from "../css/navbar.css";
import Wallpaper from "../../assets/images/Wallpaper.webp";
import Logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={styles}>
      <div
        className=" flex items-center mx-1 rounded-xl text-white font-semibold top-0 w-screen md:px-12 py-2 flex-col md:flex-row "
        style={styles}
      >
        <img
          src={Logo}
          alt="Food Forever Logo"
          className="w-20 h-20 rounded-full max-md:my-5 "
        />
        <div
          className="flex flex-1 mx-2 backdrop-blur-md rounded-md p-5 max-md:p-4"
          style={styles}
        >
          <ul
            className="flex flex-1  md:space-x-10  justify-end flex-col md:flex-row text-center max-md:space-y-4 max-md:my-2"
            id="navBarList"
          >
            <li>
              <Link>
                Get The App
              </Link>
            </li>
            <li>
              <Link to="/About">
                About
              </Link>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
            <li>
              <a>Log In</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-screen h-screen  flex justify-center items-center">
        <span className="md:text-2xl  italic  font-light bg-black rounded-md text-white">
          Explore the Food That You Love Forever
        </span>
        <img
          src={Wallpaper}
          className="absolute -z-10 bg-opacity-75 w-screen h-screen top-0 "
        />
      </div>
    </div>
  );
};

export default Navbar;
