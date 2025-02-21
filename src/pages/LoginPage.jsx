import "../styles/LoginPage.css";
import "../styles/Global.css";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="login-page">
      {/* Left Section: Image */}
      <div className="login-image"></div>

      {/* Right Section: Logo + Form */}
      <div className="login-right">
        {/* Top Logo */}
        <div className="login-logo-bar">
          <img src="/cec-logo-white.png" alt="CEC Logo" className="login-logo" />
        </div>

        {/* Form Section */}
        <div className="login-form-container">
          <h2 className="login-title">Welcome Back</h2>
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
              Log In
            </button>
          </form>

          {/* Sign-Up Clause */}
          <p className="login-clause">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



