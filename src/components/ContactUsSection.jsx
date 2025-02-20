import "../styles/ContactUsSection.css";
import "../styles/Global.css";
import { useState } from "react";
import supabase from "../supabaseClient";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // Pop-up state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Insert form data into Supabase
    const { data, error } = await supabase
      .from("contact_form") // Name of your Supabase table
      .insert([formData]);
  
    if (error) {
      console.error("Error submitting form:", error.message);
    } else {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-section">
      {/* Left Side - Contact Info */}
      <div className="contact-info">
        <h2 className="contact-title">Contact Us</h2>
        <p>contact@cuttingedgeconsulting.tech</p>
        <p>(704) 941-8346</p>
        <p>Headquartered in Charlotte, NC</p>
      </div>

      {/* Right Side - Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name <span className="required">(required)</span></label>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email <span className="required">(required)</span></label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>How can we help you? <span className="required">(required)</span></label>
          <textarea
            name="message"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-btn">Send</button>
      </form>
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup">
            <img src="/cec-logo-small.png" alt="Logo" className="popup-logo" />
            <p>Thank you! We will be in touch soon.</p>
            </div>
        </div>
        )}
    </section>
  );
};

export default ContactUsSection;
