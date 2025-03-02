const Modal = ({ item, onClose }) => {
  console.info("item => ", item);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>{item.name}</h2>
        <img src={item?.image} alt="" />
        <p>
          <strong>Restaurant:</strong> {item.restaurant.name}
        </p>
        <p>
          <strong>Description:</strong> {item.description}
        </p>
        <p>
          <strong>Price:</strong> ₹{item.price}
        </p>
        <p>
          <strong>Category:</strong> {item.category}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {item.avg_rating}
        </p>
        <p>
          <strong>Ingredients:</strong> {item.ingredients.join(", ")}
        </p>
        <p>
          <strong>Availability:</strong>{" "}
          {item.availability ? "🟢 Available" : "🔴 Not Available"}
        </p>
      </div>
    </div>
  );
};

export default Modal;
