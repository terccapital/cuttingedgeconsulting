import "../styles/CreateProfile.css";
import "../styles/Global.css";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const CreateProfile = () => {
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
    <div className="create-profile-page">
      <div className="create-profile-container">
        <img src="/cec-logo-white.png" alt="CEC Logo" className="create-profile-logo" />

        {/* Step 1: Enter Name and Company Info */}
        {step === 1 && (
          <>
            <h2 className="create-profile-title">Tell us about yourself</h2>
            <form onSubmit={handlePersonalInfoSubmit} className="profile-info-form">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="profile-info-input"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="profile-info-input"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="profile-info-input"
                required
              />
              <button type="submit" className="profile-type-button">Continue</button>
            </form>
          </>
        )}

        {/* Step 2: Select User Type */}
        {step === 2 && (
          <>
            <h2 className="create-profile-title">What best describes you?</h2>
            <div className="profile-type-options">
              <button onClick={() => handleSelection("Client")} className="profile-type-button">Client</button>
              <button onClick={() => handleSelection("Contractor")} className="profile-type-button">Contractor</button>
              <button onClick={() => handleSelection("Both")} className="profile-type-button">Both</button>
            </div>
          </>
        )}

        {/* Step 3: Confirm Selection */}
        {step === 3 && (
          <>
            <h2 className="create-profile-title">Confirm: {userType}?</h2>
            <div className="profile-type-options">
              <button onClick={() => handleConfirmation("yes")} className="profile-type-button">Yes</button>
              <button onClick={() => handleConfirmation("no")} className="profile-type-button">No</button>
            </div>
          </>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <>
            <h2 className="create-profile-title">You're all set!</h2>
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

export default CreateProfile;

