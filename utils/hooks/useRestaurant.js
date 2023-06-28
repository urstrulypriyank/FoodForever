import { useState, useEffect } from "react";
import { GET_RES_API_URL } from "../../constant";

//  hook return allresturant list
const useRestaurant = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    try {
      let data = await fetch(GET_RES_API_URL);
      data = await data.json();
      data = await data?.data?.cards[2]?.data?.data?.cards;
      setAllRestaurant(data);
    //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return allRestaurant;
};

export default useRestaurant;
