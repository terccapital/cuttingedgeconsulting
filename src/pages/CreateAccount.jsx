import "../styles/CreateAccount.css";
import "../styles/Global.css";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const CreateAccount = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize navigation

  // Handle personal info submission
  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && company) {
      setStep(2);
    }
  };

  // Handle user type selection
  const handleSelection = (type) => {
    setUserType(type);
    setStep(3);
  };

  // Handle confirmation
  const handleConfirmation = async (answer) => {
    if (answer === "yes") {
      // Insert profile data into Supabase
      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError) {
        setError("Failed to fetch user ID");
        return;
      }

      const { data, error } = await supabase.from("profiles").upsert([
        {
          id: user.user.id, // Foreign key linked to auth.users
          first_name: firstName,
          last_name: lastName,
          company: company,
          user_type: userType,
        },
      ]);

      if (error) {
        console.error("Error inserting profile:", error.message);
        setError("Failed to create profile.");
      } else {
        console.log("Profile created successfully:", data);
        setSuccess("Profile created successfully!");
        setStep(4);

        // Redirect to the profile page after a short delay
        setTimeout(() => {
          navigate("/profile");
        }, 2000); // Redirect after 2 seconds
      }
    } else {
      setUserType(null);
      setStep(2);
    }
  };

  // Handle going back
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <img src="/cec-logo-white.png" alt="CEC Logo" className="create-account-logo" />

        {/* Step 1: Enter Name and Company Info */}
        {step === 1 && (
          <>
            <h2 className="create-account-title">Tell us about yourself</h2>
            <form onSubmit={handlePersonalInfoSubmit} className="account-info-form">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="account-info-input"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="account-info-input"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="account-info-input"
                required
              />
              <button type="submit" className="account-type-button">Continue</button>
            </form>
          </>
        )}

        {/* Step 2: Select User Type */}
        {step === 2 && (
          <>
            <h2 className="create-account-title">What best describes you?</h2>
            <div className="account-type-options">
              <button onClick={() => handleSelection("Client")} className="account-type-button">Client</button>
              <button onClick={() => handleSelection("Contractor")} className="account-type-button">Contractor</button>
              <button onClick={() => handleSelection("Both")} className="account-type-button">Both</button>
            </div>
          </>
        )}

        {/* Step 3: Confirm Selection */}
        {step === 3 && (
          <>
            <h2 className="create-account-title">Confirm: {userType}?</h2>
            <div className="account-type-options">
              <button onClick={() => handleConfirmation("yes")} className="account-type-button">Yes</button>
              <button onClick={() => handleConfirmation("no")} className="account-type-button">No</button>
            </div>
          </>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <>
            <h2 className="create-account-title">You're all set!</h2>
            {success ? (
              <p className="selection-confirmation">
                {success} Redirecting to your profile...
              </p>
            ) : (
              <p className="signup-error">{error}</p>
            )}
          </>
        )}

        {/* Back Button */}
        {step > 1 && step < 4 && (
          <button className="back-button" onClick={handleBack}>
            <ArrowLeft size={20} /> Back
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;

