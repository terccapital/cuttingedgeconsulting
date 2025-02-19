import "../styles.css";
import { useState } from "react";
import supabase from "../supabaseClient";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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
      console.log("Form submitted successfully!", data);
      alert("Thank you! We’ll be in touch soon.");
      setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Clear form
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
    </section>
  );
};

export default ContactUsSection;
