import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img from "../assets/img/photo_2024-11-22_15-53-21.jpg";
import imgs from "../assets/img/walleper.jpg";
import Navbar from "../component/Navbar"; 

function About() {
  return (
    <div className=" bg-light">
      <Navbar/>
      <section id="about" className="about">
        <div className="container section-title" data-aos="fade-up">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img src={img} className="img-fluid py-4 mt-5" alt="img" style={{width:"800px", height:"530px"}}/>
              </div>

              <div className="col-lg-8 content">
                <div className="container section-title" data-aos="fade-up">
                  <h2>About</h2>
                  <p>
                    Hello! I'm Yoseph Adane, a Full Stack Web Developer with a
                    passion for creating innovative solutions and a strong
                    commitment to continuous learning. My background includes a
                    blend of software development, problem-solving, and
                    teamwork, which allows me to effectively tackle challenging
                    projects. I have experience in HTML, CSS, JavaScript, and
                    various frameworks, and I'm always eager to expand my skill
                    set. My interest lies in building impactful software
                    applications that not only meet user needs but also push the
                    boundaries of what's possible. When I'm not coding, you can
                    find me exploring new technologies, reading up on the latest
                    industry trends, or collaborating with others on exciting
                    new projects.
                  </p>
                </div>
                <h2>UI/UX Designer &amp; Web Developer.</h2>
                <p className="fst-italic py-3">
                  Web developers focus on the technical aspects of a site,
                  ensuring it is fast, responsive, and optimized for
                  performance. They often collaborate with designers to bring
                  creative visions to life and ensure the site is both visually
                  appealing and user-friendly.
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Birthday:</strong> <span>04 jan 2000</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Phone:</strong> <span>+251 955693305</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>City:</strong>{" "}
                          <span>Addis Ababa,Ethiopia</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Degree:</strong> <span>Bachelor</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Email:</strong>{" "}
                          <span>yosephadane63@gmail.com.com</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="py-3">
                    A UI/UX Designer focuses on creating user-centered designs
                    that ensure an intuitive and engaging experience for users.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
