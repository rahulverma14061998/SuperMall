import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ user, setUser, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null); // Clear user state
    navigate("/login"); // Redirect to login page
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#343a40" }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link
          className="navbar-brand text-white"
          to="/"
          style={{ fontWeight: "600", fontSize: "1.5rem" }}
        >
          SuperMall Web
        </Link>
        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/shops") ? "active text-warning" : "text-white"
                }`}
                to="/shops"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
              >
                Shops
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/compareProducts")
                    ? "active text-warning"
                    : "text-white"
                }`}
                to="/compareProducts"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
              >
                Compare Products
              </Link>
            </li>
          </ul>

          {/* Right Navigation Links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isActive("/login") ? "active text-warning" : "text-white"
                    }`}
                    to="/login"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isActive("/signup") ? "active text-warning" : "text-white"
                    }`}
                    to="/signup"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span
                    className="nav-link text-warning"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                  >
                    Welcome, {user.name}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link text-white"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/cart") ? "active text-warning" : "text-white"
                }`}
                to="/cart"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i className="bi bi-cart-fill me-2"></i> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
