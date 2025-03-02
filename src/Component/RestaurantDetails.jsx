import "../App.css";
import { useContext } from "react";
import { RestaurantContext } from "../Component/RestaurantContext";
import MenuItem from "./MenuItem";

const RestaurantDetails = () => {
  const { restaurantData } = useContext(RestaurantContext);
  console.info("-------------------------------");
  console.info("restaurantData => ", restaurantData);
  console.info("-------------------------------");
  if (!restaurantData) return <p>No restaurant data available.</p>;
  const { restaurant, loaction, items } = restaurantData;

  return (
    <div className="restaurant-details">
      <h2>{restaurant}</h2>
      <p>
        Location: Latitude {loaction[1]}, Longitude {loaction[0]}
      </p>

      <h3>Menu Items</h3>
      <div className="menu-items">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
