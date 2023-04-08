import React from 'react';
import logo from '../logo.png'

function NavBar({ currentPage, handlePageChange }) {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              href="#Home"
              onClick={() => handlePageChange('Home')}

              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#About"
              onClick={() => handlePageChange('About')}

              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Projects"
              onClick={() => handlePageChange('Projects')}

              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"

              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}

              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default NavBar;
