import React, { createContext, useState, useEffect } from "react";

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(false);

  const mockRestaurantData = {
    restaurant: "Kyani & Co.",
    loaction: [72.8278, 18.9412],
    items: [
      {
        _id: "67c2e50bb98796db2ec896a6",
        name: "Mawa Cake",
        restaurant_id: "67c2e509b98796db2ec896a3",
        description: "Classic Parsi cake",
        price: 150,
        category: "Dessert",
        ingredients: ["Mawa", "Flour", "Sugar"],
        availability: true,
        avg_rating: 4.8,
        __v: 0,
      },
      {
        _id: "67c2e50bb98796db2ec896aa",
        name: "Irani Chai",
        restaurant_id: "67c2e509b98796db2ec896a3",
        description: "Strong and flavorful chai",
        price: 60,
        category: "Drink",
        ingredients: ["Tea", "Milk", "Sugar"],
        availability: true,
        avg_rating: 4.7,
        __v: 0,
      },
      {
        _id: "67c2e50bb98796db2ec896a8",
        name: "Bun Maska",
        restaurant_id: "67c2e509b98796db2ec896a3",
        description: "Soft bun with butter",
        price: 80,
        category: "Appetizer",
        ingredients: ["Bun", "Butter"],
        availability: true,
        avg_rating: 4.6,
        __v: 0,
      },
    ],
  };

  const fetchRestaurants = async (city, lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.example.com/restaurants?lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      setRestaurantData(data); // Store the fetched restaurant details
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRestaurantData(mockRestaurantData); // Set mock restaurant data
  }, []);

  console.info("-------------------------------");
  console.info("restaurantData => ", restaurantData);
  console.info("-------------------------------");

  return (
    <RestaurantContext.Provider
      value={{ restaurantData, fetchRestaurants, loading }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
