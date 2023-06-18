import React, { useState, useEffect } from "react";
import { restaurantList } from "../../constant";
import ResturantCard from "./ResturantCard";
import { GET_RES_API_URL } from "../../constant";
import SearchBar from "./SearchBar";

export const filterString = (textBoxValue, allRestaurantValue) => {};

const ResturnatList = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //  Functions in jsx
  const fetchResturantData = async (url, setAllRestaurant, setRestaurant) => {
    let data = await fetch(url);
    data = await data.json();
    data = data?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurant(data);
    setRestaurant(data);
    console.log(data);
  };

  useEffect(() => {
    fetchResturantData(GET_RES_API_URL, setAllRestaurant, setRestaurant);
  }, []);

  return (
    <>
      <SearchBar />
      {allRestaurant.length === 0 ? (
        <h1 className="text-black text-3xl">Lodaing....</h1>
      ) : (
        <div className="flex flex-row flex-wrap justify-center">
          {allRestaurant.map((restaurant) => (
            <ResturantCard key={restaurant.data.id} {...restaurant.data} />
          ))}
        </div>
      )}
    </>
  );
};

export default ResturnatList;
