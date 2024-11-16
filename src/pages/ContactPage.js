import React from "react";
import "./ContactPage.css"; // Make sure to import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        If you have any questions, feel free to reach out!
      </p>

      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name" className="contact-form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="contact-form-input"
            required
          />

          <label htmlFor="email" className="contact-form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="contact-form-input"
            required
          />

          <label htmlFor="message" className="contact-form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="contact-form-textarea"
            required
          ></textarea>

          <button type="submit" className="contact-form-submit">
            Send Message
          </button>
        </form>
      </div>

      <div className="personal-message">
        <p>Plant Zone</p>
      </div>
    </div>
  );
};

export default ContactPage;
