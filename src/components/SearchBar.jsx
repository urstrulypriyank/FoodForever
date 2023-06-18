import React from "react";

const SearchBar = () => {
  return (
    <div className=" flex flex-col justify-center m-6 p-2  ">
      <input
        type="text"
        name=""
        id=""
        className="p-2 m-2 border-b border-black w-[30vw]  
        outline-none
        focus:outline-offset-0
        mx-auto
        text-center
        "
        placeholder="Type Here ...."
      />
      <button className=" p-1 rounded-md bg-yellow-700 w-32 mx-auto ">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
