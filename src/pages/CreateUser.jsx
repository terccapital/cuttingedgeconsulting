import "../styles/CreateUser.css";
import "../styles/Global.css";
import { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Check if email already exists in auth.users
    const { data: existingUser, error: checkError } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      setError("This email is already registered. Please use a different email or sign in.");
      return;
    }

    // Proceed with Sign-Up if email doesn't exist
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign Up Error:", error.message);
      setError(error.message);
    } else {
      console.log("User Signed Up:", data);
      setSuccess("Account created successfully! Please check your email to verify your account before logging in.");

      // Redirect to login after a brief delay
      setTimeout(() => {
        navigate("/login"); // Redirects to login page after 3 seconds
      }, 3000);
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

            <button type="submit" className="create-user-button">
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


