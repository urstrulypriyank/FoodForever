export const showFilterResturant = (
  allRestaurant,
  setRestaurant,
  searchText
) => {
  
  setRestaurant(
    allRestaurant?.filter((item) =>
      item.data.name.toLowerCase().includes(searchText.toLowerCase())
    )
  );
};
