import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopDetail = () => {
  const { shopName } = useParams(); // Get shopName from URL
  const [shop, setShop] = useState(null);

  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/shops/shopName/${shopName}`
        ); // Assuming API supports filtering by shop name
        if (!response.ok) {
          throw new Error("Failed to fetch shop details");
        }
        const data = await response.json();
          setShop(data);
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    };

    fetchShopDetails();
  }, [shopName]);

  if (!shop) {
    return <div className="text-center mt-4">Loading shop details...</div>;
  }
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{shop.shopName}</h1>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Owned by: {shop.ownerName}</h5>
          <p className="card-text">
            <strong>Category:</strong> {shop.category}
          </p>
          <p className="card-text">
            <strong>Location:</strong> {shop.location}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {shop.rating} ⭐
          </p>
          <p className="card-text">
            <strong>Description:</strong> {shop.description}
          </p>
          <p className="card-text">
            <strong>Contact:</strong> {shop.contact}
          </p>
          <p className="card-text">
            <strong>Created At:</strong>{" "}
            {new Date(shop.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
