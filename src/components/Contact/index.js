import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import Wrapper from './ContactStyles';

const Contact = () => {
  const [state, handleSubmit] = useForm('mvolakkg');
  const [formSubmitted, setFormSubmitted] = useState(state.succeeded);

  useEffect(() => {
    if (state.succeeded) {
      setFormSubmitted(true);
      document.getElementById('form').reset();
      document.querySelector('.contact-form p').style.color = 'green';
      document.querySelector('.contact-form h2').style.visibility = 'hidden';

      const timer = setTimeout(() => {
        setFormSubmitted(false);
        document.querySelector('.contact-form p').style.color = '#fff';
        document.querySelector('.contact-form h2').style.visibility = 'visible';
      }, 3000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [state.succeeded]);

  return (
    <Wrapper id="contact" className="section-form">
      <div className="contact-form">
        <h2>Contact me</h2>
        <p>
          {formSubmitted
            ? 'Thank you for reaching out to me. I will get back to you as soon as possible.'
            : `If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it`}
        </p>
        <form id="form" method="POST" onSubmit={handleSubmit}>
          <input
            required
            id="name"
            type="text"
            name="name"
            maxLength="30"
            placeholder="Name"
          />
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            required
            id="message"
            name="message"
            maxLength="500"
            placeholder="Write your message here"
          />
          <button
            type="submit"
            className="form-btn"
            disabled={state.submitting}
          >
            Get In Touch
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
