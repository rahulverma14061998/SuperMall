import React from "react";
import { useCart } from "../../store/Store";
import { useNavigate } from "react-router-dom"; // For navigation

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price, 0);

  const handleBuyNow = () => {
    navigate("/payment-options", {
      state: { cart, totalPrice: getTotalPrice() },
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <h4 className="text-center mt-4">Your cart is empty.</h4>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://supermall-backend.onrender.com/uploads/${item.images[0]}`}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h4 className="text-center mt-4">Total Price: ₹{getTotalPrice()}</h4>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-4" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
