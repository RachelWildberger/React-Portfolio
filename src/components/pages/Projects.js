import React from 'react';
import '../styles/Projects.css';
import project1 from '../../assets/images/project-1.png'
import project2 from '../../assets/images/project-4.png'
import project3 from '../../assets/images/project-2.png'
import project4 from '../../assets/images/project-3.png'

export default function Projects() {
  return (
    <div>
      <section className="content-section" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h1 className="mb-0">Portfolio</h1>
            <p className="mb-">Recent Projects</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/RachelWildberger/PWA-Text-Editor">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">PWA: Text Editor</div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                </div>
              </div>
              <a className="img-fluid" href="https://github.com/RachelWildberger/PWA-Text-Editor"><img className="project1" style={{ width: "100%"}} src={project1} alt="Responsive image" /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/btkerns96/get-a-job">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Get a Job: Job Board</div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                </div>
              </div>
              <a className="img-fluid"  href="https://github.com/btkerns96/get-a-job"><img className="project2" src={project2} style={{ width: "100%"}} alt="Responsive image" /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/RachelWildberger/Social-Network-API">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2 ">NoSQL: Socil Network API</div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                </div>
              </div>
              <a className="img-fluid" href="https://github.com/RachelWildberger/Social-Network-API"><img className="project3 " style={{ width: "100%"}} src={project3} alt="Responsive image" /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/RachelWildberger/Employee-Tracker">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Employee Tracker</div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                </div>
              </div>
              <a className="img-fluid"  href="https://github.com/RachelWildberger/Employee-Tracker"><img className="project4" src={project4} style={{ width: "100%"}} alt="Responsive image" /></a>
            </a>
          </div>


          </div>

        </div>
        </div>
      </section>
    </div>
  );
}
