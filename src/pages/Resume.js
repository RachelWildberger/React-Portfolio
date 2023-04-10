import React from 'react';
import resumePdf from '../assets/files/Wildberger-Resume-2023.pdf'

export default function Resume() {
  return (
    <div>

      <section className="container">
        <div className="container">
          <hr className="divider" />
          <div className="row">
            <div className="col-sm text-center">
              <div className="mt-3">
                <div className="mb-2"><i className="fa-solid fa-pen-fancy"></i></div>
                <h3 className="h4 mb-2">Design</h3>
                <li className="text-muted mb-0">Adobe Creative Suite</li>
                <li className="text-muted mb-0">Figma</li>
                <li className="text-muted mb-0">Brand Identity</li>
                <li className="text-muted mb-0">Content Production</li>
              </div>
            </div>
            <div className="col-sm text-center">
              <div className="mt-3">
                <div className="mb-2"><i className="fa-solid fa-laptop-code"></i></div>
                <h3 className="h4 mb-2">Front-End</h3>
                <li className="text-muted mb-0">Html</li>
                <li className="text-muted mb-0">CSS</li>
                <li className="text-muted mb-0">JavaScript</li>
                <li className="text-muted mb-0">JQuery</li>
              </div>
            </div>
            <div className="col-sm text-center">
            <div className="mt-3">
                <div className="mb-2"><i className="fa-solid fa-code"></i></div>
                <h3 className="h4 mb-2">Back-End</h3>
                <li className="text-muted mb-0">Node.js</li>
                <li className="text-muted mb-0">Express.js</li>
                <li className="text-muted mb-0">MySQL</li>
                <li className="text-muted mb-0">MongoDB</li>
              </div>
            </div>
          </div>
        </div>
<div className="container">
<div clasName="row">
        <hr className="divider" />
        <p className="col-md text-center"></p>
        </div>
        <div className="container col-xl-4 col-lg-4">
          <a           
          href={resumePdf} 
          className="btn btn-dark " 
          type="button" download>
            Download Resume
          </a>
        </div>
        </div>
      </section>
    </div>
  );
}
