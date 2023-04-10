import React, { useState } from 'react';
import './styles/Contact.css';

import { validateEmail } from '../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
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
      setErrorMessage('Email or username is invalid');
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
      <div className="content-section-heading text-center">
        <h1 className="mb-0">Contact</h1>
        <p className="mb-5">Please fill out the form below:</p>
      </div>

      <section className="page-section">
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form className="contact-form" name="contact-form" action="mail.php" method="POST">

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
                      rows="3" 
                      value={message}
                      name="message"
                      onChange={handleInputChange}
                      type="message"
                      placeholder="Your Message"
                    />
                  </div>
                </div>                
              </div>
          </form>
          <div className="d-grid"><button className="btn btn-dark" type="button" onClick={handleFormSubmit}>Submit</button></div>

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

export default Form;
