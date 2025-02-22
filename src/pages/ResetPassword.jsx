import "../styles/ResetPassword.css";
import "../styles/Global.css";
import { useState } from "react";
import supabase from "../supabaseClient";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    setMessage(null);
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Password Reset Error:", error.message);
      setError("Failed to reset password. Please try again.");
    } else {
      setMessage("Password has been reset successfully!");
    }
  };

  return (
    <div className="reset-password-page">
      <h2>Reset Your Password</h2>

      <div className="password-wrapper">
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="reset-password-input"
          required
        />
      </div>

      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="reset-password-input"
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

      {/* Live Feedback on Password Match */}
      {confirmPassword && (
        <p
          className={
            newPassword === confirmPassword
              ? "password-match-success"
              : "password-match-error"
          }
        >
          {newPassword === confirmPassword
            ? "Passwords match!"
            : "Passwords do not match."}
        </p>
      )}

      <button
        className="reset-password-button"
        onClick={handleResetPassword}
        disabled={newPassword !== confirmPassword || newPassword === ""}
      >
        Reset Password
      </button>

      {/* Feedback Messages */}
      {message && <p className="reset-password-success">{message}</p>}
      {error && <p className="reset-password-error">{error}</p>}
    </div>
  );
};

export default ResetPasswordPage;