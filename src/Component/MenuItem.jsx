const MenuItem = ({ item, restaurant }) => {
  return (
    <div className="menu-item">
      {/* Restaurant Details */}
      <h2>{restaurant.name}</h2>
      <p>Rating: ⭐ {restaurant.rating}</p>
      <p>Contact: {restaurant.contact}</p>

      {/* Menu Item Details */}
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      <p>Category: {item.category}</p>
      <p>Rating: ⭐ {item.avg_rating}</p>
      <p>Ingredients: {item.ingredients.join(", ")}</p>
      {item.availability ? (
        <span>🟢 Available</span>
      ) : (
        <span>🔴 Not Available</span>
      )}
    </div>
  );
};

export default MenuItem;
