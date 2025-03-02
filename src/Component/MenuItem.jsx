const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
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
