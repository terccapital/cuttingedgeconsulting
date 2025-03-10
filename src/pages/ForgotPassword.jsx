import "../styles/ForgotPassword.css";
import "../styles/Global.css";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: import.meta.env.VITE_SUPABASE_REDIRECT_RESET,
    });

    if (error) {
      console.error("Password Reset Error:", error.message);
      setError("Failed to send password reset email. Please try again.");
    } else {
      console.log("Reset email sent:", data);
      setMessage("Password reset email sent. Please check your inbox.");
    }
  };

  const handleBack = () => {
    navigate("/login"); // Redirect back to the login page
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <div className="forgot-password-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-password-input"
          required
        />
        <button className="forgot-password-button" onClick={handleReset}>
          Send Reset Email
        </button>
      </div>

      {message && <p className="forgot-password-success">{message}</p>}
      {error && <p className="forgot-password-error">{error}</p>}

      {/* Back Button */}
      <button className="forgot-password-back-button" onClick={handleBack}>
        <ArrowLeft size={20} /> Back
      </button>
    </div>
  );
};

export default ForgotPasswordPage;