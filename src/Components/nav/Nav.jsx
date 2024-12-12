import { Link } from "react-router-dom";

export default function Nav({ setDisplayShopForm }) {
  function handleClickShop() {
    setDisplayShopForm(true);
  }

  return (
    <ul
      className="nav justify-content-center"
      style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}
    >
      <li className="nav-item">
        <Link
          className="nav-link text-dark"
          aria-current="page"
          to="/createShop"
          onClick={handleClickShop}
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            padding: "0.75rem 1.25rem",
            borderRadius: "5px",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          Create Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link text-dark"
          to="createProduct"
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            padding: "0.75rem 1.25rem",
            borderRadius: "5px",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          Add Product
        </Link>
      </li>
    </ul>
  );
}
