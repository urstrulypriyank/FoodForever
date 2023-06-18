import React, { useEffect, useState } from "react";
import styles from "../css/navbar.css";
import Wallpaper from "../../assets/images/Wallpaper.webp";
import Logo from "../../assets/icons/logo.png";
const Navbar = () => {
  return (
    <div style={styles}>
      <div className="w-screen h-screen  flex justify-center items-center">
        <span className="text-2xl italic  font-light bg-black rounded-md text-white">
          Explore the Food That You Love Forever
        </span>
        <img
          src={Wallpaper}
          className="absolute -z-10 bg-opacity-75 w-screen h-screen "
        />
      </div>
      <div
        className=" flex items-center mx-1 rounded-xl text-white font-semibold absolute top-0 w-screen px-12 py-2"
        style={styles}
      >
        <img
          src={Logo}
          alt="Food Forever Logo"
          className="w-20 h-20 rounded-full"
        />
        <div
          className="flex flex-1 mx-2 backdrop-blur-md rounded-md p-5"
          style={styles}
        >
          <ul className="flex flex-1  space-x-10 justify-end " id="navBarList">
            <li>
              <a>Get The App</a>
            </li>
            <li>
              <a>Add a resturant</a>
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
    </div>
  );
};

export default Navbar;
