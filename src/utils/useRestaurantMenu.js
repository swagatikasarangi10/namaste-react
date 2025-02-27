import { useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/" + resId);

    const json = await data.json();

    setResInfo(json);
  };
};
export default useRestaurantMenu;
