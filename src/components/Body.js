import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  //normal JS Variable
  let normVar = null;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterresList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filterresList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* //Restaurant Card */}
        {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biriyani, North Indian, Asian"
          /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
