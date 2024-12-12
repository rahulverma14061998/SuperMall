import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ShopForm = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    category: "",
    location: "",
    rating: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/shops/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Shop saved successfully!");
        setFormData({
          shopName: "",
          ownerName: "",
          category: "",
          location: "",
          rating: "",
          description: "",
          contact: "",
        });
      } else {
        const error = await response.json();
        alert("Failed to save shop!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred!");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <h2 className="text-center mb-4">Shop Details</h2>

        <div className="mb-3">
          <label htmlFor="shopName" className="form-label">
            Shop Name:
          </label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            placeholder="Enter shop name"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ownerName" className="form-label">
            Owner Name:
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Enter owner name"
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
            placeholder="Enter shop category"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter shop location"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter rating (optional)"
            className="form-control"
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
            placeholder="Enter shop description"
            className="form-control"
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact number"
            className="form-control"
            required
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

export default ShopForm;
