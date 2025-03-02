import React, { createContext, useState, useEffect } from "react";

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState(
    JSON.parse(localStorage.getItem("restaurantData")) || []
  );
  const [loading, setLoading] = useState(false);

  const fetchRestaurants = async (city, lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://voiceassistantsuggestion.onrender.com/restaurants/top-items?longitude=${lon}&latitude=${lat}`
      );
      const data = await response.json();

      setRestaurantData(data);
      localStorage.setItem("restaurantData", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("restaurantData");
    if (savedData) {
      setRestaurantData(JSON.parse(savedData));
    }
  }, []); // Run only once when the component mounts

  return (
    <RestaurantContext.Provider
      value={{ restaurantData, fetchRestaurants, loading }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
