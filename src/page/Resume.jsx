import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../component/Navbar";

function Resume() {
  return (
    <div>
      <Navbar />
      <section className="resume section py-2 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Resume</h2>
          <p className="mb-2">
            Passionate Full Stack Developer with expertise in building dynamic web applications
            using modern technologies like React, Node.js, and MongoDB. Skilled in creating 
            seamless user experiences and optimizing back-end performance.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <p>
                  <em>
                  Experienced Full Stack Developer with a strong background in building dynamic 
                  web applications using modern frameworks like React, Node.js, and MongoDB.
                  Proficient in designing user-friendly interfaces and managing scalable back-end systems. 
                  Passionate about creating efficient and robust solutions for complex problems.
                  </em>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h5>Bachelor's Degree in Engineering</h5>
                <h6>2021 - Present</h6>
                <p><em>Addis Ababa Institute of Technology (AAiT)</em></p>
                <p>
                  Studied core engineering principles, software development methodologies,
                  and modern programming frameworks.
                </p>
              </div>

              <div className="resume-item">
                <h5>Web Development & UI/UX Design</h5>
                <h6>2021 - Present</h6>
                <p><em>Addis Ababa Institute of Technology, Addis Ababa</em></p>
                <p>
                  Specialized in front-end technologies, user-centered design, and building 
                  interactive and responsive web applications.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h5>Full-Stack Developer</h5>
                <h6>2023 - Present</h6>
                <p><em>Addis Ababa, Ethiopia</em></p>
                <ul>
                  <li>Developed dynamic, responsive front-end applications using React and Bootstrap.</li>
                  <li>Built scalable and optimized back-end APIs with Node.js and Express.</li>
                  <li>Integrated MongoDB for efficient data management and storage solutions.</li>
                  <li>Implemented authentication and authorization mechanisms using JWT.</li>
                  <li>Collaborated with teams using Git and version control best practices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
