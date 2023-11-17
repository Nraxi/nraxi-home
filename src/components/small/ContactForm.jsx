import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';



const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleMailtoClick = () => {
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA to proceed.");
      return;
    }

    const email = process.env.REACT_APP_EMAILEN;
    const subject = 'Contact Form Submission';
    const body = `Message: ${message}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Optionally, you can reset the form fields and reCAPTCHA value here
    setMessage('');
    setRecaptchaValue(null);
  };


  return (
    <div>
      <h4>Mail Contact Me</h4>
      <form>
        <label htmlFor="message">Message:</label><br />
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          value={message}
          onChange={handleInputChange}
          required
        ></textarea><br />

        {/* Add the reCAPTCHA component */}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITEKEY}
          onChange={handleRecaptchaChange}
        /><br />

        {/* Button to trigger the mailto link */}
        <button type="button" onClick={handleMailtoClick}>
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
