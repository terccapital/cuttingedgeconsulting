import "../styles/SignUpPage.css";
import "../styles/Global.css";
import { useState } from "react";
import supabase from "../supabaseClient";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Supabase Sign-Up Logic
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign Up Error:", error.message);
      setError(error.message);
    } else {
      console.log("Sign Up Successful", data);
      setSuccess("Account created successfully! Please check your email to verify your account.");
    }
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

          {/* Display Success or Error Messages */}
          {success && <p className="signup-success">{success}</p>}
          {error && <p className="signup-error">{error}</p>}

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



