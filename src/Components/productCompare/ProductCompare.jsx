import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCompare = () => {
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/compare/compare",
        {
          productNames: [product1, product2],
        }
      );
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching comparison data:", err);
      setError("Unable to fetch comparison data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-4"
        style={{ fontWeight: "600", color: "#333" }}
      >
        Compare Products
      </h2>

      {/* Form for entering product names */}
      <form className="mb-5" onSubmit={handleCompare}>
        <div className="form-row mb-3">
          <div className="form-group col-md-6">
            <label
              htmlFor="product1"
              className="form-label"
              style={{ fontSize: "1.1rem", fontWeight: "500" }}
            >
              Product 1
            </label>
            <input
              type="text"
              className="form-control"
              id="product1"
              placeholder="Enter Product Name"
              value={product1}
              onChange={(e) => setProduct1(e.target.value)}
              required
              style={{ borderRadius: "0.375rem", padding: "0.8rem" }}
            />
          </div>
          <div className="form-group col-md-6">
            <label
              htmlFor="product2"
              className="form-label"
              style={{ fontSize: "1.1rem", fontWeight: "500" }}
            >
              Product 2
            </label>
            <input
              type="text"
              className="form-control"
              id="product2"
              placeholder="Enter Product Name"
              value={product2}
              onChange={(e) => setProduct2(e.target.value)}
              required
              style={{ borderRadius: "0.375rem", padding: "0.8rem" }}
            />
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ padding: "1rem", fontSize: "1.2rem" }}
          >
            Compare
          </button>
        </div>
      </form>

      {/* Loading spinner */}
      {loading && (
        <div className="text-center my-3" style={{ fontSize: "1.2rem" }}>
          Loading...
        </div>
      )}

      {/* Error message */}
      {error && <div className="alert alert-danger my-3">{error}</div>}

      {/* Comparison Table */}
      {products.length === 2 && (
        <div className="table-responsive">
          <table
            className="table table-bordered"
            style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <thead className="thead-dark">
              <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                <th>Feature</th>
                <th>{products[0].name}</th>
                <th>{products[1].name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                <td>
                  <img
                    src={products[0].images[0]}
                    alt={products[0].name}
                    className="img-fluid"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </td>
                <td>
                  <img
                    src={products[1].images[0]}
                    alt={products[1].name}
                    className="img-fluid"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{products[0].description}</td>
                <td>{products[1].description}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td style={{ fontWeight: "600", color: "#28a745" }}>
                  ₹{products[0].price}
                </td>
                <td style={{ fontWeight: "600", color: "#28a745" }}>
                  ₹{products[1].price}
                </td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>{products[0].stock} available</td>
                <td>{products[1].stock} available</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{products[0].category}</td>
                <td>{products[1].category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductCompare;
