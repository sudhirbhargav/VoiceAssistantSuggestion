import "../App.css";
import { useContext, useState } from "react";
import { RestaurantContext } from "../Component/RestaurantContext";
import MenuItem from "./MenuItem";
import Modal from "./Modal";

const RestaurantDetails = () => {
  const { restaurantData } = useContext(RestaurantContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };
  console.info("-------------------------------");
  console.info("restaurantData => ", restaurantData);
  console.info("-------------------------------");
  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="restaurant-details">
      {restaurantData.map(
        (restaurant) =>
          restaurant.top_menu_item && (
            <div
              key={restaurant._id}
              onClick={() =>
                handleOpenModal({ ...restaurant.top_menu_item, restaurant })
              }
            >
              <MenuItem
                item={restaurant.top_menu_item}
                restaurant={restaurant}
              />
            </div>
          )
      )}

      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default RestaurantDetails;
