import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/MockData.js";

const Body = () => {
  // Declare restaurantList outside the forEach loop
  let restaurantList = [];

  resList.forEach((item) => {
    // Use optional chaining to safely access nested properties
    const restaurants =
      item?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // Check if restaurants is defined before adding to the list
    if (restaurants) {
      restaurantList = [...restaurantList, ...restaurants];
    }
  });

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* Map over the restaurantList directly */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
