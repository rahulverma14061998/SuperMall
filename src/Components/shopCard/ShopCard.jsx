import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopCard = () => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  // Fetch shop data from the server
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch(
          "https://supermall-backend.onrender.com/api/shops/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch shop data");
        }
        const data = await response.json();
        setShops(data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };

    fetchShops();
  }, []);

  const handleViewDetails = (shopName) => {
    navigate(`/shop/${encodeURIComponent(shopName)}`); // Navigate to the Shop Detail page
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Explore Shops</h2>
      <div className="row gy-4">
        {shops.map((shop) => (
          <div className="col-lg-4 col-md-6" key={shop._id}>
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <div className="card-body">
                <h5 className="card-title text-truncate">{shop.shopName}</h5>
                <p className="card-text text-muted text-truncate">
                  {shop.description || "No description available."}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Category:</strong> {shop.category || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> {shop.location || "Not specified"}
                </li>
                <li className="list-group-item">
                  <strong>Rating:</strong> {shop.rating || "No rating"}
                </li>
              </ul>
              <div className="card-footer d-flex justify-content-between">
                <button
                  onClick={() => handleViewDetails(shop.shopName)}
                  className="btn btn-primary btn-sm"
                  title="View shop details"
                >
                  View Details
                </button>
                <a
                  href={`tel:${shop.contact}`}
                  className="btn btn-success btn-sm"
                  title="Contact the shop owner"
                >
                  Contact Owner
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
