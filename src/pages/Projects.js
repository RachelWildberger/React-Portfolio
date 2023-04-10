import React from 'react';
import './styles/Projects.css';
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-4.png'
import project3 from '../assets/images/project-2.png'
import project4 from '../assets/images/project-3.png'

export default function Projects() {
  return (
    <div>
      <section className="content-section" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h1 className="mb-0">Projects</h1>
            <p className="mb-">Take a look at some of my recent Projects:</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/RachelWildberger/PWA-Text-Editor">
              <div className="caption">
                <div className="caption-content">
                  <div className="h3">PWA: Text Editor</div>
                  <p className="mb-4">This application is a web text editor that runs in the browser. This is a single-page application that meets the PWA criteria.</p>
                </div>
              </div>
              <a className="img-fluid" href="https://github.com/RachelWildberger/PWA-Text-Editor"><img className="project1" style={{ width: "100%"}} src={project1} alt="..." /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/btkerns96/get-a-job">
              <div className="caption">
                <div className="caption-content">
                  <div className="h3">Get a Job: Job Board</div>
                  <p className="mb-4">Built a Job Board site, where users can publish jobs, create an account, upload a resume, search jobs by keyword or location, and save job listings.</p>
                </div>
              </div>
              <a className="img-fluid"  href="https://github.com/btkerns96/get-a-job"><img className="project2" src={project2} style={{ width: "100%"}} alt="..." /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/RachelWildberger/Social-Network-API">
              <div className="caption">
                <div className="caption-content">
                  <div className="h3">NoSQL: Socil Network API</div>
                  <p className="mb-4">In this project I built an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.</p>
                </div>
              </div>
              <a className="img-fluid" href="https://github.com/RachelWildberger/Social-Network-API"><img className="project3 " style={{ width: "100%"}} src={project3} alt="..." /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://github.com/RachelWildberger/Employee-Tracker">
              <div className="caption">
                <div className="caption-content">
                  <div className="h3">Employee Tracker</div>
                  <p className="mb-4">Built a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
                </div>
              </div>
              <a className="img-fluid" href="https://github.com/RachelWildberger/Employee-Tracker"><img className="project4" src={project4} style={{ width: "100%"}} alt="..." /></a>
            </a>
          </div>


          </div>

        </div>
        </div>
      </section>
    </div>
  );
}
