import React, { useState } from "react";

const SearchBar = () => {
  // const [first, setfirst] = useState(second)
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
        max-md:w-[90vw]
        "
        placeholder="Type Here ...."
      />
      <button className=" p-1 rounded-md border border-black w-32 mx-auto ">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
