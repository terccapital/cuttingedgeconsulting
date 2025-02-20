import React, { useState } from "react";
import "../styles/LoginModal.css";
import "../styles/Global.css";

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login/Sign Up

  if (!isOpen) return null; // If modal is not open, return nothing

  return (
    <div className="overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        {/* Logo */}
        <img src="/cec-logo-small.png" alt="CEC Logo" className="modal-logo" />

        {/* Title */}
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

        {/* Form */}
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignUp ? "Create Account" : "Login"}</button>
        </form>

        {/* Toggle Login/Signup */}
        <p className="toggle-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? " Log in" : " Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;