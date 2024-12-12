import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/Store"; // Import Cart Context

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart(); // Access cart functions from context
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://supermall-backend.onrender.com/api/products/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleToggleCart = (product) => {
    if (cart.some((item) => item._id === product._id)) {
      removeFromCart(product._id);
    } else {
      addToCart(product);
    }
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  const handleViewDetails = (productName) => {
    navigate(`/product/${encodeURIComponent(productName)}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row gy-4">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6" key={product._id}>
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.name}</h5>
                <p className="card-text text-muted text-truncate">
                  {product.description || "No description available."}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Price:</strong> ₹{product.price}
                </li>
                <li className="list-group-item">
                  <strong>Stock:</strong> {product.stock}
                </li>
                <li className="list-group-item">
                  <strong>Category:</strong>{" "}
                  {product.category || "Uncategorized"}
                </li>
              </ul>
              <div className="card-footer d-flex justify-content-between">
                <button
                  onClick={() => handleViewDetails(product.name)}
                  className="btn btn-primary btn-sm"
                  title="View product details"
                >
                  View Product
                </button>
                <button
                  onClick={() => handleToggleCart(product)}
                  className={`btn btn-sm ${
                    cart.some((item) => item._id === product._id)
                      ? "btn-danger"
                      : "btn-success"
                  }`}
                  title={
                    cart.some((item) => item._id === product._id)
                      ? "Remove from cart"
                      : "Add to cart"
                  }
                >
                  {cart.some((item) => item._id === product._id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View Cart Button */}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <button onClick={handleViewCart} className="btn btn-warning btn-lg">
            View Cart ({cart.length} Items)
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
