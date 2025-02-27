import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   console.log(resId);

  //   const data = await fetch("https://dummyjson.com/recipes/" + resId);
  //   console.log(resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  //   console.log(resInfo);
  // };
  if (resInfo === null) return <Shimmer />;
  const { cookTimeMinutes, cuisine, id, image, name, rating, prepTimeMinutes } =
    resInfo;
  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <h3>{name}</h3>
    </div>
  );
};
export default RestaurantMenu;
