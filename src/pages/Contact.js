import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import './styles/Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    if (!setMessage(message)) {
      setErrorMessage(
        `A message is required.`
      );
      return;
    }

    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <div className="mt-3">
                <h3 className="h4 mb-2">Email:</h3>
                
                <a className="contact" href="mailto://rachelwildberger@icloud.com">rachelwildberger@icloud.com</a>
              </div>
            </div>
            <div className="col-sm text-center">
              <div className="mt-3">
             <h3 className="h4 mb-2">Phone:</h3>
                <a className="contact" href="tel:213.921.0610">213.921.0610</a>
              </div>
            </div>
          </div>
        </div>
      <div className="content-section-heading text-center">
        <h1 className="mb-0">Questions</h1>
        <p className="mb-5">Please fill out the form below:</p>
      </div>

      <section className="page-section">
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form className="contact-form">

            <div className="form-group">
              <div className="form-floating mb-3">
                  <div className="md-form mb-0">
                    <input className='form-control'
                      value={userName}
                      name="userName"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
              </div>
            </div>
              <div className="form-group">
                <div className="form-floating mb-3">
                  <div className="md-form mb-0">
                    <input className='form-control'
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-floating mb-3">
                  <div className="md-form mb-0">
                    <textarea className='form-control'
                      rows="4" 
                      value={message}
                      name="message"
                      onChange={handleInputChange}
                      type="message"
                      placeholder="Your Message"
                    />
                  </div>
                </div>                
              </div>

          <div className="d-grid">
            <button className="btn btn-dark" type="submit" onClick={handleFormSubmit}>Submit</button></div>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
