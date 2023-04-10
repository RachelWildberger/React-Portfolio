import React from 'react';
import aboutPic from '../assets/images/about-2.png'
import './styles/About.css';

export default function About() {
  return (
    <div>

      <div className="container">
        <div className="row justify-content-center">

          <section className="container">
            <div className="row justify-content-center">
              <div className="row md-6 align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <img className="about" style={{ width: "100%" }} src={aboutPic} alt="..." /></div>
                <div className="col-xl-4 col-lg-4">
                  <div className="featured-text text-left text-lg-left">
                    <h4>Hi I'm Rachel</h4>
                    <h6>Graphic Designer | Junior Developer</h6>
                    <p className="text-black-50 pt-2">I'm interested in storytelling on the digital platform to create a cohesive journey that optimizes site engagement, product discovery, conversion, and overall consumer experience via high-touch storytelling, visual design, and code.</p>
                  </div>

                  <div className="container"><button className="btn btn-dark" type="button">View Portfolio</button></div>

                </div>

              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
