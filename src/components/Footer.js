import React from 'react';

export default function Footer() {
    return (
      <div>
        <footer className="text-center text-lg-stop">
            <div className="justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <div className="textcol-lg-4 text-lg-stop">&copy;Rachel Wildberger 2023</div>
                </div>
                    <section className="me-5 d-none d-lg-block">
                        <a className="social-icon fa-lg  mx-2" href="#https://github.com/RachelWildberger"><i className="fa-brands fa-github"></i></a>
                        <a className="social-icon fa-lg mx-2" href="#https://www.linkedin.com/in/rachelwildbergerdesigner/"><i className="fa-brands fa-linkedin-in"></i></a>
                    </section>
                </div>

        </footer>
      </div>
    );
  }