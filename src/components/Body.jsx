import React from "react";
import SearchBar from "./SearchBar";
import ResturnatList from "./ResturnatList";

const Body = () => {
  return (
  <div className="flex w-screen h-screen ">
      <SearchBar />
      <ResturnatList />
    </div>
  );
};

export default Body;
