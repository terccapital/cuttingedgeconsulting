import "../styles/ResetPassword.css";
import "../styles/Global.css";
import { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!data.session) {
        setError("Session not found. Please request a new password reset.");
      }
    };
    checkSession();
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Password Reset Error:", error.message);
      setError("Failed to reset password. Please try again.");
    } else {
      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div className="reset-password-page">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button className="reset-password-button">Reset Password</button>
      </form>

      {success && <p className="reset-password-success">{success}</p>}
      {error && <p className="reset-password-error">{error}</p>}
    </div>
  );
};

export default ResetPasswordPage;
