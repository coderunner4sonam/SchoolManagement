import React from "react";

function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <div className="article">
            <h3>What is a school management systems?</h3>
            <p>
              A school management system is an information management system for
              educational institutions to manage student data. It helps teachers
              get information about students faster, easier and reduces their
              workload.
            </p>
            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src="https://www.geniusedusoft.com/images/sms.jpg" />
        </div>
        <div className="social">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
