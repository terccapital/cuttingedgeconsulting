import "../styles/LoginPage.css";
import "../styles/Global.css";
import { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login Error:", error.message);
      setError(error.message);
    } else {
      console.log("Login Successful:", data);
      setSuccess("Login successful!");

      // Check if the profile exists for the user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError || !profile) {
          console.log("No profile found, redirecting to account setup...");
          navigate("/create-account"); // Redirect to setup questions
        } else {
          console.log("Profile found, redirecting to profile page...");
          navigate("/profile"); // Redirect to profile page
        }
      }
    }
  };

  return (
    <div className="login-page">
      {/* Left Section: Image */}
      <div className="login-image"></div>

      {/* Right Section: Logo + Form */}
      <div className="login-right">
        <div className="login-logo-bar">
          <img src="/cec-logo-white.png" alt="CEC Logo" className="login-logo" />
        </div>

        {/* Form Section */}
        <div className="login-form-container">
          <h2 className="login-title">Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                required
              />
              <label className="switch">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>
          </form>

          {success && <p className="login-success">{success}</p>}
          {error && <p className="login-error">{error}</p>}

          {/* Forgot Password Link */}
          <p className="login-clause">
            <a href="/forgot-password">Forgot Password?</a>
          </p>

          {/* Sign-Up Clause */}
          <p className="login-clause">
            Don't have an account? <a href="/create-user">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;