import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantProvider from "./Component/RestaurantContext";
import RestaurantDetails from "./Component/RestaurantDetails";
import Homepage from "./Component/Homepage";

const App = () => {
  return (
    <RestaurantProvider>
      <div className="video-container">
        <video
          src="https://cdn.dribbble.com/userupload/13391587/file/original-c2fc6f1a7cd4b57bbae21a246e09c763.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurant" element={<RestaurantDetails />} />
        </Routes>
      </Router>
    </RestaurantProvider>
  );
};

export default App;
