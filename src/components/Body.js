import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  // State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  console.log("Body rendered");
  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // );
    // const jsonData = await data.json();
    // console.log(jsonData);
    //optional chaining
    //setListOfRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurant(resList);
    setfilterData(resList);
  };
  //normal JS Variable
  let normVar = null;
  // Conditional rendering
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filterData = listOfRestaurants.filter((res) => {
                return res.data.name.toLowerCase() === searchText.toLowerCase();
              });
              console.log(filterData);
              setfilterData(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          //   onClick={() => {
          //     const filterresList = listOfRestaurants.filter(
          //       (res) => res.data.avgRating > 4
          //     );
          //     setListOfRestaurant(filterresList);
          //   }}
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
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
