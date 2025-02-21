import "../styles/SignUpPage.css";
import "../styles/Global.css";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with", { email, password });
  };

  return (
    <div className="signup-page">
      {/* Left Section: Image */}
      <div className="signup-image"></div>

      {/* Right Section: Logo + Form */}
      <div className="signup-right">
        {/* Top Logo */}
        <div className="signup-logo-bar">
          <img src="/cec-logo-white.png" alt="CEC Logo" className="signup-logo" />
        </div>

        {/* Form Section */}
        <div className="signup-form-container">
          <h2 className="signup-title">Get Started</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
              required
            />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>

          {/* Sign-In Clause */}
          <p className="signup-clause">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;


