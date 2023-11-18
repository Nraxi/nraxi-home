import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [state, handleSubmit] = useForm("xrgwvyed");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    // Dynamically load reCAPTCHA script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup to remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div>
      <h4>Mail Contact Me</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email Address</label>
        <br />
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <br />
        <label htmlFor="message">Your Message here</label>
        <textarea
          id="message"
          name="message"
          rows="10"
          cols="40"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* Radio buttons for custom validation */}
        <div>
          <input
            type="radio"
            id="option1"
            name="options"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option1">Option 1</label>
        </div>

        <div>
          <input
            type="radio"
            id="option2"
            name="options"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option2">Option 2</label>
        </div>

        <ValidationError
          prefix="Options"
          field="options"
          errors={state.errors}
        />
        {/* reCAPTCHA widget */}
        <div className="g-recaptcha" data-sitekey="6Lf3mhoeAAAAAADJtupMSieOpPauL__WRT7fTO_c"></div>

        <button type="submit" disabled={state.submitting || !selectedOption}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
