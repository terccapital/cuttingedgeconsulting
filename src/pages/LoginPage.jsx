import "../styles/LoginPage.css";
import "../styles/Global.css";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
    // Add Supabase login logic here
  };

  return (
    <div className="login-page">
      {/* Left Section: Login */}
      <div className="login-left">
        <img src="/cec-logo-white.png" alt="CEC Logo" className="login-logo" />

        <div className="login-container">
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
          <p className="signup-clause">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="login-right"></div>
    </div>
  );
};

export default LoginPage;

