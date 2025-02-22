import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const ConfirmEmail = () => {
  const [status, setStatus] = useState("Confirming...");
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      const { error } = await supabase.auth.verifyOtp({
        type: "email",
        token_hash: window.location.hash.split("access_token=")[1]?.split("&")[0],
      });

      if (error) {
        console.error("Email confirmation error:", error.message);
        setStatus("Invalid or expired confirmation link.");
      } else {
        setStatus("Email confirmed! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // Redirect to login after confirmation
        }, 3000);
      }
    };

    confirmEmail();
  }, [navigate]);

  return (
    <div className="confirm-page">
      <h2>{status}</h2>
    </div>
  );
};

export default ConfirmEmail;