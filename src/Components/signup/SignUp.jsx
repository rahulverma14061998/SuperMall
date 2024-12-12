import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://supermall-backend.onrender.com/api/auth/register",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMessage("Sign-up successful! Please log in.");
    } catch (error) {
      setMessage("Sign-up failed! Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <div className="card-body p-4">
          <h3 className="text-center mb-4 text-success">Create an Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-success w-100"
              style={{ borderRadius: "20px" }}
            >
              Sign Up
            </button>
          </form>
          {message && (
            <div className="alert mt-3 text-center" role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
