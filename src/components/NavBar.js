import React from 'react';
import logo from '../logo.png'

function NavBar({ currentPage, handlePageChange }) {
  return (

    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#!"><img className="logo" src={logo} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <a href="#about" onClick={() => handlePageChange('About')}>About</a>
          </li>
          <li className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
            <a href="#portfolio"
              onClick={() => handlePageChange('Projects')}>Projects</a>
          </li>
          <li className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
          </li>
          <li className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default NavBar;
