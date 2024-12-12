import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentOptions = () => {
  const location = useLocation();
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

  const handlePayment = async (paymentMethod) => {
    const amount = totalPrice * 100; // Convert to paise

    try {
      // Step 1: Create an order in the backend
      const { data: order } = await axios.post(
        "http://localhost:5000/create-order",
        { amount }
      );

      // Step 2: Define Razorpay options
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Your Razorpay Key ID
        amount: order.amount,
        currency: "INR",
        name: "Your Store Name",
        description: "Thank you for your purchase!",
        image: "https://yourstorelogo.com/logo.png", // Optional: Store logo URL
        order_id: order.id, // Order ID received from backend
        handler: function (response) {
          // Handle successful payment here
          alert("Payment Successful!");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Step 3: Open Razorpay Checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error during payment. Please try again later.");
    }
  };

  return (
    <div className="container mt-5 py-4">
      <h2 className="text-center text-primary mb-4">Payment Options</h2>
      <p className="text-center fs-4 text-muted mb-4">
        Total Amount: ₹{totalPrice}
      </p>

      <div className="row justify-content-center">
        {/* Payment options */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn btn-lg btn-success mb-3 w-100 shadow-lg"
              onClick={() => handlePayment("card")}
            >
              <i className="bi bi-credit-card-fill"></i> Pay with Credit/Debit
              Card
            </button>
            <button
              className="btn btn-lg btn-warning mb-3 w-100 shadow-lg"
              onClick={() => handlePayment("upi")}
            >
              <i className="bi bi-qr-code-scan"></i> Pay with UPI
            </button>
            <button className="btn btn-lg btn-info mb-3 w-100 shadow-lg">
              <i className="bi bi-cash-coin"></i> Cash on Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
