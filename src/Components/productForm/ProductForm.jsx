import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: 0,
    shop: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };

    try {
      const response = await fetch(
        "https://supermall-backend.onrender.com/api/products/createProduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Product saved successfully!");
        setFormData({
          name: "",
          description: "",
          price: "",
          stock: 0,
          shop: "",
          category: "",
        });
      } else {
        alert("Failed to save product!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred!");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <h2 className="text-center mb-4">Product Details</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="form-control"
            rows="3"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="shop" className="form-label">
            Shop ID:
          </label>
          <input
            type="text"
            id="shop"
            name="shop"
            value={formData.shop}
            onChange={handleChange}
            placeholder="Enter shop ID"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter product category"
            className="form-control"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
