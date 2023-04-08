import React from 'react';
import aboutHeader from '../../assets/images/about-2.png'
import '../styles/About.css';

export default function About() {
  return (
    <div>
      <div className="content-section-heading text-center">
        <h1 className="mb-0">About</h1>
        <p className="mb-5">This is who I am</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">

          <section class="container">
            <div class="row justify-content-center">
              <div className="row md-6 align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <img className="about" style={{ width: "100%" }} src={aboutHeader} alt="..." /></div>
                <div className="col-xl-4 col-lg-4">
                  <div className="featured-text text-left text-lg-left">
                    <h4>Hi I'm Rachel</h4>
                    <h6>Graphic Designer | Junior Developer</h6>
                    <p className="text-black-50 pt-2">I'm interested in storytelling on the digital platform to create a cohesive journey that optimizes site engagement, product discovery, conversion, and overall consumer experience via high-touch storytelling, visual design, and code.</p>
                  </div>
                  <div className="social d-flex justify-content-center">
                    <a className="social-icon fa-lg  mx-2" href="#https://github.com/RachelWildberger"><i className="fa-brands fa-github"></i></a>
                    <a className="social-icon fa-lg mx-2" href="#https://www.linkedin.com/in/rachelwildbergerdesigner/"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
