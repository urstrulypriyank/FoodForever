import React from "react";
import SearchBar from "./SearchBar";
import ResturnatList from "./ResturnatList";

const Body = () => {
  return (
    <div className="w-screen h-screen bg-white ">
      <SearchBar />
      <ResturnatList />
    </div>
  );
};

export default Body;
