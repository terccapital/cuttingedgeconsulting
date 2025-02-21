import "../styles/LoginPage.css";
import "../styles/Global.css";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with", { email, password });
    // Placeholder for future signup logic
  };

  return (
    <div className="login-page">
      {/* Left Section: Sign Up */}
      <div className="login-left">
        <img src="/cec-logo-white.png" alt="CEC Logo" className="login-logo" />

        <div className="login-container">
          <h2 className="login-title">Get Started</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>

          {/* Sign-In Clause */}
          <p className="signup-clause">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="signin-right"></div>
    </div>
  );
};

export default SignUpPage;

