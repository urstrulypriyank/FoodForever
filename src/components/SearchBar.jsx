import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center m-2 p-2   ">
      <input
        type="text"
        name=""
        id=""
        className="p-2 border-b border-black w-[30vw]  
        outline-none
        focus:outline-offset-0"
      />
      <button className="mx-8">Search</button>
    </div>
  );
};

export default SearchBar;
