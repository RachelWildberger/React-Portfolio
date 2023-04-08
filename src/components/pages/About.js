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
                <div className="col-xl-8 col-lg-8"><img className="about" style={{ width: "100%" }} src={aboutHeader} alt="Responsive image" /></div>
                <div className="col-xl-4 col-lg-4">
                  <div className="featured-text text-left text-lg-left">
                    <h4>Hi I'm Rachel</h4>
                    <h6>Graphic Designer | Junior Developer</h6>
                    <p className="text-black-50 pt-2">Junior Full-Stack Web Developer and accomplished Graphic Designer with 10+ years of agency and design experience. Specializing in UX UI, front-end web projects, brand-identity, marketing campaigns, e-commerce and digital content production.</p>
                    <p className="text-black-50 pt-2">Inspired to create playful and smart experiences, using problem solving through sleek, sophisticated design and development. With both creative and technical ability, ready for any challenging project from ideation to creation.</p>
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
