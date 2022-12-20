import React from 'react';

function Intro() {
	return (
    <div className="main-wrapper">
      <div className="welcome-screens">
        <div className="d-flex justify-content-end">
          <div className="logo">
            <img src={require('../assets/images/logo.svg').default} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="d-flex position-relative">
          <div>
            <div className="summer-heading d-flex align-items-center">
              <img src={require('../assets/images/tour-guide-cat.svg').default} className="img-fluid" alt="" />
              18 Summers Travel Tool
            </div>
            <div className="clearfix"></div>
            <div className="planing-family">
              <h3>Planning of Your Family's “18 Summers” of Vacations</h3>
            </div>
          </div>

          <div className="sparkling-star-wrapper">
            <div className="star d-flex justify-content-center align-items-center">
              <img src={require('../assets/images/star.svg').default} className="img-fluid" alt="" />
              <span>Find your family's<br/> perfect vacation <br/>plans with feedback<br/> from your whole<br/> family!</span>
            </div>
          </div>
        </div>

        <div className="banner-grid">
          <div className="cats3">
            <img src={require('../assets/images/3cats.svg').default} className="img-fluid" alt="" />
          </div>
          <div className="right-buttons mb-3 ms-md-0 ms-lg-5 d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
              <div>
                <a name="" id="" className="btn btn-primary mb-3" href="./welcome_intro_1.html" role="button">Start The Survey</a>
              </div>
              <div>
                <a name="" id="" className="btn btn-primary mb-3" href="#" role="button">Finish Your Survey</a>
              </div>
              <div>
                <a name="" id="" className="btn btn-primary mb-3" href="#" role="button">Survey Results</a>
              </div>
              <div>
                <a name="" id="" className="btn btn-primary" href="#" role="button">View Recomendations</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links mt-5 px-3">
          <div className="d-flex align-items-center">
            <a href="" className="d-flex align-items-center me-4">
              <div className="d-flex">
                <img src={require('../assets/images/info-icon.svg').default} className="img-fluid me-1" alt="" />
              </div>
              Instructions
            </a>
            <a href="" className="d-flex align-items-center">
              <div className="d-flex">
                <img src={require('../assets/images/about-icon.svg').default} className="img-fluid me-1" alt="" />
              </div>
              About
            </a>
            <a href="./settings.html" className="d-flex align-items-center ms-3">
              Settings
            </a>
            <a href="./login.html" className="d-flex align-items-center ms-3">
              Login
            </a>
          </div>
          <a href="" className="d-flex align-items-center">
            <div className="d-flex">
              <img src={require('../assets/images/about-icon.svg').default} className="img-fluid me-1" alt="" />
            </div>
            Instructions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
