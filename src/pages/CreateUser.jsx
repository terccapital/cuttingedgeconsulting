import "../styles/CreateUser.css";
import "../styles/Global.css";
import { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const passwordsMatch = password === confirmPassword && password !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      setError("This email is already registered. Please use a different email or sign in.");
      return;
    }

    // Proceed with Sign-Up
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: import.meta.env.VITE_SUPABASE_REDIRECT_LOGIN,
      },
    });

    if (error) {
      console.error("Sign Up Error:", error.message);
      setError(error.message);
    } else {
      console.log("User Signed Up:", data);
      setSuccess("Account created successfully! Please check your email to verify your account before logging in.");
      navigate("/login");
    }
  };

  return (
    <div className="create-user-page">
      {/* Left Section: Image */}
      <div className="create-user-image"></div>

      {/* Right Section: Logo + Form */}
      <div className="create-user-right">
        <div className="create-user-logo-bar">
          <img src="/cec-logo-white.png" alt="CEC Logo" className="create-user-logo" />
        </div>

        {/* Form Section */}
        <div className="create-user-form-container">
          <h2 className="create-user-title">Get Started</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />

            {/* Initial Password Input (No Toggle) */}
            <div className="password-wrapper">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                required
              />
            </div>

            {/* Confirm Password Input (With Toggle) */}
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="password-input"
                required
              />
              <label className="switch">
                <input
                  type="checkbox"
                  checked={showConfirmPassword}
                  onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                />
                <span className="slider"></span>
              </label>
            </div>

            {/* Password Match Feedback */}
            {confirmPassword && (
              <p
                className={passwordsMatch ? "password-match-success" : "password-match-error"}
              >
                {passwordsMatch ? "Passwords match!" : "Passwords do not match."}
              </p>
            )}

            {/* Create Account Button */}
            <button
              type="submit"
              className="create-user-button"
              disabled={!passwordsMatch}
            >
              Create Account
            </button>
          </form>

          {success && <p className="create-user-success">{success}</p>}
          {error && <p className="create-user-error">{error}</p>}

          {/* Sign-In Clause */}
          <p className="create-user-clause">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;


