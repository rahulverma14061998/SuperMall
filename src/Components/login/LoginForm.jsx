import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUser, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/getUsers"
      );
      const users = response.data;

      // Check if email and password match any user
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setMessage("Login successful!");
        setIsLoggedIn(true)
        setUser(user); // Update the user state
        navigate("/"); // Redirect to home or dashboard
      } else {
        setMessage("Invalid email or password!");
      }
    } catch (error) {
      console.error("API Error:", error);
      setMessage("Login failed! Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <div className="card-body p-4">
          <h3 className="text-center mb-4 text-primary">Welcome Back!</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ borderRadius: "20px" }}
            >
              Login
            </button>
          </form>
          {message && (
            <div
              className={`alert mt-3 text-center ${
                message === "Login successful!"
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
