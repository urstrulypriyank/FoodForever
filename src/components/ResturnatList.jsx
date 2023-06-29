import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import { GET_RES_API_URL, defaultSearchText } from "../../constant";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { showFilterResturant } from "../../utils/helper";
import useRestaurant from "../../utils/hooks/useRestaurant";
import ShimmerCard from "./ShimmerCard";
export const filterString = (textBoxValue, allRestaurantValue) => {};

const ResturnatList = () => {
  const allRestaurant = useRestaurant();
  const [restaurant, setRestaurant] = useState(allRestaurant);
  const [searchText, setSearchText] = useState(defaultSearchText);

  //  Functions in jsx

  useEffect(() => {
    setRestaurant((restaurant) => {
      if (allRestaurant === restaurant) return restaurant;
      return allRestaurant;
    });
  }, [allRestaurant]);
  useEffect(() => {
    if (
      searchText === "" ||
      searchText === defaultSearchText ||
      searchText.length == 0 ||
      searchText == "<empty string>"
    ) {
      setRestaurant(allRestaurant);
    } else {
      showFilterResturant(allRestaurant, setRestaurant, searchText);
    }
  }, [searchText]);

  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        showFilterResturant={showFilterResturant}
      />

      {allRestaurant?.length === 0 ? (
        <div className="flex flex-wrap   h-screen w-screen  justify-center">
          {Array(9)
            .fill("")
            .map((value, index) => (
              <ShimmerCard key={index} />
            ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center">
          {restaurant?.map((restaurant) => (
            <Link key={restaurant?.data?.id}>
              <ResturantCard key={restaurant?.data?.id} {...restaurant.data} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ResturnatList;
